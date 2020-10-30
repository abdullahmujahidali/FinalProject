import React from "react"
import styled from 'styled-components';
import "../../components/main.js"


const YourEffect = styled.div`


`


const SignUp =()=>{
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
						<h4 className="co">Create an account</h4>
					</div>
					<form>
						<div className="form-input">
							<span><i className="fa fa-user"></i></span>
							<input type="text" placeholder="Full Name" required />
						</div>
						<div className="form-input">
							<span><i className="fa fa-envelope"></i></span>
							<input type="email" placeholder="Email Address" required />
						</div>
						<div className="form-input">
							<span><i class="fa fa-lock"></i></span>
							<input type="password" placeholder="Password" required />
						</div>
						<div className="row mb-3">
							<div className="col-12 d-flex">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cb1" />
									<label className="custom-control-label text-white" for="cb1">I agree all terms & conditions</label>
								</div>
							</div>
						</div>
						<div className="text-left mb-3">
							<button type="submit" className="btn">Register</button>
						</div>
						<div className="text-white mb-3">or register with</div>
						<div className="row mb-3">
							<div className="col-4">
								<a href="" className="btn btn-block btn-social btn-facebook">
									<i className="fa fa-facebook"></i>
								</a>
							</div>
							<div className="col-4">
								<a href="" className="btn btn-block btn-social btn-google">
									<i className="fa fa-google"></i>
								</a>
							</div>
							<div className="col-4">
								<a href="" className="btn btn-block btn-social btn-twitter">
									<i className="fa fa-twitter"></i>
								</a>
							</div>
						</div>
						<div className="text-white">Already have an account?
							<a href="login.html" className="login-link">Login here</a>
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


export default SignUp