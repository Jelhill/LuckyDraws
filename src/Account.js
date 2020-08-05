import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"

export default function Account() {
	return (
		<div>
			<Header />
	<section className="activities" style={{"margin-top": "100px"}}>
		<img className="shape shape1" src="assets/images/people/shape1.png" alt="" />
		<img className="shape shape2" src="assets/images/people/shape2.png" alt="" />
		<img className="shape shape3" src="assets/images/people/shape3.png" alt="" />
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							Daily Lottery
						</h5>
						<h2 className="title">
							Latest Activites
						</h2>
						<p className="text">
							The world’s first truly fair and global lottery. Each player has 
							the highest chances to win the JACKPOT
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="tab-menu-area">
						<ul className="nav nav-lend mb-3" id="pills-tab" role="tablist">
							<li className="nav-item">
								<Link className="nav-link active" id="pills-all-bets-tab" data-toggle="pill" to="#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">Purchased TICKETS ID</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" id="pills-my-bets-tab" data-toggle="pill" to="#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">Active</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" id="pills-history-tab" data-toggle="pill" to="#pills-history" role="tab" aria-controls="pills-history" aria-selected="false">Won</Link>
							</li>
						</ul>
					</div>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
							<div className="responsive-table">
								<table className="table">
								<thead>
									<tr>
										<th scope="col">DATE</th>
										<th scope="col">Ticket numbers</th>
										<th scope="col">TICKETS ID</th>
										<th scope="col">Status</th>
										</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<img src="assets/images/people/p1.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p2.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p3.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p4.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p5.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p1.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p2.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p3.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p4.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
									<tr>
										<td>
											<img src="assets/images/people/p5.png" alt="" />
											Tom Bass
										</td>
										<td>
											<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													</ul>
										</td>
										<td>
											01
										</td>
										<td>
											Active
										</td>

									</tr>
								</tbody>
								</table>
							</div>
						</div>
						<div className="tab-pane fade" id="pills-my-bets" role="tabpanel" aria-labelledby="pills-my-bets-tab">
							<div className="responsive-table">
									<table className="table">
									<thead>
										<tr>
										<th scope="col">DATE</th>
										<th scope="col">Ticket numbers</th>
										<th scope="col">TICKETS ID</th>
										<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img src="assets/images/people/p1.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p2.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p3.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p4.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p5.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p1.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p2.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p3.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p4.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p5.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
									</tbody>
									</table>
								</div>
						</div>
						<div className="tab-pane fade" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab">
							<div className="responsive-table">
									<table className="table">
									<thead>
										<tr>
										<th scope="col">DATE</th>
										<th scope="col">Ticket numbers</th>
										<th scope="col">TICKETS ID</th>
										<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img src="assets/images/people/p1.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p2.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p3.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p4.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p5.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p1.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p2.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p3.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p4.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p5.png" alt="" />
												Tom Bass
											</td>
											<td>
													<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
											</td>
											<td>
												01
											</td>

										</tr>
									</tbody>
									</table>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
				
	</section> 
	{/* <!-- Latest Activities Area End -->  */}

	{/* <!-- Questions Area Start --> */}
	<section className="question-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<img src="assets/images/question-left.png" alt="" />
				</div>
				<div className="col-lg-6">
					<div className="section-heading">
						<h5 className="subtitle">
								If you have any
						</h5>
						<h2 className="title">
								questions
						</h2>
						<p className="text">
								Our top priorities are to protect your privacy, 
								provide secure transactions, and safeguard your data. 
						</p>
						<p className="text">
								When you're ready to play, registering an 
								account is required so we know you're of legal age and so no one else can use your account.We answer the most commonly asked lotto 
								questions..
						</p>
						<Link to="#" className="mybtn1">Check FAQs</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Questions Area End --> */}

	{/* <!-- Recent Winners Area Start --> */}
	<section className="recent-winners">
			<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle">
									Try to Check out our
								</h5>
								<h2 className="title">
										Recent Winners
								</h2>
								<p className="text">
									We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Leroy Roy 
										</h4>
										<p className="date">
												15.05.2020
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											₦ 30,000
									</div>
									<div className="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Jeff Mack
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											₦ 14,000
									</div>
									<div className="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Neal Morris
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											₦ 40,000
									</div>
									<div className="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-xl-center">
							<Link className="mybtn2" to="#">View All </Link>
						</div>
					</div>
			</div>
		</section> 
	{/* <!-- Recent Winners Area End --> */}

	{/* <!-- Footer Area Start --> */}
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
								<Link to="termsAndConditionDetails">
									<i className="fas fa-angle-double-right"></i>Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="termsAndConditionDetails">
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
	{/* <!-- Footer Area End --> */}

	{/* <!-- Back to Top Start --> */}
	<div className="bottomtotop">
		<i className="fas fa-chevron-right"></i>
	</div>
	{/* <!-- Back to Top End --> */}

	{/* <!-- Login Area Start --> */}
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
		{/* <!-- Login Area End --> */}
	
		{/* <!-- SignIn Area Start -->  */}
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
		{/* <!-- SignIn Area End --> */}

		</div>
	)
}
