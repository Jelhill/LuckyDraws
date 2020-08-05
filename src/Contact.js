
import React from 'react'
import Header from './Header'
import breadcrumbPicture1 from "./assets/images/breadcrumb/Picture1.svg"
import contactLeft from "./assets/images/contact-left.png"

export default function Contact() {
	return (
		<div>
			<Header />

			<section class="breadcrumb-area bc-contact">
				<img class="bc-img" src={breadcrumbPicture1} alt="" />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h4 class="title">
								Contact
							</h4>
							<ul class="breadcrumb-list">
								<li>
									<a href="index.html">
											<i class="fas fa-home"></i>
											Home
									</a>
								</li>
								<li>
									<span><i class="fas fa-chevron-right"></i> </span>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="contact">
		<img class="left-img" src={contactLeft} alt="" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
							Contact Us
						</h5>
						<h2 class="title">
							Get in Touch
						</h2>
						<p class="text">
								It’s up to the competition in features, with some unique 
								advantages.All the latest LuckyDraws competitions.Here are some of them.
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-end">
				<div class="col-lg-6">
					<div class="contact-form-wrapper">
						<div class="contact-box">
							<h4 class="title">
								Send Us a Message
							</h4>
							<form action="#">
								<input type="text" class="input-field" placeholder="Enter Your Full Name" />
								<input type="email" class="input-field" placeholder="Enter Your Email Address" />
								<textarea class="input-field textarea" placeholder="Message *" />
								<button type="submit" class="mybtn1">SUBMIT NOW</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<footer class="footer" id="footer">
	
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-lg-3">
					<div class="footer-widget info-link-widget">
						<h4 class="title">
							About 
						</h4>
						<ul class="link-list">
							<li>
								<a href="about.html">
									<i class="fas fa-angle-double-right"></i>	About Us
								</a>
							</li>
							<li>
								<a href="contact.html">
									<i class="fas fa-angle-double-right"></i>	Contact Us
								</a>
							</li>
							
						</ul>
					</div>
				</div>
				<div class="col-sm-6 col-lg-3">
					<div class="footer-widget info-link-widget">
						<h4 class="title">
							My Account
						</h4>
						<ul class="link-list">
							<li>
								<a href="wallet.html">
									<i class="fas fa-angle-double-right"></i> Manage Your Account
								</a>
							</li>
							<li>
								<a href="faq.html">
									<i class="fas fa-angle-double-right"></i>FAQ
								</a>
							</li>
														
						</ul>
					</div>
				</div>
				<div class="col-sm-6 col-lg-3">
					<div class="footer-widget info-link-widget">
						<h4 class="title">
							Legal Info
						</h4>
						<ul class="link-list">
							<li>
								<a href="terms-conditions-details.html">
									<i class="fas fa-angle-double-right"></i>Privacy Policy
								</a>
							</li>
							<li>
								<a href="terms-conditions-details.html">
									<i class="fas fa-angle-double-right"></i>Terms of Service
								</a>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="copy-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="left-area">
							<p>Copyright © 2020.All Rights Reserved By <a href="https://www.Doshservices.com">Dosh Services</a>
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</footer> 

	<div class="bottomtotop">
		<i class="fas fa-chevron-right"></i>
	</div>

	<div class="modal fade login-modal" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
									<label for="login-input-email">Email*</label>
									<input type="email" class="input-field" id="login-input-email"  placeholder="Enter your Email" />
							</div>
							<div class="form-group">
									<label for="login-input-password">Password*</label>
									<input type="password" class="input-field" id="login-input-password"  placeholder="Password" />
							</div>
							<div class="form-group">
								<div class="box">
									<div class="left">
											<input type="checkbox" class="check-box-field" id="input-save-password" checked />
										<label for="input-save-password">Remember Password</label>
									</div>
									<div class="right">
										<a href="#">
											Forgot Password?
										</a>
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
								<a href="#">Create account <i class="fas fa-angle-double-right"></i></a>
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>

		<div class="modal fade login-modal sign-in" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered " role="document">
				<div class="modal-content">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<div class="modal-body">
						<div class="logo-area">
								<img class="logo" src="assets/images/logo.png" alt="" />
						</div>
						<div class="header-area">
							<h4 class="title">Great to have you back!</h4>
							<p class="sub-title">Enter your details below.</p>
						</div>
						<div class="form-area">
							<form action="#" method="POST">
								<div class="form-group">
										<label for="input-name">Name*</label>
										<input type="text" class="input-field" id="input-name"  placeholder="Enter your Name" />
								</div>
								<div class="form-group">
										<label for="input-email">Email*</label>
										<input type="email" class="input-field" id="input-email"  placeholder="Enter your Email" />
								</div>
								<div class="form-group">
										<label for="input-password">Password*</label>
										<input type="password" class="input-field" id="input-password"  placeholder="Enter your password" />
								</div>
								<div class="form-group">
										<label for="input-con-password">confirm password**</label>
										<input type="password" class="input-field" id="input-con-password"  placeholder="Enter your Confirm Password" />
								</div>
								
								<div class="form-group">
									<div class="check-group">
											<input type="checkbox" class="check-box-field" id="input-terms" checked />
											<label for="input-terms">
													I agree with <a href="#">terms and Conditions</a> and  <a href="#">privacy policy</a>
											</label>
									</div>
								</div>
								<div class="form-group">
									<button type="submit" class="mybtn1">Take Bonus</button>
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
