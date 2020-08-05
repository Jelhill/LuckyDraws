
import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"

export default function Wallet() {
	return (
		
<Fragment>
	<Header />	
	<section className="breadcrumb-area bc-awards">
		<img className="bc-img" src="assets/images/breadcrumb/awards.png" alt="" />
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						Accounts
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
							<Link to="Winners">Wallet</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="awards-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							Previous Winners
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
				<div className="col-lg-4 ">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/feature/payout.png" alt="" />
							<h4 className="title">
								Wallet Balance
							</h4>
							<p>
								<i className="fas fa-wallet"></i>NGN 54,000
							</p>
							<Link to="#" className="mybtn2">Fund Wallet</Link>
						</div>
					</div>
				</div>
				<div className="col-lg 6 col-md-offset-2 activities_new" >
					    <div className="tab-content" id="pills-tabContent">
						   <div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
							   <div className="responsive-table">
								   <table className="table">
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

