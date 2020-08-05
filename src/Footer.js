import React from 'react'
import { Link } from "react-router-dom"
import mailBox from "./assets/images/mail-box.png"

export default function Footer() {
    return (
        <footer class="footer" id="footer">
		<div class="subscribe-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="subscribe-box">
								<form action="#">
							<div class="row">
								<div class="col-lg-12">
									<div class="heading-area">
											<h5 class="sub-title">
													subscribe to LuckyDraws
											</h5>
											<h4 class="title">
													To Get Exclusive Benefits
											</h4>
									</div>
								</div>
								<div class="col-lg-3 col-4 d-flex align-self-center">
									<div class="icon">
										<img src={mailBox} alt="" />
									</div>
								</div>
								<div class="col-lg-6 col-8 d-flex align-self-center">
									<div class="form-area">
											<input type="text" placeholder="Your Email Address" />
									</div>
								</div>
								<div class="col-lg-3 d-flex align-self-center">
									<div class="button-area">
										<button class="mybtn1" type="submit">Subscribe
											<span><i class="fas fa-paper-plane"></i></span>
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
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-lg-3">
					<div class="footer-widget info-link-widget">
						<h4 class="title">
							About 
						</h4>
						<ul class="link-list">
							<li>
								<Link to="about">
									<i class="fas fa-angle-double-right"></i>	About Us
								</Link>
							</li>
							<li>
								<Link to="contact">
									<i class="fas fa-angle-double-right"></i>	Contact Us
								</Link>
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
								<Link to="wallet">
									<i class="fas fa-angle-double-right"></i> Manage Your Account
								</Link>
							</li>
							<li>
								<Link to="faq">
									<i class="fas fa-angle-double-right"></i>FAQ
								</Link>
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
								<Link to="termsAndConditionDetails">
									<i class="fas fa-angle-double-right"></i>Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="termsAndConditionDetails">
									<i class="fas fa-angle-double-right"></i>Terms of Service
								</Link>
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
							<p>Copyright © 2020.All Rights Reserved By <Link to="https://www.Doshservices.com">Dosh Services</Link>
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	   </footer>
    )
}
