
import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Wallet() {
	return (
		
<Fragment>
	<Header />	
	<section class="breadcrumb-area bc-awards">
		<img class="bc-img" src="assets/images/breadcrumb/awards.png" alt="" />
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h4 class="title">
						Accounts
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
							<a href="Winners.html">Wallet</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="awards-area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
							Previous Winners
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
				<div class="col-lg-4 ">
					<div class="single-awards">
						<div class="content">
							<img src="assets/images/feature/payout.png" alt="" />
							<h4 class="title">
								Wallet Balance
							</h4>
							<p>
								<i class="fas fa-wallet"></i>NGN 54,000
							</p>
							<a href="#" class="mybtn2">Fund Wallet</a>
						</div>
					</div>
				</div>
				<div class="col-lg 6 col-md-offset-2 activities_new" >
					    <div class="tab-content" id="pills-tabContent">
						   <div class="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
							   <div class="responsive-table">
								   <table class="table">
								   <thead>
									   <tr>
									   <th scope="col">DATE</th>
									   <th scope="col">BET AMOUNT</th>
									   <th scope="col">TYPE</th>
									  

									   </tr>
								   </thead>
								   <tbody>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
												<td> NGN 3,000 </td>
										  	<td> Debit </td>									   
										  
										   
										   

									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
													<td> NGN 3,000 </td>			
										   <td> Debit </td>
										   
										  
										   
										   

									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td> NGN 3,000 </td>
										   <td> Debit </td>
										  
										   
										   

									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td> NGN 3,000 </td>
										   
										  <td> Credit</td>
										   
										   

									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   
										   <td> NGN 3,000 </td>
										  
										   <td> Credit</td>
										   

									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   
										   <td> NGN 3,000 </td>
										  
										   <td> Credit</td>
										   

									   </tr>
									   
								   </tbody>
								   </table>
							   </div>
						   </div>


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

