import React from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { openSignInModal } from "../Actions/modalActions"

function SignIn(props) {

	const closeSignInModal = (e) => {
		e.preventDefault()
        props.openSignInModal(false)
    }

	if(!props.showSignInModal) {
		return null
	}
    return (
		<div className="modalDiv">
            <div class="login-modal" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeSignInModal}><span aria-hidden="true">&times;</span></button>
				<div class="modal-body">
					<div class="logo-area">
							<img class="logo" src="assets/images/logo.png" alt="" />
					</div>
					<div class="header-area">
						<h4 class="title">Great to have you back!</h4>
						<p class="sub-title">Enter your details below.</p>
					</div>
					<div class="form-area">
						<form action="#"  method="POST">
							<div class="form-group">
									<label for="login-input-email">Email</label>
									<input type="email" class="input-field" id="login-input-email"  placeholder="Enter your Email" />
							</div>
							<div class="form-group">
									<label for="login-input-password">Password</label>
									<input type="password" class="input-field" id="login-input-password"  placeholder="Password" />
							</div>
							<div class="form-group">
								<div class="box">
									<div class="left">
											<input type="checkbox" class="check-box-field" id="input-save-password" checked />
										<label for="input-save-password">Remember Password</label>
									</div>
									<div class="right">
										<Link to="#">
											Forgot Password?
										</Link>
									</div>
								</div>
							</div>
							<div class="form-group">
								   <button type="submit" class="mybtn1">Log In</button>
							</div>
						</form>
					</div>
					<div class="form-footer">
						<p>Not a member? 
								<Link to="#">Create account <i class="fas fa-angle-double-right"></i></Link>
						</p>
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
	}
  }
  

  const mapDispatchToProps = (dispatch) => {
	return {
		openSignInModal: (value) =>  dispatch(openSignInModal(value)),
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)