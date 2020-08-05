import React, { Fragment } from 'react'
import Header from './Header'
import { Link } from "react-router-dom"

export default function Awards() {
	return (
		<Fragment>
		<Header />
		<section className="breadcrumb-area bc-awards">
		<img className="bc-img" src="assets/images/breadcrumb/awards.png" alt="" />
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						Awards
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
							<Link to="awards">Awards</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="awards-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							Wellcome bonuses 
						</h5>
						<h2 className="title">
							Deposit Bonus
						</h2>
						<p className="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic1.png" alt="" />
							<h4 className="title">
								Luck power
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic2.png" alt="" />
							<h4 className="title">
								Zero Hunter
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic3.png" alt="" />
							<h4 className="title">
								BTC Top
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic4.png" alt="" />
							<h4 className="title">
								BTC King
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic5.png" alt="" />
							<h4 className="title">
								Money Bag
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic6.png" alt="" />
							<h4 className="title">
								BTC Top
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div className="community-blog">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="single-box">
						<div className="img">
							<img src="assets/images/team/community-icon.png" alt="" />
						</div>
						<div className="content">
							<h4 className="title">
									<Link to="#">Community <i className="fas fa-arrow-right"></i></Link>
							</h4>
							<p className="text">
									Find answers, support, and 
									inspiration from other Jeugo users.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="single-box">
						<div className="img">
							<img src="assets/images/team/blog-icon.png" alt="" />
						</div>
						<div className="content">
							<h4 className="title">
									<Link to="#">Blogs <i className="fas fa-arrow-right"></i></Link>
							</h4>
							<p className="text">
									Find answers, support, and 
									inspiration from other Jeugo users.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<footer className="footer" id="footer">
		<div className="subscribe-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="subscribe-box">
								<form action="#">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-area">
											<h5 className="sub-title">
													subscribe to LuckyDraws
											</h5>
											<h4 className="title">
													To Get Exclusive Benefits
											</h4>
									</div>
								</div>
								<div className="col-lg-3 col-4 d-flex align-self-center">
									<div className="icon">
										<img src="assets/images/mail-box.png" alt="" />
									</div>
								</div>
								<div className="col-lg-6 col-8 d-flex align-self-center">
									<div className="form-area">
											<input type="text" placeholder="Your Email Address" />
									</div>
								</div>
								<div className="col-lg-3 d-flex align-self-center">
									<div className="button-area">
										<button className="mybtn1" type="submit">Subscribe
											<span><i className="fas fa-paper-plane"></i></span>
										</button>
									</div>
								</div>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							About 
						</h4>
						<ul className="link-list">
							<li>
								<Link to="about">
									<i className="fas fa-angle-double-right"></i>	About Us
								</Link>
							</li>
							<li>
								<Link to="contact">
									<i className="fas fa-angle-double-right"></i>	Contact Us
								</Link>
							</li>
							
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							My Account
						</h4>
						<ul className="link-list">
							<li>
								<Link to="#">
									<i className="fas fa-angle-double-right"></i> Manage Your Account
								</Link>
							</li>
							<li>
								<Link to="#">
									<i className="fas fa-angle-double-right"></i> How to Deposit
								</Link>
							</li>
														
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							help center 
						</h4>
						<ul className="link-list">
							<li>
								<Link to="faq">
									<i className="fas fa-angle-double-right"></i>Help centre
								</Link>
							</li>
							<li>
								<Link to="faq">
									<i className="fas fa-angle-double-right"></i>FAQ
								</Link>
							</li>
							
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							Legal Info
						</h4>
						<ul className="link-list">
							<li>
								<Link to="terms-conditions-details">
									<i className="fas fa-angle-double-right"></i>Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="terms-conditions-details">
									<i className="fas fa-angle-double-right"></i>Terms of Service
								</Link>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="copy-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="left-area">
							<p>Copyright © 2020.All Rights Reserved By <Link to="https://www.Doshservices.com">Dosh Services</Link>
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</footer> 

	<div className="bottomtotop">
		<i className="fas fa-chevron-right"></i>
	</div>

	<div className="modal fade login-modal" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
									<label for="login-input-email">Email*</label>
									<input type="email" className="input-field" id="login-input-email"  placeholder="Enter your Email" />
							</div>
							<div className="form-group">
									<label for="login-input-password">Password*</label>
									<input type="password" className="input-field" id="login-input-password"  placeholder="Password" />
							</div>
							<div className="form-group">
								<div className="box">
									<div className="left">
											<input type="checkbox" className="check-box-field" id="input-save-password" checked />
										<label for="input-save-password">Remember Password</label>
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

		<div className="modal fade login-modal sign-in" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered " role="document">
				<div className="modal-content">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<div className="modal-body">
						<div className="logo-area">
								<img className="logo" src="assets/images/logo.png" alt="" />
						</div>
						<div className="header-area">
							<h4 className="title">Great to have you back!</h4>
							<p className="sub-title">Enter your details below.</p>
						</div>
						<div className="form-area">
							<form action="#" method="POST">
								<div className="form-group">
										<label for="input-name">Name*</label>
										<input type="text" className="input-field" id="input-name"  placeholder="Enter your Name" />
								</div>
								<div className="form-group">
										<label for="input-email">Email*</label>
										<input type="email" className="input-field" id="input-email"  placeholder="Enter your Email" />
								</div>
								<div className="form-group">
										<label for="input-password">Password*</label>
										<input type="password" className="input-field" id="input-password"  placeholder="Enter your password" />
								</div>
								<div className="form-group">
										<label for="input-con-password">confirm password**</label>
										<input type="password" className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password /" />
								</div>
								
								<div className="form-group">
									<div className="check-group">
											<input type="checkbox" className="check-box-field" id="input-terms" checked />
											<label for="input-terms">
													I agree with <Link to="#">terms and Conditions</Link> and  <Link to="#">privacy policy</Link>
											</label>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="mybtn1">Take Bonus</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				</div>
			</div>
			</Fragment>

	)
}