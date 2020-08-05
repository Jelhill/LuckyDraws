import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function FAQ() {
	return (
		<Fragment>
			<Header />

		<section className="breadcrumb-area bc-faq">
			<img className="bc-img" src="assets/images/breadcrumb/faq.png" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h4 className="title">
							Faq
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
								<Link to="faq.html">Faq</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<section className="faq-section">
			<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle">
										Got any Question 
								</h5>
								<h2 className="title">
										We've answers
								</h2>
								<p className="text">
										It’s up to the competition in features, with some unique 
										advantages.All the competitions.Here are some of them.
								</p>
							</div>
						</div>
					</div>
				<div className="row">
				<div className="col-lg-12">
					<div className="faq-wrapper">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item">
						<Link className="nav-link" id="general-tab" data-toggle="tab" to="#general" role="tab" aria-controls="general" aria-selected="false">All</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" id="general-tab" data-toggle="tab" to="#general" role="tab" aria-controls="general" aria-selected="true">general</Link>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">		
						<div className="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">
						<div className="accordion sorteo-accordion" id="accordionExample6">
							<div className="card">
							<div className="card-header" id="heading16">
								<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapse16"><i className="fa fa-question"></i>What if the competitions slot is not fully booked when timer runs out?</button>
								</h2>
							</div>
							<div id="collapse16" className="collapse show" aria-labelledby="heading16" data-parent="#accordionExample6">
								<div className="card-body">
								<p>If the competition is not full, the timer will add some time in order for all the tickets to sell on the competition. This will happen a maximum of 4 times then if the competition is still not sold out a cash alternative will be awarded instead and only the people that have entered will go into the live draw.</p>
								</div>
							</div>
							</div>
							<div className="card">
							<div className="card-header" id="heading16">
								<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapse16"><i className="fa fa-question"></i>How many entrants is a player allowed to have in one draw?</button>
								</h2>
							</div>
							<div id="collapse16" className="collapse show" aria-labelledby="heading16" data-parent="#accordionExample6">
								<div className="card-body">
								<p>Each player can enter any one competition a maximum of 5 times.</p>
								</div>
							</div>
							</div>
							<div className="card">
							<div className="card-header" id="heading17">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapse17"><i className="fa fa-question"></i> How long does it take before winners get their prize?</button>
								</h2>
							</div>
							<div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordionExample6">
								<div className="card-body">
								<p>Your prize will be hand delivered from our team member within 5 days of the winner being announced.</p>
								</div>
							</div>
							</div>
						</div>
						</div>
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
		</Fragment> 
	)
}
