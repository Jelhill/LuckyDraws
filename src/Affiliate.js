
import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"

export default function Affiliate() {
	return (
		<div>
			<Header />

			<div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
							<Link className="navbar-brand" to="index">
								<img src="assets/images/logo.png" alt="" />
							</Link>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse fixed-height" id="main_menu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item ">
	<Link className="nav-link " to="index">Home
		<div className="mr-hover-effect"></div>
	</Link>
</li>
									<ul className="navbar-nav ml-auto">
									<li className="nav-item ">
										<Link className="nav-link " to="index">Home
												<div className="mr-hover-effect"></div></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="competitions">Competitions
												<div className="mr-hover-effect"></div></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="how-it-work">How To Play
												<div className="mr-hover-effect"></div></Link>
									</li>
																
											<li className="nav-item">
											<Link className="nav-link" to="contact">Contact
													<div className="mr-hover-effect"></div></Link>
										</li>
								</ul>
									
									
									
									<li className="nav-item">
											<Link className="nav-link" to="contact">Contact
													<div className="mr-hover-effect"></div></Link>
										</li>
								</ul>
								<Link to="#" className="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</Link>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

	{/* </header> */}

		<section className="breadcrumb-area bc-affiliate">
			<img className="bc-img" src="assets/images/breadcrumb/affiliate.png" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h4 className="title">
							affiliate
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
								<Link to="affiliate">Affiliate</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section className="affiliate-process">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="single-process">
							<img src="assets/images/affiliate/ps1.png" alt="" />
							<span className="num">1</span>
							<h4 className="title">
								Join
							</h4>
							<p className="text">
								Sign up for our Platform and fill in the required 
								details to access your 
								affiliate panel.
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-process">
							<img src="assets/images/affiliate/ps2.png" alt="" />
							<span className="num">2</span>
							<h4 className="title">
								Promote
							</h4>
							<p className="text">
								Sign up for our Platform and fill in the required 
								details to access your 
								affiliate panel.
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-process">
							<img src="assets/images/affiliate/ps3.png" alt="" />
							<span className="num">3</span>
							<h4 className="title">
								Earn
							</h4>
							<p className="text">
								Sign up for our Platform and fill in the required 
								details to access your 
								affiliate panel.
							</p>
						</div >
					</div>
				</div>
			</div>
		</section>
		<section className="affiliate-program">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
								Why Should you Join
							</h5>
							<h2 className="title">
								Affiliate program?
							</h2>
							<p className="text">
								The World's leading online crypto games affiliate program. Promote Jeugo with the biggest lotteries & crypto games  to get 15% 25% revenue share commission.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="single-program">
							<div className="icon one">
								<img src="assets/images/affiliate/ic1.png" alt="" />
							</div>
							<div className="content">
								<h4 className="title">
									Joining is free & EASy
								</h4>
								<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-program">
							<div className="icon four">
								<img src="assets/images/affiliate/ic2.png" alt="" />
							</div>
							<div className="content">
								<h4 className="title">
									Unlimited Affiliates
								</h4>
								<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-program">
							<div className="icon two">
								<img src="assets/images/affiliate/ic3.png" alt="" />
							</div>
							<div className="content">
								<h4 className="title">
									Provably Fair
								</h4>
								<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-program">
							<div className="icon two">
								<img src="assets/images/affiliate/ic4.png" alt="" />
							</div>
							<div className="content">
								<h4 className="title">
										Secure playing
								</h4>
								<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-program">
							<div className="icon three">
								<img src="assets/images/affiliate/ic5.png" alt="" />
							</div>
							<div className="content">
								<h4 className="title">
									Rewarsd
								</h4>
								<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-program">
							<div className="icon three">
								<img src="assets/images/affiliate/ic6.png" alt="" />
							</div>
							<div className="content">
								<h4 className="title">
										24/7 Support
								</h4>
								<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="ref-commission">
			<img className="ab-img" src="assets/images/affiliate/ref-comm.png" alt="" />
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-lg-7">
						<div className="section-heading">
							<h5 className="subtitle">
								Try to check out our
							</h5>
							<h2 className="title">
								Ref.Commission
							</h2>
							<p className="text">
								Get even more profit by attracting other participants as your referrals. We propose to take advantage of a 
								convenient three-level referral system.Our affiliates enjoy some of the highest commission rates in the industry.
								Your income is in your hands!
							</p>
							<p className="text">
								We provide our affiliates with a whole set of promo tools in different formats to enable them to promote our services effectively to different target markets. To help you keep on top of the game we publish recent news on our website regularly.
							</p>
							<Link to="#" className="mybtn1">join Now! </Link>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="marketing-tools">
			<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
									Try to check out our
							</h5>
							<h2 className="title">
									Marketing Tools
							</h2>
							<p className="text">
									We create long term value for our partners by putting innovations, data and sustainability at the very heart of our business.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-tools">
								<div className="icon one">
									<img src="assets/images/affiliate/ic7.png" alt="" />
								</div>
								<div className="content">
									<h4 className="title">
											Banners
									</h4>
									<p className="text">
											Use our templates to send high-quality newsletters to keep players engaged
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-tools">
								<div className="icon two">
									<img src="assets/images/affiliate/ic8.png" alt="" />
								</div>
								<div className="content">
									<h4 className="title">
											Newsletters
									</h4>
									<p className="text">
											Use our templates to send high-quality newsletters to keep players engaged
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-tools">
								<div className="icon three">
									<img src="assets/images/affiliate/ic9.png" alt="" />
								</div>
								<div className="content">
									<h4 className="title">
											News
									</h4>
									<p className="text">
											Use our templates to send high-quality newsletters to keep players engaged
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-tools">
								<div className="icon three">
									<img src="assets/images/affiliate/ic10.png" alt="" />
								</div>
								<div className="content">
									<h4 className="title">
											Reports
									</h4>
									<p className="text">
											Use our templates to send high-quality newsletters to keep players engaged
									</p>
								</div>
							</div>
						</div>
					</div>
			</div>
		</section>
		<section className="testimonial">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
									Testimonials
							</h5>
							<h2 className="title">
									earning With Us
							</h2>
							<p className="text">
									If you enjoy our gaming community and would like the opportunity to earn an income, then you won't want to miss 
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="testimonial-slider">
							<div className="single-testimonial">
								
									<div className="people">
											<div className="img">
													<img src="assets/images/review.png" alt="" />
											</div>
											<h4 className="title">Kevin Ohashi</h4>
											<p className="designation">CEO OF APPLE</p>
										</div>
									<div className="review-text">
										<p>
												“Jeugo Affiliates provides excellent brand and very 
	professional team. It is very easy and profitable 
	partnership with us and we converting very well.”
										</p>
									</div>
							</div>
							<div className="single-testimonial">
								
									<div className="people">
											<div className="img">
													<img src="assets/images/review.png" alt="" />
											</div>
											<h4 className="title">Mamun Khan</h4>
											<p className="designation">CEO OF APPLE</p>
										</div>
									<div className="review-text">
										<p>
												“Jeugo Affiliates provides excellent brand and very 
	professional team. It is very easy and profitable 
	partnership with us and we converting very well.”
										</p>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

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
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>	About Us
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>	Contact Us
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>	Latest Blog
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>	Authenticity Guarantee
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>	Customer Reviews
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>	Privacy Policy
		
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
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i> How to Withdraw
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i> Account Varification
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i> Safety & Security
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i> Membership Level
		
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
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Help centre
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>FAQ
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Quick Start Guide
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Tutorials
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Borrow
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Lend
		
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
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Risk Warnings
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Privacy Notice
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Security
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Terms of Service
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Become Affiliate
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-angle-double-right"></i>Complaints Policy
		
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
							<div className="col-lg-5">
								<div className="left-area">
									<p>Copyright © 2020.All Rights Reserved By <Link to="https://www.Doshservices.com">Dosh Services</Link>
									</p>
								</div>
							</div>
							<div className="col-lg-7">
								<ul className="copright-area-links">
									<li>
										<Link to="#">Terms Of Use</Link>
									</li>
									<li>
										<Link to="#">Privacy Policy</Link>
									</li>
									<li>
										<Link to="#">Gamble</Link>
									</li>
									<li>
										<Link to="#">Aware</Link>
									</li>
									<li>
										<Link to="#">Help Cente</Link>
									</li>
								</ul>
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
										<input type="password" className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password" />
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
	</div>
	
	)
}
