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
        <div className="login-modal sign-in" id="signin" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered " role="document">
				<div className="modal-content">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}><span aria-hidden="true" onClick={closeModal}>&times;</span></button>
					<div className="modal-body">
						<div className="logo-area">
							<img className="logo" src={Logo} alt="" />
						</div>
						<div className="header-area">
							<h4 className="title">Great to have you back!</h4>
							<p className="sub-title">Enter your details below.</p>
						</div>
						<div className="form-area">
							<form action="#" method="POST">
								<div className="form-group">
										<label htmlFor="input-name">Name</label>
										<input type="text" className="input-field" id="input-name"  placeholder="Enter your Name" />
								</div>
								<div className="form-group">
										<label htmlFor="input-email">Email</label>
										<input type="email" className="input-field" id="input-email"  placeholder="Enter your Email" />
								</div>
								<div className="form-group">
										<label htmlFor="input-password">Password</label>
										<input type="password" className="input-field" id="input-password"  placeholder="Enter your password" />
								</div>
								<div className="form-group">
										<label htmlFor="input-con-password">confirm password</label>
										<input type="password" className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password" />
								</div>
								
								<div className="form-group">
									<div className="check-group">
											<input type="checkbox" className="check-box-field" id="input-terms" checked />
											<label htmlFor="input-terms">
													I agree with <Link to="#">terms and Conditions</Link> and  <Link to="#">privacy policy</Link>
											</label>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="mybtn1">Sign Up</button>
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