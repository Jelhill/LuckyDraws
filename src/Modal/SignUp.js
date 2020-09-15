import React from 'react'
import { Link, withRouter } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { connect } from "react-redux"
import { openSignInModal, openSignUpModal, updateStateWithRegistration, showValidationError, showSuccessMessage } from "../Actions/modalActions"
import { saveTokenWithExpiration, userInputValidation } from "../Actions/helperFunctions"

function SignUp(props) {
	  
	const closeModal = () => {	
        props.openSignUpModal(false)
    }

	const getFormInput = (e) => {
		props.updateStateWithRegistration({[e.target.name]: e.target.value})
		let message = userInputValidation(e)
		props.showValidationError(message)
	}

	const handleSignup = (e) => {
		e.preventDefault()
		const {first_name, last_name, email, phone, password} = props.formInputs
		const body = {first_name, last_name, email, phone, password}
		fetch(`https://app.luckydraws.ng/register`, {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify(body)
		})
		.then(res => res.json())
		.then((jsonRes) => {
			if(jsonRes.status === "success"){
				const { access_token, user } = jsonRes
				const bearerToken = `${access_token.token}`
				saveTokenWithExpiration("access-token", bearerToken, 2592000000, user)
				props.showSuccessMessage("Registered Successfully")
				closeModal()	
				props.history.push("/profile")			
			}
		})
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
										<label htmlFor="input-name">First Name</label>
										{!props.firstnameErrorMessage.length ? null : <small>{props.firstnameErrorMessage}</small> }
										<input type="text" onChange={getFormInput} name="first_name" className="input-field" placeholder="Enter your First Name"/>
								</div>
								<div className="form-group">
										<label htmlFor="input-name">Last Name</label>
										{!props.surnameErrorMessage.length ? null : <small>{props.surnameErrorMessage}</small> }
										<input type="text" onChange={getFormInput} name="last_name" className="input-field" placeholder="Enter your Last Name" />
								</div>
								<div className="form-group">
										<label htmlFor="input-email">Email</label>
										{!props.emailErrorMessage.length ? null : <small>{props.emailErrorMessage}</small> }
										<input type="email" onChange={getFormInput} name="email" className="input-field" placeholder="Enter your Email" />
								</div>
								<div className="form-group">
										<label htmlFor="input-email">Phone Number</label>										
										{!props.phoneErrorMessage.length ? null : <small>{props.phoneErrorMessage}</small> }
										<input type="text" onChange={getFormInput} name="phone" className="input-field"  placeholder="Enter your Phone Number" />
								</div>
								<div className="form-group">
										<label htmlFor="input-password">Password</label>
										{!props.passwordErrorMessage.length ? null : <small>{props.passwordErrorMessage}</small> }
										<input type="password" onChange={getFormInput} name="password" className="input-field" placeholder="Enter your password" />
								</div>
								<div className="form-group">
										<label htmlFor="input-con-password">confirm password</label>
										<input type="password" onChange={getFormInput} name="confirmed_password" className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password" />
								</div>
								
								<div className="form-group">
									<div className="check-group">
											<input type="checkbox" className="check-box-field" />
											<label htmlFor="input-terms">
													I agree with <Link to="termsAndConditions" ><span>Terms and Conditions</span></Link> and  <Link to="#">privacy policy</Link>
											</label>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="mybtn1" onClick={handleSignup}>Sign Up</button>
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
	  formInputs: modalReducer.formInputs,
	  surnameErrorMessage: modalReducer.surnameErrorMessage,
	  firstnameErrorMessage: modalReducer.firstnameErrorMessage,
	  emailErrorMessage: modalReducer.emailErrorMessage,
	  passwordErrorMessage: modalReducer.passwordErrorMessage,
	  phoneErrorMessage: modalReducer.phoneErrorMessage,
	  successMessage: modalReducer.successMessage
	}
  }
  

  const mapDispatchToProps = (dispatch) => {
	return {
        openSignInModal: (value) =>  dispatch(openSignInModal(value)),
		openSignUpModal: (value) =>  dispatch(openSignUpModal(value)),
		updateStateWithRegistration: (modalInputs) => dispatch(updateStateWithRegistration(modalInputs)),
		showValidationError: (message) => dispatch(showValidationError(message)),
		showSuccessMessage: (message) => dispatch(showSuccessMessage(message)),
	}
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))