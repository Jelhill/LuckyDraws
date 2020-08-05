import React, {Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"


export default function TermsAndCondition() {
	return (
			<Fragment>				
				<Header />
				<section className="breadcrumb-area bc-terms">
					<img className="bc-img" src="assets/images/breadcrumb/tc.png" alt="" />
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h4 className="title">
									terms & conditions
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
										<Link to="terms-conditions">Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<div className="serch-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="serch-box">
									<div className="row">
										<div className="col-lg-12">
											<form action="#">
												<ul className="list">
													<li className="input-field">
														<input type="text" placeholder="Serch For Articals" />
													</li>
													<li className="button">
														<button type="submit" className="mybtn1">Get Started </button>
													</li>
												</ul>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="help-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="help-box">
									<div className="help-box-inner">
										<h4 className="title">
											Getting Started Guides
										</h4>
										<div className="content">
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="help-box-inner2-hearer">
										<h4 className="title">
												Terms and Conditions of Megawins
										</h4>
									</div>
									<div className="help-box-inner2">
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="help-box-inner3-hearer">
											<h4 className="title">
													Privacy
											</h4>
										</div>
										<div className="help-box-inner2">
											<div className="single-artical">
												<div className="content">
													<h4 className="title">
														Bonus Terms & Conditions
													</h4>
												</div>
												<div className="writer-profile">
													<div className="img">
														<img src="assets/images/tc.png" alt="" />
													</div>
													<div className="writer-content">
														<h5 className="w-name">
															Written by <Link to="#">
																David Kemmerer
															</Link>
														</h5>
														<p>27 articles in this collection
														</p>
													</div>
												</div>
											</div>
											<div className="single-artical">
												<div className="content">
													<h4 className="title">
														Bonus Terms & Conditions
													</h4>
												</div>
												<div className="writer-profile">
													<div className="img">
														<img src="assets/images/tc.png" alt="" />
													</div>
													<div className="writer-content">
														<h5 className="w-name">
															Written by <Link to="#">
																David Kemmerer
															</Link>
														</h5>
														<p>27 articles in this collection
														</p>
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
