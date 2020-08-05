import React from 'react'
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
		<div class="mr-hover-effect"></div>
	</a>
</li>
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

	<section class="breadcrumb-area bonus">
		<img class="bc-img" src={breadcrumbBonus} alt=""/>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h4 class="title">
						Bonus
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
							<a href="bonus.html">Bonus</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="bonus-area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
							Try to check out our
						</h5>
						<h2 class="title">
							LuckyDraws Bonuses
						</h2>
						<p class="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-bonus">
						<div class="content">
							<img src={bonusIC1} alt="" />
							<h4 class="title">
								Lucky Bet bonus
							</h4>
						</div>
						<a href="#" class="mybtn2">PLay NoW !</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-bonus">
						<div class="content">
							<img src={bonusIC2} alt=""/>
							<h4 class="title">
								Progressive  jackpot
							</h4>
						</div>
						<a href="#" class="mybtn2">PLay NoW !</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-bonus">
						<div class="content">
							<img src={bonusIC3} alt=""/>
							<h4 class="title">
								Affiliate program
							</h4>
						</div>
						<a href="#" class="mybtn2">PLay NoW !</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-bonus">
						<div class="content">
							<img src={bonusIC4} alt=""/>
							<h4 class="title">
								Bitcoin Faucet
							</h4>
						</div>
						<a href="#" class="mybtn2">PLay NoW !</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-bonus">
						<div class="content">
							<img src={bonusIC5} alt=""/>
							<h4 class="title">
								GOLDEN STAR
							</h4>
						</div>
						<a href="#" class="mybtn2">PLay NoW !</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-bonus">
						<div class="content">
							<img src={bonusIC6} alt=""/>
							<h4 class="title">
								Challenger
							</h4>
						</div>
						<a href="#" class="mybtn2">PLay NoW !</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="deposit-bonuses">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
							Wellcome bonuses 
						</h5>
						<h2 class="title">
							Deposit Bonus
						</h2>
						<p class="text">
							We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4">
					<div class="single-deposit-bonus">
						<div class="content">
							<img src={bonusDbIcon} alt="" />
							<h4 class="title">
								100% bonus up
								to 1 BTC
							</h4>
							<p>
								in your 1st deposit
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="single-deposit-bonus">
						<div class="content">
							<img src={bonusDbIcon2} alt="" />
							<h4 class="title">
								50% bonus up
								to 2 BTC
							</h4>
							<p>
								in your 2st deposit
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="single-deposit-bonus">
						<div class="content">
							<img src={bonusDbIcon2} alt="" />
							<h4 class="title">
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

	<section class="bonus-banner">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
							DEPOSIT & GET YOUR 
						</h5>
						<h2 class="title">
							BONUS INSTANTLY!
						</h2>
						<p class="text">
							Minimum deposits for each welcome bonuses is 10 EUR, 0.0007 BTC, 10 EUR, 10 USD, 10 AUD, 700 RUB, 15 CAD, 100 NOK, or 80 CNY.You can cancel your bonuses any time.
						</p>
						<a href="#" class="mybtn1">Bonus terms & conditions</a>
					</div>
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
							<img class="logo" src="assets/images/logo.png" alt=""/>
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
		{/* <!-- Login Area End --> */}
	
		{/* <!-- SignIn Area Start --> */}
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
		{/* <!-- SignIn Area End --></div> */}
		</div>
	)
}
