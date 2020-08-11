
import React from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import breadcrumbPicture1 from "./assets/images/breadcrumb/Picture1.svg"
import contactLeft from "./assets/images/contact-left.png"

export default function Contact() {
	return (
		<div>
			<Header />

			<section className="breadcrumb-area bc-contact">
				<img className="bc-img" src={breadcrumbPicture1} alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Contact
							</h4>
							<ul className="breadcrumb-list">
								<li>
									<Link to="index.html">
											<i className="fas fa-home"></i>
											Home
									</Link>
								</li>
								<li>
									<span><i className="fas fa-chevron-right"></i> </span>
								</li>
								<li>
									<Link to="contact.html">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="contact">
		<img className="left-img" src={contactLeft} alt="" />
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							Contact Us
						</h5>
						<h2 className="title">
							Get in Touch
						</h2>
						<p className="text">
								It’s up to the competition in features, with some unique 
								advantages.All the latest LuckyDraws competitions.Here are some of them.
						</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-end">
				<div className="col-lg-6">
					<div className="contact-form-wrapper">
						<div className="contact-box">
							<h4 className="title">
								Send Us a Message
							</h4>
							<form action="#">
								<input type="text" className="input-field" placeholder="Enter Your Full Name" />
								<input type="email" className="input-field" placeholder="Enter Your Email Address" />
								<textarea className="input-field textarea" placeholder="Message *" />
								<button type="submit" className="mybtn1">SUBMIT NOW</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<footer className="footer" id="footer">
	
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							About 
						</h4>
						<ul className="link-list">
							<li>
								<Link to="about.html">
									<i className="fas fa-angle-double-right"></i>	About Us
								</Link>
							</li>
							<li>
								<Link to="contact.html">
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
								<Link to="wallet.html">
									<i className="fas fa-angle-double-right"></i> Manage Your Account
								</Link>
							</li>
							<li>
								<Link to="faq.html">
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
								<Link to="terms-conditions-details.html">
									<i className="fas fa-angle-double-right"></i>Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="terms-conditions-details.html">
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

	</div>
		
	)
}
