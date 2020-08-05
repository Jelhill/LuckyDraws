
import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function Cart() {
	return (
		<Fragment>
			<Header />
			<section className="breadcrumb-area cart">
				<img className="bc-img" src="assets/images/breadcrumb/cart-bg.png" alt="" /> 
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Cart
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
									<Link to="cart">Cart</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="cart-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="message-one">
								<p>
										Hey! Nice Number Selection.Please review your order below
										and follow the next quick steps to complete your order.
								</p>
							</div>
							<div className="message-two">
								<div className="left">
									<p>
										<i className="far fa-check-circle"></i>
											Selected Numbers was successfully added to your cart
									</p>
								</div>
								<div className="right">
									<Link to="#"><i className="far fa-edit"></i> Update Cart</Link>
								</div>
							</div>
							<div className="cart-table-area">
								<div className="responsive-table">
									<table className="table">
									<thead>
										<tr>
										<th scope="col">Ticket numbers</th>
										<th scope="col">Price</th>
										<th scope="col">Quantity</th>
										<th scope="col">Expires</th>
										<th scope="col">Total</th>
										<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
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
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="qty">
														<ul>
															<li>
																<span className="qtminus">
																	<i className="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span className="qttotal">1</span>
															</li>
															<li>
																<span className="qtplus">
																	<i className="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span className="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="remove">
														<i className="fas fa-times"></i>
												</div>
											</td>
										</tr>
										<tr>
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
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="qty">
														<ul>
															<li>
																<span className="qtminus">
																	<i className="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span className="qttotal">1</span>
															</li>
															<li>
																<span className="qtplus">
																	<i className="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span className="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="remove">
														<i className="fas fa-times"></i>
												</div>
											</td>
										</tr>
										<tr>
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
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="qty">
														<ul>
															<li>
																<span className="qtminus">
																	<i className="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span className="qttotal">1</span>
															</li>
															<li>
																<span className="qtplus">
																	<i className="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span className="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="remove">
														<i className="fas fa-times"></i>
												</div>
											</td>
										</tr>
										<tr>
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
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="qty">
														<ul>
															<li>
																<span className="qtminus">
																	<i className="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span className="qttotal">1</span>
															</li>
															<li>
																<span className="qtplus">
																	<i className="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span className="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div className="remove">
														<i className="fas fa-times"></i>
												</div>
											</td>
										</tr>
									</tbody>
									</table>
								</div>
							</div>
							<div className="total-pay">
								<div className="content">
									<span>Total to Pay:</span>
									<div className="num">
											<img src="assets/images/icon1.png" alt="" />
											0.00000051
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="payment-method">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
									Payment Method
							</h4>
							<p className="text">
									Choose a payment method 
							</p>
						</div>
						<div className="col-lg-12">
							<div className="method-slider">
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/dabit-card.png" alt="" />
										</div>
										<span>Credit Card</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/dabit-card.png" alt="" />
										</div>
										<span>Dabit Card</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method active">
										<div className="icon">
												<img src="assets/images/payment/paypal.png" alt="" />
										</div>
										<span>Paypal</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/bitcoin.png" alt="" />
										</div>
										<span>Bitcoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/litecoin.png" alt="" />
										</div>
										<span>Litecoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/ether.png" alt="" />
										</div>
										<span>Ethereum</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/rippel.png" alt="" />
										</div>
										<span>Ripple </span>
									</Link>
								</div>
								<div className="item">
										<Link to="#" className="single-method">
											<div className="icon">
													<img src="assets/images/payment/bitcoin.png" alt="" />
											</div>
											<span>Bitcoin</span>
										</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/litecoin.png" alt="" />
										</div>
										<span>Litecoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/ether.png" alt="" />
										</div>
										<span>Ethereum</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-12 text-center">
							<Link to="#" className="mybtn1">
									PurChase
							</Link>
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
