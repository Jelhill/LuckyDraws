import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { updateStateWithRegistration, saveImageInState } from "./Actions/modalActions"
import { checkForTokenWithExpiryDate } from "./Actions/helperFunctions"


function BillingDetails(props) {

	const getFormInput = (e) => {
        props.updateStateWithRegistration({[e.target.name]: e.target.value})
	}

	const updateBillingsDetails = (e) => {
		e.preventDefault()
		const userObject = checkForTokenWithExpiryDate("access-token")
        const {address, city, state, post_code, first_name, last_name, email } = props.formInputs
        
		var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userObject.token}`);
        
		const data = new FormData()
		data.append("email", email);
		data.append("address", address);
		data.append("city", city);
		data.append("state", state);
		data.append("post_code", post_code);
		data.append("last_name", last_name);
		data.append("first_name", first_name);
		fetch("https://app.luckydraws.ng/account/billing-adress", {
			method: "POST",
			headers: myHeaders,
			body: data
		})
		.then(response => response.json())
		.then(jsonResponse => {
			console.log(jsonResponse)   
			if(jsonResponse.status === "success" && Object.keys(jsonResponse.data).length > 0) {
				props.history.push("/paystackCheckout")
			}			
        })
		.catch(err => console.log(err))		
	}

	return (
		<Fragment>
			<Header />
			<section className="breadcrumb-area bc-awards">
				<img className="bc-img" src="assets/images/breadcrumb/awards.png" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Billing
							</h4>
							<ul className="breadcrumb-list">
								<li>
									<Link to="index">
											<i className="fas fa-home"></i>
											Home
									</Link>
								</li>
								<li>
									<span><i className="fas fa-chevron-right"></i> </span>
								</li>
								<li>
									<Link to="profile">profile</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{!props.successMessage ? null : <div className="successResponse">{props.successMessage}</div> }
			</section>
			
			<section className="awards-area">			
				<div className="container">								
					<div className="row">										
						<div className="col-lg 6 col-md-offset-2 profile" >
								<div className="profile-form-wrapper">
									<div className="profile-box">
											<div className="form-group mb-3">
												<label htmlFor="first_name">
													Firtname
												</label>												
												<input type="text" className="form-control" name="first_name"
													placeholder="First Name" onChange={getFormInput}/>
											</div>
											<div className="form-group mb-3">
												<label htmlFor="last_name">
													Last Name
												</label>

												
												<input type="text" className="form-control" name="last_name"
													placeholder="Last Name" onChange={getFormInput}/>
											</div>
											<div className="form-group mb-3">
												<label htmlFor="email">
													Email
												</label>

												
												<input type="text" className="form-control" name="email"
													placeholder="Email" onChange={getFormInput}/>
											</div>
											<div className="form-group mb-3">
												<label htmlFor="phone">
													Phone Number
												</label>

												
												<input type="text" className="form-control" name="phone"
													placeholder="Phone" onChange={getFormInput}/>
											</div>
										<div className="form-group mb-3">												
												<label htmlFor="address">
													Address
												</label>

												
												<input type="text" className="form-control" name="address"
													placeholder="Address" onChange={getFormInput} />
										</div>
										<div className="form-group mb-3">
												
												<label htmlFor="cityname">
													City
												</label>

												
												<input type="text" className="form-control" name="city"
													placeholder="City" onChange={getFormInput}/>
													
										</div>
										<div className="form-group mb-3">
												<label htmlFor="state">
													State
												</label>												
												<select name="state" defaultValue={"Select.."} className="form-control" onChange={getFormInput}>
													<option hidden>Select</option>
													<option value="Abia">Abia</option>
													<option value="Adamawa">Adamawa</option>
													<option value="Akwa ibom">Akwa Ibom</option>
													<option value="Anambra">Anambra</option>
													<option value="Bauchi">Bauchi</option>
													<option value="Bayelsa">Bayelsa</option>
													<option value="Benue">Benue</option>
													<option value="Borno">Borno</option>
													<option value="Cross-river">Cross River</option>
													<option value="Delta">Delta</option>
													<option value="Ebonyi">Ebonyi</option>
													<option value="Edo">Edo</option>
													<option value="Ekiti">Ekiti</option>
													<option value="Enugu">Enugu</option>
													<option value="Gombe">Gombe</option>
													<option value="Imo">Imo</option>
													<option value="Jigawa">Jigawa</option>
													<option value="Kaduna">Kaduna</option>
													<option value="Katsina">Katsina</option>
													<option value="Kano">Kano</option>
													<option value="Kebbi">Kebbi</option>
													<option value="Kogi">Kogi</option>
													<option value="Kwara">Kwara</option>
													<option value="Lagos">Lagos</option>
													<option value="Nasarawa">Masarawa</option>
													<option value="Niger">Niger</option>
													<option value="Ogun">Ogun</option>
													<option value="Ondo">Ondo</option>
													<option value="Osun">Osun</option>
													<option value="Oyo">Oyo</option>
													<option value="Plateau">Plateau</option>
													<option value="Rivers">Rivers</option>
													<option value="Sokoto">Sokoto</option>
													<option value="Taraba">Taraba</option>
													<option value="Yobe">Yobe</option>
													<option value="Zamfara">Zamfara</option>
													<option value="FCT">Federal Capital Territory</option>
												</select>
											</div>
											<div className="form-group mb-3">
												<label htmlFor="state">
													Post Code
												</label>					
												<input type="text" className="form-control" name="post_code"
													placeholder="Post Code" onChange={getFormInput} />
											</div>
												<button type="submit" className="mybtn1" onClick={updateBillingsDetails}>Checkout</button>
									</div>
								</div>
						</div>
					</div>
				</div>		
			</section>
		
			
			<Footer />
		
			<div className="bottomtotop">
				<i className="fas fa-chevron-right"></i>
			</div>
		</Fragment>

	)
}

const mapStateToProps = (state) => {
	const { modalReducer } = state
	console.log("Success Message", modalReducer.formInputs)
	return {
	  formInputs: modalReducer.formInputs,
	  userImage: modalReducer.userImage,
	  successMessage: modalReducer.successMessage
	}
  }
  

  const mapDispatchToProps = (dispatch) => {
	return {
		updateStateWithRegistration: (modalInputs) => dispatch(updateStateWithRegistration(modalInputs)),
		saveImageInState: (image) => dispatch(saveImageInState(image)),
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails)