import React, { useState,useContext } from "react"
import styled from 'styled-components';
import {UserContext} from "../../App"
import "../main.js"
import "./Home"
import { Link, useHistory } from "react-router-dom"
import M from "materialize-css"

const YourEffect = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

`

const SignIn = () => {
	const {state,dispatch}=useContext(UserContext)
	const history = useHistory()
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")

	const PostData = () => {
		// if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
		// 	M.toast({ html: 'Invalid email', classes: '#0d47a1 blue darken-4' })
		// 	return
		// }
		fetch("/signin", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				password,
				email
			})
		}).then(res => res.json())
			.then(data => {
				if (data.error) {
					M.toast({ html: data.error, classes: '#0d47a1 blue darken-4' });
				}
				else {
					localStorage.setItem("jwt",data.token)
					localStorage.setItem("user",JSON.stringify(data.user))
					dispatch({type:"USER",payload:data.user})

					M.toast({ html: "Login Success", classes: '#0d47a1 blue darken-4' });
					history.push('/PostHome')
				}
			}).catch(err => {
				console.log(err)
			})

	}
	return (
		<YourEffect>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-md-6 form-container">
						<div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
							<div className="logo mt-5 mb-3">
								<i className="fas fa-brain fa-8x mx-3 icon-cog"></i>
							</div>
							<div className="heading mb-3">
								<h4>Login into your account</h4>
							</div>
							<form>
								<div className="form-input">
									<span><i className="fa fa-envelope"></i></span>
									<input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
								</div>
								<div className="form-input">
									<span><i className="fa fa-lock"></i></span>
									<input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
								</div>
								<div className="row mb-3">
									{/* <div className="col-6 d-flex">
										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="cb1" />
											<label className="custom-control-label text-white" for="cb1">Remember me</label>
										</div>
									</div> */}
									<div className="col-6 text-right">
										<Link to="forget.html" className="forget-link">Forget password</Link>
									</div>
								</div>
								<div className="text-left mb-3">
									<button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => PostData()}>Login</button>
								</div>

								<div className="text-white">Don't have an account?
							<Link to="/SignUp" className="register-link">Register here</Link>
								</div>
							</form>
						</div>
					</div>

					<div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
				</div>
			</div>

		</YourEffect>

	)
}



export default SignIn