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
            <div className="login-modal" id="login" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeSignInModal}><span aria-hidden="true">&times;</span></button>
				<div className="modal-body">
					<div className="logo-area">
							<img className="logo" src="assets/images/logo.png" alt="" />
					</div>
					<div className="header-area">
						<h4 className="title">Great to have you back!</h4>
						<p className="sub-title">Enter your details below.</p>
					</div>
					<div className="form-area">
						<form action="#"  method="POST">
							<div className="form-group">
									<label htmlFor="login-input-email">Email</label>
									<input type="email" className="input-field" id="login-input-email"  placeholder="Enter your Email" />
							</div>
							<div className="form-group">
									<label htmlFor="login-input-password">Password</label>
									<input type="password" className="input-field" id="login-input-password"  placeholder="Password" />
							</div>
							<div className="form-group">
								<div className="box">
									<div className="left">
											<input type="checkbox" className="check-box-field" id="input-save-password" checked />
										<label htmlFor="input-save-password">Remember Password</label>
									</div>
									<div className="right">
										<Link to="#">
											Forgot Password?
										</Link>
									</div>
								</div>
							</div>
							<div className="form-group">
								   <button type="submit" className="mybtn1">Log In</button>
							</div>
						</form>
					</div>
					<div className="form-footer">
						<p>Not a member? 
								<Link to="#">Create account <i className="fas fa-angle-double-right"></i></Link>
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