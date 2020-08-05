import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"
import breadcrumbPlay from "./assets/images/breadcrumb/play.png"
import ic6 from "./assets/images/play/ic6.png"
import ic66 from "./assets/images/play/ic66.png"
import ic1 from "./assets/images/play/ic1.png"
import ic11 from "./assets/images/play/ic11.png"
import ic2 from "./assets/images/play/ic2.png"
import ic22 from "./assets/images/play/ic22.png"
import icon1 from "./assets/images/game/icon1.png"
import icon2 from "./assets/images/game/icon2.png"
import icon3 from "./assets/images/game/icon3.png"
import iconImage2 from "./assets/images/icon2.png"

export default function Competitions() {
	return (
		<Fragment>
			<Header />	
			<section className="breadcrumb-area play">
				<img className="bc-img" src={breadcrumbPlay} alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Competitions
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
									<Link to="competitions">Competitions</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			
			<section className="play-games">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="gaming-activities">
									<div className="gaming-activities-inner">
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="all-games">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 text-center">
									<ul className="nav" role="tablist">
									<li className="nav-item">
										<Link className="nav-link active" id="pills-tab1-tab" data-toggle="pill" to="#pills-tab1" role="tab" aria-controls="pills-tab1" aria-selected="true">
											<div className="icon">
												<img className="one" src={ic6} alt="" />
												<img className="two" src={ic66} alt="" />
											</div>
											<span>All Games</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" id="pills-tab2-tab" data-toggle="pill" to="#pills-tab2" role="tab" aria-controls="pills-tab2" aria-selected="false">
										<div className="icon">
											<img className="one" src={ic1} alt="" />
											<img className="two" src={ic11} alt="" />
										</div>
										<span>Active</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" id="pills-tab3-tab" data-toggle="pill" to="#pills-tab3" role="tab" aria-controls="pills-tab3" aria-selected="false">
										<div className="icon">
											<img className="one" src={ic2} alt="" />
											<img className="two" src={ic22} alt="" />
										</div>
										<span>Archived</span>
										</Link>
									</li>
									</ul>
									<div className="tab-content" id="pills-tabContent">
									<div className="tab-pane fade show active" id="pills-tab1" role="tabpanel" aria-labelledby="pills-tab1-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="lottery" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="lottery" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="lottery" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="lottery" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="lottery" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="lottery" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab2" role="tabpanel" aria-labelledby="pills-tab2-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab3" role="tabpanel" aria-labelledby="pills-tab3-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab4" role="tabpanel" aria-labelledby="pills-tab4-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab5" role="tabpanel" aria-labelledby="pills-tab5-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab6" role="tabpanel" aria-labelledby="pills-tab6-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>

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
													<img src={iconImage2} alt="" />
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
													<img src={iconImage2} alt="" />
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
													<img src={iconImage2} alt="" />
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
