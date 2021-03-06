import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { updateStateWithRegistration, saveImageInState } from "./Actions/modalActions"
import { checkForTokenWithExpiryDate } from "./Actions/helperFunctions"


function Profile(props) {

	const getFormInput = (e) => {
		props.updateStateWithRegistration({[e.target.name]: e.target.value})
	}

	const getRoomImage = (e) => {
		props.saveImageInState({[e.target.name]: e.target.files})
	}

	const submitProfile = (e) => {
		e.preventDefault()
		const userObject = checkForTokenWithExpiryDate("access-token")
		const {gender, address, city, state, post_code, facebook, twitter } = props.formInputs
		const data = new FormData()
		var myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${userObject.token}`);
		data.append("profile_photo", props.userImage.profile_photo[0])
		data.append("gender", gender);
		data.append("address", address);
		data.append("city", city);
		data.append("state", state);
		data.append("post_code", post_code);
		data.append("twitter", twitter);
		data.append("facebook", facebook);

		console.log(data)
		fetch("https://app.luckydraws.ng/account/create_profile", {
			method: "POST",
			headers: myHeaders,
			body: data
		})
		.then(response => response.json())
		.then(jsonResponse => console.log(jsonResponse))
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
								Profile
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
						<div className="col-lg-4 ">						
							<div className="single-awards">
								<div className="content">
									<img src={props.userImage} alt="" />
									 <input type="file" name="profile_photo" onChange={getRoomImage} className="mybtn2"/>
								</div>
							</div>
						</div>
						
						<div className="col-lg 6 col-md-offset-2 profile" >
								<div className="profile-form-wrapper">
									<div className="profile-box">
										<div className="form-group mb-3">												
											<label htmlFor="gender">Gender </label>												
												<select className="form-control" name="gender" defaultValue="Gender" onChange={getFormInput}>
													<option disabled hidden>Gender</option>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
												</select>
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
											<div className="form-group mb-3">
												<label htmlFor="facebook">
													Facebook
												</label>

												
												<input type="text" className="form-control" name="facebook"
													placeholder="facebook" onChange={getFormInput}/>
											</div>
											<div className="form-group mb-3">
												<label htmlFor="twiiter">
													Twitter
												</label>

												
												<input type="text" className="form-control" name="twitter"
													placeholder="twiiter" onChange={getFormInput}/>
											</div>
												<button type="submit" className="mybtn1" onClick={submitProfile}>Update Profile</button>
											{/* <form action="#">
												<input type="text" className="input-field" placeholder="Enter Your Full Name" />
												<input type="email" className="input-field" placeholder="Enter Your Email Address" />
												<textarea className="input-field textarea" placeholder="Message *"></textareLink>
											</form> */}
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
	console.log("Success Message", modalReducer.successMessage)
	return {
	  formInputs: modalReducer.formInputs,
	  userImage: modalReducer.userImage,
	  successMessage: modalReducer.successMessage
	}
  }
  

  const mapDispatchToProps = (dispatch) => {
	return {
		updateStateWithRegistration: (modalInputs) => dispatch(updateStateWithRegistration(modalInputs)),
		saveImageInState: (image) => dispatch(saveImageInState(image))
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Profile)