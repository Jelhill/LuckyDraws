import React from 'react'
import { Link } from "react-router-dom"
import Logo from "./assets/images/logo.png"
import Header from './Header'
import Icon1 from "./assets/images/game/icon1.png"
import Icon2 from "./assets/images/game/icon2.png"
import Icon3 from "./assets/images/game/icon3.png"
import peopleShapeI from "./assets/images/people/shape1.png"
import peopleShape2 from "./assets/images/people/shape2.png"
import peopleShape3 from "./assets/images/people/shape3.png"
import ic1 from "./assets/images/h-play/ic1.png"
import ic2 from "./assets/images/h-play/ic2.png"
import ic4 from "./assets/images/h-play/ic4.png"
import heroarea from "./assets/images/heroarea.png"
import phone from "./assets/images/h-shapes/phone.png" 
import man222 from "./assets/images/h-shapes/man222.png"
import ripple from "./assets/images/h-shapes/ripple.png"
import ripple1 from "./assets/images/h-shapes/ripple1.png" 
import bitcoin1 from "./assets/images/h-shapes/bitcoin1.png"
import bitcoin2 from "./assets/images/h-shapes/bitcoin2.png" 
import shape from "./assets/images/h-shapes/shape.png"
import awardBg from "./assets/images/h-shapes/award/bg.png" 
import award from "./assets/images/h-shapes/award/award.png"
import gittboxBg from "./assets/images/h-shapes/giftbox/bg.png" 
import giftboxGift from "./assets/images/h-shapes/giftbox/gift.png"
import shieldBg from "./assets/images/h-shapes/shield/bg.png"
import shield from "./assets/images/h-shapes/shield/shield.png"
import featureIcon1 from "./assets/images/feature/icon1.png"
import picture2 from "./assets/images/feature/Picture2.png"
import featureIcon3 from "./assets/images/feature/icon3.png"
import Footer from './Footer'


export default function Landing() {
	return (
		<div>
			<Header />
	<div className="hero-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-5 d-flex align-self-center">
					<div className="left-content">
						<div className="content">
							<h5 className="subtitle">
								EVERY DAY LOTS OF WINS
							</h5>
							<h1 className="title">
									BE ONE OF THEM

							</h1>
							<p className="text">
									Get started in less than 5 min  Select and Win on LuckyDraws.ng 	
							</p>
							<div className="links">
								<Link to="competitions" className="mybtn1 link1">Get Started Now!</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="hero-img2 d-block d-md-none">
						<img src="assets/images/heroarea.png" alt="" />
					</div>
					<div className="hero-img d-none d-md-block">
						<img className="img-fluid full-image" src={heroarea} alt="" />
						<img className="shape phone" src={phone} alt="" />
						<img className="shape man" src={man222} alt="" />
						<img className="shape ripple" src={ripple} alt="" />
						<img className="shape ripple2" src={ripple1} alt="" />
						<img className="shape bitcoin1" src={bitcoin1} alt="" />
						<img className="shape bitcoin2" src={bitcoin2} alt="" />
						<img className="shape shape-icon" src={shape} alt="" />
						<img className="shape award-bg" src={awardBg} alt="" />
						<img className="shape award" src={award} alt="" />
						<img className="shape gift-bg" src={gittboxBg} alt="" />
						<img className="shape gift" src={giftboxGift} alt="" />
						<img className="shape shield-bg" src={shieldBg} alt="" />
						<img className="shape shield" src={shield} alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<section className="featured-game">
		
		<div className="features">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="feature-box">
							<div className="feature-box-inner">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon one">
												<img src={featureIcon1} alt="" />
											</div>
											<div className="content">
												<h4 className="title">
													Exclusive Offer
												</h4>
													<small>
														Be rewarded with exclusive offers and discounts with Luckydraws on the go.
														
													</small>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon two">
												<img src={picture2} alt="" />
											</div>
											<div className="content">
												<h4 className="title">
													Cross-Platform
												</h4>
												<small>
														All games are available on multi-platforms, including web, mobiles and tablets.

													</small>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon three">
												<img src={featureIcon3} alt="" />
											</div>
											<div className="content">
												<h4 className="title">
														24/7 Support
												</h4>
												<small>
														No other lottery platform has the in-house support and services of Luckydraws.

													</small>
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
		
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
								Check out our
						</h5> 
						<h2 className="title">
								featured games
						</h2>
						<p className="text">
								Check out our latest competitions! Select today's lucky number to win the competition. The winner is announced during the Live Raffle Draw on IG!
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="game-slider">
						<div className="item">
							<div className="single-game">
								<img src={Icon1} alt="" />
								<Link to="lottery" className="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src={Icon2} alt="" />
									<Link to="lottery" className="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src={Icon3} alt="" />
									<Link to="lottery" className="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src={Icon2} alt="" />
									<Link to="lottery" className="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						
					</div>
					<div className="row" style={{margin: "20px"}}>
							<div className="col-lg-12 text-center">
								<Link to="competitions" className="mybtn1">View More</Link>
							</div>
						</div>
				</div>
			</div>
		</div>
	</section>

	 <section className="activities">
		 <img className="shape shape1" src={peopleShapeI} alt="" />
		 <img className="shape shape2" src={peopleShape2} alt="" />
		 <img className="shape shape3" src={peopleShape3} alt="" />
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							How you can Play
						</h5>
						<h2 className="title">
							more smartly
						</h2>
						<p className="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single-h-play">
						<img src={ic1} alt="" />
						<p className="steps">
							First step <i className="fas fa-arrow-right"></i>
						</p>
						<h4 className="title">
							Sign up & Deposit
						</h4>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-h-play">
						<img src={ic2} alt="" />
						<p className="steps">
							SECOND STEP  <i className="fas fa-arrow-right"></i>
						</p>
						<h4 className="title">
							Select Competition 
						</h4>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6">
					<div className="single-h-play">
						<img src={ic4} alt="" />
						<p className="steps">
							fourth STEP  <i className="fas fa-arrow-right"></i>
						</p>
						<h4 className="title">
							Redeem Price 
						</h4>
					</div>
				</div>
			</div>
			<div className="row" style={{margin: "50px"}}>
				<div className="col-lg-12 text-center">
					<Link to="howItWork" className="mybtn1">View More</Link>
				</div>
			</div>
		</div>
			
		{/* </div> */}
		
		
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
											<img src={Icon2} alt="" />
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
											<img src={Icon2} alt="" />
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
											<img src={Icon2} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 text-xl-center">
							<Link className="mybtn2" to="winners">View All </Link>
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
							<img className="logo" src={Logo} alt="" />
					</div>
					<div className="header-area">
						<h4 className="title">Great to have you back!</h4>
						<p className="sub-title">Enter your details below.</p>
					</div>
					<div className="form-area">
						<form action="#"  method="POST">
							<div className="form-group">
									<label for="login-input-email">Email</label>
									<input type="email" className="input-field" id="login-input-email"  placeholder="Enter your Email" />
							</div>
							<div className="form-group">
									<label for="login-input-password">Password</label>
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
		</div>
	)
}
