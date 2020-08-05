import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { connect } from "react-redux"
import { openSignInModal, openSignUpModal } from "../Actions/modalActions"

function SignUp(props) {

	const closeModal = (e) => {
		e.preventDefault()
        props.openSignUpModal(false)
    }

	if(!props.showSignUpModal) {
		return null
	}
    return (
		
		<div className="modalDiv">
        <div class="login-modal sign-in" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered " role="document">
				<div class="modal-content">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}><span aria-hidden="true" onClick={closeModal}>&times;</span></button>
					<div class="modal-body">
						<div class="logo-area">
							<img class="logo" src={Logo} alt="" />
						</div>
						<div class="header-area">
							<h4 class="title">Great to have you back!</h4>
							<p class="sub-title">Enter your details below.</p>
						</div>
						<div class="form-area">
							<form action="#" method="POST">
								<div class="form-group">
										<label for="input-name">Name</label>
										<input type="text" class="input-field" id="input-name"  placeholder="Enter your Name" />
								</div>
								<div class="form-group">
										<label for="input-email">Email</label>
										<input type="email" class="input-field" id="input-email"  placeholder="Enter your Email" />
								</div>
								<div class="form-group">
										<label for="input-password">Password</label>
										<input type="password" class="input-field" id="input-password"  placeholder="Enter your password" />
								</div>
								<div class="form-group">
										<label for="input-con-password">confirm password</label>
										<input type="password" class="input-field" id="input-con-password"  placeholder="Enter your Confirm Password" />
								</div>
								
								<div class="form-group">
									<div class="check-group">
											<input type="checkbox" class="check-box-field" id="input-terms" checked />
											<label for="input-terms">
													I agree with <Link to="#">terms and Conditions</Link> and  <Link to="#">privacy policy</Link>
											</label>
									</div>
								</div>
								<div class="form-group">
									<button type="submit" class="mybtn1">Sign Up</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
    )
}


const mapStateToProps = (state) => {
	const { modalReducer } = state
	return {
      showSignInModal: modalReducer.showSignInModal,
      showSignUpModal: modalReducer.showSignUpModal,
	}
  }
  

  const mapDispatchToProps = (dispatch) => {
	return {
        openSignInModal: (value) =>  dispatch(openSignInModal(value)),
        openSignUpModal: (value) =>  dispatch(openSignUpModal(value)),
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)