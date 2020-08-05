import React from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import Logo from "./assets/images/logo.png"
import breadcrumbBonus from "./assets/images/breadcrumb/bonus.png"
import bonusIC1 from "./assets/images/bonus/ic1.png"
import bonusIC2 from "./assets/images/bonus/ic2.png"
import bonusIC3 from "./assets/images/bonus/ic3.png"
import bonusIC4 from "./assets/images/bonus/ic4.png"
import bonusIC5 from "./assets/images/bonus/ic5.png"
import bonusIC6 from "./assets/images/bonus/ic6.png"
import bonusDbIcon from "./assets/images/bonus/dbicon.png"
import bonusDbIcon2 from "./assets/images/bonus/dbicon2.png"
	

export default function Bonus() {
	return (
		<div>
			<Header />
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
		<div className="mr-hover-effect"></div>
	</Link>
</li>
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
										<Link className="nav-link" to="how-it-work">How To Play
												<div className="mr-hover-effect"></div></Link>
									</li>
																
											<li className="nav-item">
											<Link className="nav-link" to="contact">Contact
													<div className="mr-hover-effect"></div></Link>
										</li>
								</ul>
									
									
									
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

	<section className="breadcrumb-area bonus">
		<img className="bc-img" src={breadcrumbBonus} alt=""/>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						Bonus
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
							<Link to="bonus">Bonus</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="bonus-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							Try to check out our
						</h5>
						<h2 className="title">
							LuckyDraws Bonuses
						</h2>
						<p className="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
							<img src={bonusIC1} alt="" />
							<h4 className="title">
								Lucky Bet bonus
							</h4>
						</div>
						<Link to="#" className="mybtn2">PLay NoW !</Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
							<img src={bonusIC2} alt=""/>
							<h4 className="title">
								Progressive  jackpot
							</h4>
						</div>
						<Link to="#" className="mybtn2">PLay NoW !</Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
							<img src={bonusIC3} alt=""/>
							<h4 className="title">
								Affiliate program
							</h4>
						</div>
						<Link to="#" className="mybtn2">PLay NoW !</Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
							<img src={bonusIC4} alt=""/>
							<h4 className="title">
								Bitcoin Faucet
							</h4>
						</div>
						<Link to="#" className="mybtn2">PLay NoW !</Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
							<img src={bonusIC5} alt=""/>
							<h4 className="title">
								GOLDEN STAR
							</h4>
						</div>
						<Link to="#" className="mybtn2">PLay NoW !</Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
							<img src={bonusIC6} alt=""/>
							<h4 className="title">
								Challenger
							</h4>
						</div>
						<Link to="#" className="mybtn2">PLay NoW !</Link>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="deposit-bonuses">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							Wellcome bonuses 
						</h5>
						<h2 className="title">
							Deposit Bonus
						</h2>
						<p className="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<div className="single-deposit-bonus">
						<div className="content">
							<img src={bonusDbIcon} alt="" />
							<h4 className="title">
								100% bonus up
								to 1 BTC
							</h4>
							<p>
								in your 1st deposit
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="single-deposit-bonus">
						<div className="content">
							<img src={bonusDbIcon2} alt="" />
							<h4 className="title">
								50% bonus up
								to 2 BTC
							</h4>
							<p>
								in your 2st deposit
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="single-deposit-bonus">
						<div className="content">
							<img src={bonusDbIcon2} alt="" />
							<h4 className="title">
								50% bonus up
								to 2 BTC
							</h4>
							<p>
								in your 3st deposit
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="bonus-banner">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							DEPOSIT & GET YOUR 
						</h5>
						<h2 className="title">
							BONUS INSTANTLY!
						</h2>
						<p className="text">
							Minimum deposits for each welcome bonuses is 10 EUR, 0.0007 BTC, 10 EUR, 10 USD, 10 AUD, 700 RUB, 15 CAD, 100 NOK, or 80 CNY.You can cancel your bonuses any time.
						</p>
						<Link to="#" className="mybtn1">Bonus terms & conditions</Link>
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
							<img className="logo" src="assets/images/logo.png" alt=""/>
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
	
		{/* <!-- SignIn Area Start --> */}
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
		{/* <!-- SignIn Area End --></div> */}
		</div>
	)
}
