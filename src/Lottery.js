
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Lottery() {
	return (
		<div>
			<Header />
	
	<section class="breadcrumb-area bc-lottery">
		<img class="bc-img" src="assets/images/breadcrumb/lottery.png" alt="" />
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h4 class="title">
						Lottery
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
							<a href="lottery.html">Lottery</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="lottery-area">
		<div class="lottery-staticstics">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<div class="single-staticstics">
							<div class="left">
								<div class="icon">
									<img src="assets/images/lottery/st1.png" alt="" />
								</div>
							</div>
							<div class="right">
								<h4 class="title">Lottery Reward</h4>
								<div class="count">
									
									<span>₦200,000</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="single-staticstics">
							<div class="left">
								<div class="icon">
									<img src="assets/images/lottery/st2.png" alt="" />
								</div>
							</div>
							<div class="right">
								<h4 class="title">Purchased Tickets</h4>
								<div class="count">
									<img src="assets/images/tikit-icon.png" alt="" />
									<span>120</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="single-staticstics">
							<div class="left">
								<div class="icon">
									<img src="assets/images/lottery/st2.png" alt="" />
								</div>
							</div>
							<div class="right">
								<h4 class="title">My Tickets</h4>
								<div class="count">
									<img src="assets/images/tikit-icon.png" alt="" />
									<span>02</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="daily-lottery">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-md-10">
						<div class="section-heading">
							<h5 class="subtitle">
								Try to check out our
							</h5>
							<h2 class="title">
								Daily Lottery
							</h2>
							<p class="text">
								We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="draw-time">
							<h5 class="subtitle">
									Lottery Draw Starts In:
							</h5>
							<div class="draw-counter">
									<div data-countdown="2021/12/15"></div>
							</div>
							<p class="text">
									To meet Today's challenges
							</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="buy-tickets">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="buy-tickets-box">
							<div class="heading">
								<h4 class="title">
									Buy Lottery Tickets
								</h4>
								
							</div>
							<div class="content">
								<div class="top-area">
									<div class="row">
										
										<div class="col-lg-3">
											<div class="info-box">
												<h4 class="title">
														1 TICKET COSTS
												</h4>
												<div class="number">
														<i class="fab fa-naira"></i>
														5,000
												</div>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="info-box">
												<h4 class="title">
														QUANTITY 
												</h4>
												<div class="number">
													<input type="number" value="1" />
												</div>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="info-box">
												<h4 class="title">
														TOTAL COST
												</h4>
												<div class="number">
														<i class="fab fa-naira"></i>
														0.0000
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="game-numbers">
									<h4 class="title">
										GAME NUMBERS
									</h4>
									<div class="number-box">
										<div class="auto-number">
											<div class="top-content">
												<input type="radio" id="auto-num" name="auto-num" />
												<label for="auto-num">
														Auto Generated
														<span>
																Random numbers will be generated automatically
														</span>
												</label>
											</div>
										</div>
										<div class="manual-number">
											<div class="top-content">
												<input type="radio" id="manual-num" name="auto-num" />
												<label for="manual-num">
														Manual Select
														<span>Pick 5 numbers manually</span>
												</label>
											</div>
											<div class="main-content">
												<ul class="number-list">
													<li>1</li>
													<li>2</li>
													<li>3</li>
													<li>4</li>
													<li>5</li>
													<li>6</li>
													<li>7</li>
													<li>8</li>
													<li class="active">9</li>
													<li>10</li>
													<li>11</li>
													<li>12</li>
													<li class="active">13</li>
													<li>14</li>
													<li>15</li>
													<li>16</li>
													<li>17</li>
													<li>18</li>
													<li>19</li>
													<li class="active">20</li>
													<li>21</li>
													<li class="active">22</li>
													<li>23</li>
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
													<li class="active">29</li>
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
								<div class="row">
									<div class="col-lg-12 text-center">
										<a href="#" class="mybtn1">Buy ticket</a>
									</div>

								</div>

							</div>
							
					</div>

					</div>

				</div>

			</div>

		</div>
		<div class="how-it-work">
			<img class="bg-shape" src="assets/images/howitwork/bg-shape.png" alt="" />
			<div class="container">
			<div class="row justify-content-center">
					<div class="col-lg-8 col-md-10">
						<div class="section-heading">
							<h5 class="subtitle">
									Want to see how 
							</h5>
							<h2 class="title">
									How it works? 
							</h2>
							<p class="text">
								We update our site regularly with new competitions and more winners are added every day! To locate the most recent winner's information
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4">
						<div class="single-work">
							<img src="assets/images/howitwork/ic1.png" alt="" />
							<h4 class="title">
								START
							</h4>
							<p>
								Pick the Competition you want to enter.
							</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="single-work">
							<img src="assets/images/howitwork/ic2.png" alt="" />
							<h4 class="title">
								CHOOSE
							</h4>
							<p>
								Choose how many numbers you would like in the draw & Complete Payment 
							</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="single-work">
							<img src="assets/images/howitwork/ic3.png" alt="" />
							<h4 class="title">
								WIN
							</h4>
							<p>
								You will be emailed with your number in that draw and also interactively placed onto the competition page against your assigned number.
							</p>
						</div>
					</div>
					<div class="container" style={{paddingTop: "70px"}}>
					<div class="row justify-content-center">
						<div class="section-heading">
							<h5 class="subtitle">
									How the winner is picked and when the draws go live. 
							</h5>
							<p class="text">
								Once the timer on the competition is complete the draw will go ahead. A live streamed video to our host will appear within ‘ten minutes’ of the draw timing out. One random number will be picked out during the live draw. WE HAVE A WINNER.
							</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>

	</section>

	<section class="question-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<img src="assets/images/question-left.png" alt="" />
				</div>
				<div class="col-lg-6">
					<div class="section-heading">
						<h5 class="subtitle">
								If you have any
						</h5>
						<h2 class="title">
								questions
						</h2>
						<p class="text">
								Our top priorities are to protect your privacy, 
								provide secure transactions, and safeguard your data. 
						</p>
						<p class="text">
								When you're ready to play, registering an 
								account is required so we know you're of legal age and so no one else can use your account.We answer the most commonly asked lotto 
								questions..
						</p>
						<a href="#" class="mybtn1">Check FAQs</a>
					</div>
				</div>
			</div>
		</div>
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
											<img src="assets/images/icon2.png" alt="" />
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
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-winer">
								<div class="top-area">
									<div class="left">
										<h4 class="name">
												Neal Morris
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
											₦ 40,000
									</div>
									<div class="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 text-xl-center">
							<a class="mybtn2" href="#">View All </a>
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
	</div>
	)
}
