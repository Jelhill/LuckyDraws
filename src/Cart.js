
import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Cart() {
	return (
		<Fragment>
			<Header />
			<section class="breadcrumb-area cart">
				<img class="bc-img" src="assets/images/breadcrumb/cart-bg.png" alt="" /> 
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h4 class="title">
								Cart
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
									<a href="cart.html">Cart</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="cart-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="message-one">
								<p>
										Hey! Nice Number Selection.Please review your order below
										and follow the next quick steps to complete your order.
								</p>
							</div>
							<div class="message-two">
								<div class="left">
									<p>
										<i class="far fa-check-circle"></i>
											Selected Numbers was successfully added to your cart
									</p>
								</div>
								<div class="right">
									<a href="#"><i class="far fa-edit"></i> Update Cart</a>
								</div>
							</div>
							<div class="cart-table-area">
								<div class="responsive-table">
									<table class="table">
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
													<ul class="number-list">
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
												<div class="qty">
														<ul>
															<li>
																<span class="qtminus">
																	<i class="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span class="qttotal">1</span>
															</li>
															<li>
																<span class="qtplus">
																	<i class="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span class="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div class="remove">
														<i class="fas fa-times"></i>
												</div>
											</td>
										</tr>
										<tr>
											<td>
													<ul class="number-list">
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
												<div class="qty">
														<ul>
															<li>
																<span class="qtminus">
																	<i class="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span class="qttotal">1</span>
															</li>
															<li>
																<span class="qtplus">
																	<i class="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span class="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div class="remove">
														<i class="fas fa-times"></i>
												</div>
											</td>
										</tr>
										<tr>
											<td>
													<ul class="number-list">
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
												<div class="qty">
														<ul>
															<li>
																<span class="qtminus">
																	<i class="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span class="qttotal">1</span>
															</li>
															<li>
																<span class="qtplus">
																	<i class="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span class="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div class="remove">
														<i class="fas fa-times"></i>
												</div>
											</td>
										</tr>
										<tr>
											<td>
													<ul class="number-list">
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
												<div class="qty">
														<ul>
															<li>
																<span class="qtminus">
																	<i class="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span class="qttotal">1</span>
															</li>
															<li>
																<span class="qtplus">
																	<i class="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span class="time">30 mins.left</span>
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>
												<div class="remove">
														<i class="fas fa-times"></i>
												</div>
											</td>
										</tr>
									</tbody>
									</table>
								</div>
							</div>
							<div class="total-pay">
								<div class="content">
									<span>Total to Pay:</span>
									<div class="num">
											<img src="assets/images/icon1.png" alt="" />
											0.00000051
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="payment-method">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h4 class="title">
									Payment Method
							</h4>
							<p class="text">
									Choose a payment method 
							</p>
						</div>
						<div class="col-lg-12">
							<div class="method-slider">
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/dabit-card.png" alt="" />
										</div>
										<span>Credit Card</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/dabit-card.png" alt="" />
										</div>
										<span>Dabit Card</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method active">
										<div class="icon">
												<img src="assets/images/payment/paypal.png" alt="" />
										</div>
										<span>Paypal</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/bitcoin.png" alt="" />
										</div>
										<span>Bitcoin</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/litecoin.png" alt="" />
										</div>
										<span>Litecoin</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/ether.png" alt="" />
										</div>
										<span>Ethereum</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/rippel.png" alt="" />
										</div>
										<span>Ripple </span>
									</a>
								</div>
								<div class="item">
										<a href="#" class="single-method">
											<div class="icon">
													<img src="assets/images/payment/bitcoin.png" alt="" />
											</div>
											<span>Bitcoin</span>
										</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/litecoin.png" alt="" />
										</div>
										<span>Litecoin</span>
									</a>
								</div>
								<div class="item">
									<a href="#" class="single-method">
										<div class="icon">
												<img src="assets/images/payment/ether.png" alt="" />
										</div>
										<span>Ethereum</span>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-12 text-center">
							<a href="#" class="mybtn1">
									PurChase
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
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

		</Fragment>
	)
}
