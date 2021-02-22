import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import M from "materialize-css"

const SignUp = () => {
	const history = useHistory()
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [image, setImage] = useState("")
	const [url, setUrl] = useState(undefined)
	useEffect(() => {
		if (url) {
			uploadFields()
		}
	})
	const uploadPic = () => {
		const data = new FormData()

		data.append("file", image)
        data.append("upload_preset", "bigbrain")
        data.append("cloud_name", "bigbrain")
		fetch("https://api.cloudinary.com/v1_1/bigbrain/image/upload", {
			method: "post",
			body: data
		})
			.then(res => res.json())
			.then(data => {
				setUrl(data.url)
			})
			.catch(err => {
				console.log(err)
			})
	}
	const uploadFields = () => {
		fetch('/signup', {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				password,
				email,
				pic: url
			})
		}).then(res => res.json())
			.then(data => {
				if (data.error) {
					M.toast({ html: data.error, classes: "#004d40 teal darken-4" })
				}
				else {
					M.toast({ html: data.message, classes: "#03a9f4 light-blue" })
					history.push("/signin")
				}
			}).catch(err => {
				console.log(err)
			})
	}
	const PostData = () => {
		if (image) {
			uploadPic()
		}
		else {
			uploadFields()
		}

	}

	return (

		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 col-md-6 form-container">
					<div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
						<div className="logo mt-5 mb-3">

							<i className="fas fa-brain fa-8x mx-3 icon-cog"></i>
						</div>
						<div className="heading mb-3">
							<h4 className="co">Create an account</h4>
						</div>
						<form>
							<div className="form-input">
								<span><i className="fa fa-user"></i></span>
								<input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />

							</div>
							<div className="form-input">
								<span><i className="fa fa-envelope"></i></span>
								<input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
							</div>
							<div className="form-input">
								<span><i className="fa fa-lock"></i></span>
								<input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
							</div>
							<div className="row mb-3">
								<div className="file-field input-field">
									<div className="btn #64b5f6 blue darken-1">
										<span>Upload Profile Picture</span>
										<input type="file" onChange={(e) => setImage(e.target.files[0])} />
									</div>
									<div className="file-path-wrapper">
										<input className="file-path validate" type="text" />
									</div>
								</div>
							</div>
							<div className="text-left mb-3">
								<button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => PostData()}>Register</button>
							</div>

							<div className="text-white">Already have an account?
							<Link to="/signin" className="login-link">Login here</Link>
							</div>
						</form>
					</div>
				</div>

				<div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
			</div>
		</div>



	)
}


export default SignUp