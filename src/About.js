import React, { Fragment } from 'react'
import Footer from './Footer'
import Logo from "./assets/images/logo.png"
import breadcrumbAbout from "./assets/images/breadcrumb/about.png"
import aboutVideoBg from "./assets/images/about-video-bg.jpg"
import playIconRed from "./assets/images/play-icon-red.png"

export default function About() {
	return (
		<Fragment>
		<div>
			<header class="header">		
				<section class="top-header">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="content">
									<div class="left-content">
										<ul class="left-list">
											<li>
												<p>
													<i class="fas fa-headset"></i>	Support
												</p>
											</li>
											<li>
												<p>
													<i class="fas fa-envelope"></i>	info@LuckyDraws.ng
												</p>
											</li>
									
										</ul>
									</div>
									<div class="right-content">
											<ul class="right-list">
												<li>
													<div class="cart-icon tm-dropdown">
														<i class="fas fa-cart-arrow-down"></i>
														<span class="cart-count">10</span>
														<div class="tm-dropdown-menu">
															<ul class="list">
																<li class="list-item">
																		<div class="close">
																				<i class="fas fa-times"></i>
																		</div>
																	<ul class="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
																<li class="list-item">
																		<div class="close">
																				<i class="fas fa-times"></i>
																		</div>
																	<ul class="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
																<li class="list-item">
																		<div class="close">
																				<i class="fas fa-times"></i>
																		</div>
																	<ul class="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
																<li class="list-item">
																	<div class="close">
																			<i class="fas fa-times"></i>
																	</div>
																	<ul class="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
															</ul>
															<a href="cart.html" class="link-btn">Checkout</a>
														</div>
													</div>
												</li>
												<li>
													<div class="notofication tm-dropdown">
														<i class="fas fa-bell"></i>
														<span class="count">11</span>
														<div class="tm-dropdown-menu">
																<ul class="list">
																	<li>
																		<a href="#">
																			<i class="fas fa-bell"></i>
																			Invest Exchange
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fas fa-bell"></i>
																			Invest Exchange
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fas fa-bell"></i>
																			Invest Exchange
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fas fa-bell"></i>
																			Invest Exchange
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fas fa-bell"></i>
																			Invest Exchange
																		</a>
																	</li>
																</ul>
															</div>
													</div>
												</li>
												<li>
													<a href="#" class="sign-in" data-toggle="modal" data-target="#login">
														<i class="fas fa-user"></i> Sign In
													</a>
												</li>
											</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>	
				<div class="mainmenu-area">
					<div class="container">
					<div class="row">
						<div class="col-lg-12">                 
							<nav class="navbar navbar-expand-lg navbar-light">
								<a class="navbar-brand" href="index.html">
									<img src={Logo} alt=""/>
								</a>
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
									aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse fixed-height" id="main_menu">
									
										<ul class="navbar-nav ml-auto">
										<li class="nav-item ">
											<a class="nav-link " href="index.html">Home
													<div class="mr-hover-effect"></div></a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="competitions.html">Competitions
													<div class="mr-hover-effect"></div></a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="how-it-work.html">How To Play
											<div class="mr-hover-effect"></div></a>
										</li>
																	
										<li class="nav-item">
											<a class="nav-link" href="contact.html">Contact
											<div class="mr-hover-effect"></div></a>
										</li>
									</ul>
										
								<a href="#" class="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
				</div>
			</header>

			<section class="breadcrumb-area about">
				<img class="bc-img" src={breadcrumbAbout} alt="" />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h4 class="title">
								About Us
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
									<a href="about.html">About Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="about-page-section">
					<div class="container">
						<div class="row">
							<div class="col-lg-6 d-flex align-self-center">
								<div class="about-video">
									<img src={aboutVideoBg} alt="" />
									<a href="https://www.youtube.com/watch?v=oj40TQirhss" class="play-video mfp-iframe">
										<img src={playIconRed} alt="" />
									</a>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="section-heading">
									<h5 class="subtitle">
											Our Journey in a Nutshell
									</h5>
									<h2 class="title">
											About LuckyDraws
									</h2>
									<p class="text">
											Luckydraws is an exciting online gaming lotto brand that offers the largest selection of online virtual games.
									</p>
									<p class="text">
											All games are available on multi-platforms, including web, mobiles and tablets. To top it all off, we also offer our clients a variety of promotions and offers.
									</p>
									
								</div>
							</div>
						</div>
					</div>
			</section>
			<Footer />
			</div>
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
											<select>
												<option value="0">BTC</option>
												<option value="1">USD</option>
												<option value="2">EUR</option>
											</select>
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
