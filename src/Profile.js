import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Profile() {
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
			</section>
			<section className="awards-area">
				<div className="container">
					
					<div className="row">
						<div className="col-lg-4 ">
							<div className="single-awards">
								<div className="content">
									<img src="assets/images/feature/payout.png" alt="" />
									<Link to="#" className="mybtn2">Change Picture</Link>
								</div>
							</div>
						</div>
						
						<div className="col-lg 6 col-md-offset-2 profile" >
								<div className="profile-form-wrapper">
									<div className="profile-box">
										<div className="form-group mb-3">											
												<label htmlFor="contactName">
													Full name
												</label>												
												<input type="text" className="form-control" id="contactName"
													placeholder="Full name" />
										</div>
										<div className="form-group mb-3">
												
												<label htmlFor="gender">
													Gender
												</label>

												
												<input type="text" className="form-control" id="gender"
													placeholder="Gender" />
										</div>
										<div className="form-group mb-3">
												
												<label htmlFor="address">
													Address
												</label>

												
												<input type="text" className="form-control" id="address"
													placeholder="Address" />
										</div>
										<div className="form-group mb-3">
												
												<label htmlFor="cityname">
													City
												</label>

												
												<input type="text" className="form-control" id="cityname"
													placeholder="City" />
													
										</div>
										<div className="form-group mb-3">
												<label htmlFor="state">
													State
												</label>

					
												<input type="text" className="form-control" id="state"
													placeholder="State" />
											</div>
											<div className="form-group mb-3">
												<label htmlFor="facebook">
													Facebook
												</label>

												
												<input type="text" className="form-control" id="facebook"
													placeholder="facebook" />
											</div>
											<div className="form-group mb-3">
												<label htmlFor="twiiter">
													Twitter
												</label>

												
												<input type="text" className="form-control" id="twiiter"
													placeholder="twiiter" />
											</div>
												<button type="submit" className="mybtn1">Update Profile</button>
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
