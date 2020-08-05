
import React from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import breadcrumbLottery from "./assets/images/breadcrumb/lottery.png"
import lotterySt1 from "./assets/images/lottery/st1.png"
import lotterySt2 from "./assets/images/lottery/st2.png"
import tikitIcon from "./assets/images/tikit-icon.png"
import bgShape from "./assets/images/howitwork/bg-shape.png"
import howItWorkIC1 from "./assets/images/howitwork/ic1.png"
import howItWorkIC2 from "./assets/images/howitwork/ic2.png"
import howItWorkIC3 from "./assets/images/howitwork/ic3.png"
import questionLeft from "./assets/images/question-left.png"
import icon2 from "./assets/images/icon2.png"
// import { generateLotteryNumber } from "./Data/lotteryData"
import { generateNumbers } from "./Actions/lotteryActions"
import { connect } from 'react-redux'



function Lottery() {

	// const generateNum = () => {
	// 	const it = generateLotteryNumber(1, 200, 1);
	// 	let result = it.next();
	// 	while (!result.done) {

	// 	// console.log(result.value); // 1 3 5 7 9
	// 	// result = it.next();
	// 	}
	// }

	return (
		<div>
			<Header />
	
	<section className="breadcrumb-area bc-lottery">
		<img className="bc-img" src={breadcrumbLottery} alt="" />
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						Lottery
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
							<Link to="lottery">Lottery</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="lottery-area">
		<div className="lottery-staticstics">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="single-staticstics">
							<div className="left">
								<div className="icon">
									<img src={lotterySt1} alt="" />
								</div>
							</div>
							<div className="right">
								<h4 className="title">Lottery Reward</h4>
								<div className="count">
									
									<span>₦200,000</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-staticstics">
							<div className="left">
								<div className="icon">
									<img src={lotterySt2} alt="" />
								</div>
							</div>
							<div className="right">
								<h4 className="title">Purchased Tickets</h4>
								<div className="count">
									<img src={tikitIcon} alt="" />
									<span>120</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-staticstics">
							<div className="left">
								<div className="icon">
									<img src={lotterySt2} alt="" />
								</div>
							</div>
							<div className="right">
								<h4 className="title">My Tickets</h4>
								<div className="count">
									<img src={tikitIcon} alt="" />
									<span>02</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="daily-lottery">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
								Try to check out our
							</h5>
							<h2 className="title">
								Daily Lottery
							</h2>
							<p className="text">
								We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="draw-time">
							<h5 className="subtitle">
									Lottery Draw Starts In:
							</h5>
							<div className="draw-counter">
									<div data-countdown="2021/12/15"></div>
							</div>
							<p className="text">
									To meet Today's challenges
							</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div className="buy-tickets">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="buy-tickets-box">
							<div className="heading">
								<h4 className="title">
									Buy Lottery Tickets
								</h4>
								
							</div>
							<div className="content">
								<div className="top-area">
									<div className="row">
										
										<div className="col-lg-3">
											<div className="info-box">
												<h4 className="title">
														1 TICKET COSTS
												</h4>
												<div className="number">
														<i className="fab fa-naira"></i>
														5,000
												</div>
											</div>
										</div>
										<div className="col-lg-3">
											<div className="info-box">
												<h4 className="title">
														QUANTITY 
												</h4>
												<div className="number">
													<input type="number" value="1" />
												</div>
											</div>
										</div>
										<div className="col-lg-3">
											<div className="info-box">
												<h4 className="title">
														TOTAL COST
												</h4>
												<div className="number">
														<i className="fab fa-naira"></i>
														0.0000
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="game-numbers">
									<h4 className="title">
										GAME NUMBERS
									</h4>
									<div className="number-box">
										<div className="auto-number">
											<div className="top-content">
												<input type="radio" id="auto-num" name="auto-num" />
												<label for="auto-num">
														Auto Generated
														<span>
																Random numbers will be generated automatically
														</span>
												</label>
											</div>
										</div>
										<div className="manual-number">
											<div className="top-content">
												<input type="radio" id="manual-num" name="auto-num" />
												<label for="manual-num">
														Manual Select
														<span>Pick 5 numbers manually</span>
												</label>
											</div>
											<div className="main-content">
												<ul className="number-list">
													<li>1</li>
													<li>2</li>
													<li>3</li>
													<li>4</li>
													<li>5</li>
													<li>6</li>
													<li>7</li>
													<li>8</li>
													<li className="active">9</li>
													<li>10</li>
													<li>11</li>
													<li>12</li>
													<li className="active">13</li>
													<li>14</li>
													<li>15</li>
													<li>16</li>
													<li>17</li>
													<li>18</li>
													<li>19</li>
													<li className="active">20</li>
													<li>21</li>
													<li className="active">22</li>
													<li>23</li>
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													<li className="active">29</li>
													<li>30</li>
													<li>31</li>
													<li>32</li>
													<li>33</li>
													<li>34</li>
													<li>35</li>
													<li>36</li>
													<li>37</li>
													<li>38</li>
													<li>39</li>
													<li>40</li>
													<li>41</li>
													<li>42</li>
													<li>43</li>
													<li>44</li>
													<li>45</li>
													<li>46</li>
													<li>47</li>
													<li>48</li>
													<li>49</li>
													<li>50</li>
												  </ul>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12 text-center">
										<Link to="#" className="mybtn1">Buy ticket</Link>
									</div>

								</div>

							</div>
							
					</div>

					</div>

				</div>

			</div>

		</div>
		<div className="how-it-work">
			<img className="bg-shape" src={bgShape} alt="" />
			<div className="container">
			<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
									Want to see how 
							</h5>
							<h2 className="title">
									How it works? 
							</h2>
							<p className="text">
								We update our site regularly with new competitions and more winners are added every day! To locate the most recent winner's information
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="single-work">
							<img src={howItWorkIC1} alt="" />
							<h4 className="title">
								START
							</h4>
							<p>
								Pick the Competition you want to enter.
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-work">
							<img src={howItWorkIC2} alt="" />
							<h4 className="title">
								CHOOSE
							</h4>
							<p>
								Choose how many numbers you would like in the draw & Complete Payment 
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-work">
							<img src={howItWorkIC3} alt="" />
							<h4 className="title">
								WIN
							</h4>
							<p>
								You will be emailed with your number in that draw and also interactively placed onto the competition page against your assigned number.
							</p>
						</div>
					</div>
					<div className="container" style={{paddingTop: "70px"}}>
					<div className="row justify-content-center">
						<div className="section-heading">
							<h5 className="subtitle">
									How the winner is picked and when the draws go live. 
							</h5>
							<p className="text">
								Once the timer on the competition is complete the draw will go ahead. A live streamed video to our host will appear within ‘ten minutes’ of the draw timing out. One random number will be picked out during the live draw. WE HAVE A WINNER.
							</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>

	</section>

	<section className="question-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<img src={questionLeft} alt="" />
				</div>
				<div className="col-lg-6">
					<div className="section-heading">
						<h5 className="subtitle">
								If you have any
						</h5>
						<h2 className="title">
								questions
						</h2>
						<p className="text">
								Our top priorities are to protect your privacy, 
								provide secure transactions, and safeguard your data. 
						</p>
						<p className="text">
								When you're ready to play, registering an 
								account is required so we know you're of legal age and so no one else can use your account.We answer the most commonly asked lotto 
								questions..
						</p>
						<Link to="#" className="mybtn1">Check FAQs</Link>
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
											<img src={icon2} alt="" />
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
											<img src={icon2} alt="" />
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
											<img src={icon2} alt="" />
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
	</div>
	)
}



const mapStateToProps = (state) => {
	const { modalReducer } = state
	return {
      showSignInModal: modalReducer.showSignInModal,
      showSignUpModal: modalReducer.showSignUpModal,
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
		generateNumbers: (values) => dispatch(generateNumbers(values))
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Lottery)