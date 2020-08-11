import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Footer from './Footer'
import Logo from "./assets/images/logo.png"
import breadcrumbAbout from "./assets/images/breadcrumb/about.png"
import aboutVideoBg from "./assets/images/about-video-bg.jpg"
import playIconRed from "./assets/images/play-icon-red.png"
import SignIn from './Modal/SignIn'
import SignUp from './Modal/SignUp'

export default function About() {
	return (
		<Fragment>
		<div>
			<header className="header">		
				<section className="top-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="content">
									<div className="left-content">
										<ul className="left-list">
											<li>
												<p>
													<i className="fas fa-headset"></i>	Support
												</p>
											</li>
											<li>
												<p>
													<i className="fas fa-envelope"></i>	info@LuckyDraws.ng
												</p>
											</li>
									
										</ul>
									</div>
									<div className="right-content">
											<ul className="right-list">
												<li>
													<div className="cart-icon tm-dropdown">
														<i className="fas fa-cart-arrow-down"></i>
														<span className="cart-count">10</span>
														<div className="tm-dropdown-menu">
															<ul className="list">
																<li className="list-item">
																		<div className="close">
																				<i className="fas fa-times"></i>
																		</div>
																	<ul className="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
																<li className="list-item">
																		<div className="close">
																				<i className="fas fa-times"></i>
																		</div>
																	<ul className="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
																<li className="list-item">
																		<div className="close">
																				<i className="fas fa-times"></i>
																		</div>
																	<ul className="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
																<li className="list-item">
																	<div className="close">
																			<i className="fas fa-times"></i>
																	</div>
																	<ul className="number-list">
																		<li>24</li>
																		<li>25</li>
																		<li>26</li>
																		<li>27</li>
																		<li>28</li>
																	</ul>
																</li>
															</ul>
															<Link to="cart" className="link-btn">Checkout</Link>
														</div>
													</div>
												</li>
												<li>
													<div className="notofication tm-dropdown">
														<i className="fas fa-bell"></i>
														<span className="count">11</span>
														<div className="tm-dropdown-menu">
																<ul className="list">
																	<li>
																		<Link to="#">
																			<i className="fas fa-bell"></i>
																			Invest Exchange
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i className="fas fa-bell"></i>
																			Invest Exchange
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i className="fas fa-bell"></i>
																			Invest Exchange
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i className="fas fa-bell"></i>
																			Invest Exchange
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i className="fas fa-bell"></i>
																			Invest Exchange
																		</Link>
																	</li>
																</ul>
															</div>
													</div>
												</li>
												<li>
													<Link to="#" className="sign-in" data-toggle="modal" data-target="#login">
														<i className="fas fa-user"></i> Sign In
													</Link>
												</li>
											</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>	
				<div className="mainmenu-area">
					<div className="container">
					<div className="row">
						<div className="col-lg-12">                 
							<nav className="navbar navbar-expand-lg navbar-light">
								<Link className="navbar-brand" to="index">
									<img src={Logo} alt=""/>
								</Link>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
									aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse fixed-height" id="main_menu">
									
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
											<Link className="nav-link" to="howItWork">How To Play
											<div className="mr-hover-effect"></div></Link>
										</li>
																	
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
			</header>

			<section className="breadcrumb-area about">
				<img className="bc-img" src={breadcrumbAbout} alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								About Us
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
									<Link to="about">About Us</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="about-page-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 d-flex align-self-center">
								<div className="about-video">
									<img src={aboutVideoBg} alt="" />
									<Link to="https://www.youtube.com/watch?v=oj40TQirhss" className="play-video mfp-iframe">
										<img src={playIconRed} alt="" />
									</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="section-heading">
									<h5 className="subtitle">
											Our Journey in a Nutshell
									</h5>
									<h2 className="title">
											About LuckyDraws
									</h2>
									<p className="text">
											Luckydraws is an exciting online gaming lotto brand that offers the largest selection of online virtual games.
									</p>
									<p className="text">
											All games are available on multi-platforms, including web, mobiles and tablets. To top it all off, we also offer our clients a variety of promotions and offers.
									</p>
									
								</div>
							</div>
						</div>
					</div>
			</section>
			<Footer />
			</div>
			<div className="bottomtotop">
				<i className="fas fa-chevron-right"></i>
			</div>
			<SignIn />
			<SignUp />
		</Fragment>
		
	)
}
