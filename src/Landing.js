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
	<div class="hero-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 d-flex align-self-center">
					<div class="left-content">
						<div class="content">
							<h5 class="subtitle">
								EVERY DAY LOTS OF WINS
							</h5>
							<h1 class="title">
									BE ONE OF THEM

							</h1>
							<p class="text">
									Get started in less than 5 min  Select and Win on LuckyDraws.ng 	
							</p>
							<div class="links">
								<Link to="competitions" class="mybtn1 link1">Get Started Now!</Link>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-7">
					<div class="hero-img2 d-block d-md-none">
						<img src="assets/images/heroarea.png" alt="" />
					</div>
					<div class="hero-img d-none d-md-block">
						<img class="img-fluid full-image" src={heroarea} alt="" />
						<img class="shape phone" src={phone} alt="" />
						<img class="shape man" src={man222} alt="" />
						<img class="shape ripple" src={ripple} alt="" />
						<img class="shape ripple2" src={ripple1} alt="" />
						<img class="shape bitcoin1" src={bitcoin1} alt="" />
						<img class="shape bitcoin2" src={bitcoin2} alt="" />
						<img class="shape shape-icon" src={shape} alt="" />
						<img class="shape award-bg" src={awardBg} alt="" />
						<img class="shape award" src={award} alt="" />
						<img class="shape gift-bg" src={gittboxBg} alt="" />
						<img class="shape gift" src={giftboxGift} alt="" />
						<img class="shape shield-bg" src={shieldBg} alt="" />
						<img class="shape shield" src={shield} alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<section class="featured-game">
		
		<div class="features">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="feature-box">
							<div class="feature-box-inner">
								<div class="row">
									<div class="col-lg-4 col-md-6">
										<div class="single-feature">
											<div class="icon one">
												<img src={featureIcon1} alt="" />
											</div>
											<div class="content">
												<h4 class="title">
													Exclusive Offer
												</h4>
													<small>
														Be rewarded with exclusive offers and discounts with Luckydraws on the go.
														
													</small>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-6">
										<div class="single-feature">
											<div class="icon two">
												<img src={picture2} alt="" />
											</div>
											<div class="content">
												<h4 class="title">
													Cross-Platform
												</h4>
												<small>
														All games are available on multi-platforms, including web, mobiles and tablets.

													</small>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-6">
										<div class="single-feature">
											<div class="icon three">
												<img src={featureIcon3} alt="" />
											</div>
											<div class="content">
												<h4 class="title">
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
		
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
								Check out our
						</h5> 
						<h2 class="title">
								featured games
						</h2>
						<p class="text">
								Check out our latest competitions! Select today's lucky number to win the competition. The winner is announced during the Live Raffle Draw on IG!
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="game-slider">
						<div class="item">
							<div class="single-game">
								<img src={Icon1} alt="" />
								<Link to="lottery" class="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						<div class="item">
							<div class="single-game">
									<img src={Icon2} alt="" />
									<Link to="lottery" class="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						<div class="item">
							<div class="single-game">
									<img src={Icon3} alt="" />
									<Link to="lottery" class="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						<div class="item">
							<div class="single-game">
									<img src={Icon2} alt="" />
									<Link to="lottery" class="mybtn2">PLay NoW !</Link>
							</div>
						</div>
						
					</div>
					<div class="row" style={{margin: "20px"}}>
							<div class="col-lg-12 text-center">
								<Link to="competitions" class="mybtn1">View More</Link>
							</div>
						</div>
				</div>
			</div>
		</div>
	</section>

	 <section class="activities">
		 <img class="shape shape1" src={peopleShapeI} alt="" />
		 <img class="shape shape2" src={peopleShape2} alt="" />
		 <img class="shape shape3" src={peopleShape3} alt="" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
							How you can Play
						</h5>
						<h2 class="title">
							more smartly
						</h2>
						<p class="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-h-play">
						<img src={ic1} alt="" />
						<p class="steps">
							First step <i class="fas fa-arrow-right"></i>
						</p>
						<h4 class="title">
							Sign up & Deposit
						</h4>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-h-play">
						<img src={ic2} alt="" />
						<p class="steps">
							SECOND STEP  <i class="fas fa-arrow-right"></i>
						</p>
						<h4 class="title">
							Select Competition 
						</h4>
					</div>
				</div>
				
				<div class="col-lg-4 col-md-6">
					<div class="single-h-play">
						<img src={ic4} alt="" />
						<p class="steps">
							fourth STEP  <i class="fas fa-arrow-right"></i>
						</p>
						<h4 class="title">
							Redeem Price 
						</h4>
					</div>
				</div>
			</div>
			<div class="row" style={{margin: "50px"}}>
				<div class="col-lg-12 text-center">
					<Link to="howItWork" class="mybtn1">View More</Link>
				</div>
			</div>
		</div>
			
		{/* </div> */}
		
		
	</section> 

	<section class="recent-winners">
			<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 col-md-10">
							<div class="section-heading">
								<h5 class="subtitle">
									Try to Check out our
								</h5>
								<h2 class="title">
										Recent Winners
								</h2>
								<p class="text">
									We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
								</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<div class="single-winer">
								<div class="top-area">
									<div class="left">
										<h4 class="name">
												Leroy Roy 
										</h4>
										<p class="date">
												15.05.2020
										</p>
									</div>
									<div class="right">
										<p class="id">#5747e75482</p>
									</div>
								</div>
								<div class="bottom-area">
									<div class="left">
											₦ 30,000
									</div>
									<div class="right">
											<img src={Icon2} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-winer">
								<div class="top-area">
									<div class="left">
										<h4 class="name">
												Jeff Mack
										</h4>
										<p class="date">
												01.08.2019
										</p>
									</div>
									<div class="right">
										<p class="id">#5747e75482</p>
									</div>
								</div>
								<div class="bottom-area">
									<div class="left">
											₦ 14,000
									</div>
									<div class="right">
											<img src={Icon2} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-winer">
								<div class="top-area">
									<div class="left">
										<h4 class="name">
												Jeff Mack
										</h4>
										<p class="date">
												01.08.2019
										</p>
									</div>
									<div class="right">
										<p class="id">#5747e75482</p>
									</div>
								</div>
								<div class="bottom-area">
									<div class="left">
											₦ 14,000
									</div>
									<div class="right">
											<img src={Icon2} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-12 text-xl-center">
							<Link class="mybtn2" to="winners">View All </Link>
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
							<img class="logo" src={Logo} alt="" />
					</div>
					<div class="header-area">
						<h4 class="title">Great to have you back!</h4>
						<p class="sub-title">Enter your details below.</p>
					</div>
					<div class="form-area">
						<form action="#"  method="POST">
							<div class="form-group">
									<label for="login-input-email">Email</label>
									<input type="email" class="input-field" id="login-input-email"  placeholder="Enter your Email" />
							</div>
							<div class="form-group">
									<label for="login-input-password">Password</label>
									<input type="password" class="input-field" id="login-input-password"  placeholder="Password" />
							</div>
							<div class="form-group">
								<div class="box">
									<div class="left">
											<input type="checkbox" class="check-box-field" id="input-save-password" checked />
										<label for="input-save-password">Remember Password</label>
									</div>
									<div class="right">
										<Link to="#">
											Forgot Password?
										</Link>
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
								<Link to="#">Create account <i class="fas fa-angle-double-right"></i></Link>
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>		
		</div>
	)
}
