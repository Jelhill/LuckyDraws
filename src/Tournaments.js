
import React, {Fragment} from 'react'
import Header from './Header'
import { Link } from "react-router-dom"

export default function Tournaments() {
	return (
		
		<Fragment>
			<Header />
			<section className="breadcrumb-area bc-tournaments">
			<img className="bc-img" src="assets/images/breadcrumb/tournaments.png" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h4 className="title">
							Tournaments
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
								<Link to="tournaments">Tournaments</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			</section>
			<section className="tournaments">
				<div className="container">
					<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
								Try to check out our
							</h5>
							<h2 className="title">
								Tournaments!
							</h2>
							<p className="text">
								LuckyDraws Tournaments are exciting slot competitions. The goal is to win as many points within a
								certain amount of time. Player with the most points at the end wins.
							</p>
						</div>
					</div>
				</div>
					<div className="row">
					<div className="col-lg-6">
						<div className="tournament-time-box">
							<div className="top-area">
								<div className="status">
									In Progress
								</div>
								<h4 className="title">
									All Players (Excl VIP's)
								</h4>
								<p className="sub-title">
									Slots Tournament
								</p>
							</div>
							<div className="timer-area">
								<h4 className="title">
									Ending in
								</h4>
								<div className="clock"></div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="tournament-time-box">
							<div className="top-area">
								<div className="status">
									In Progress
								</div>
								<h4 className="title">
									VIP Only
								</h4>
								<p className="sub-title">
									Slots Tournament
								</p>
							</div>
							<div className="timer-area">
								<h4 className="title">
									Ending in
								</h4>
								<div className="clock2"></div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className="info-table">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="main-box">
								<div className="main-header-area">
									<ul className="nav" role="tablist">
										<li className="nav-item">
											<Link className="nav-link active" id="pills-all-player-tab" data-toggle="pill"
												to="#pills-all-player" role="tab" aria-controls="pills-all-player"
												aria-selected="true">All Player</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" id="pills-vip-only-tab" data-toggle="pill"
												to="#pills-vip-only" role="tab" aria-controls="pills-vip-only"
												aria-selected="false">Vip Only</Link>
										</li>
									</ul>
								</div>
								<div className="tab-content">
									<div className="tab-pane fade show active" id="pills-all-player" role="tabpanel"
										aria-labelledby="pills-all-player-tab">
										<div className="inner-table-content">
											<div className="header-area">
												<ul className="nav" role="tablist">
													<li className="nav-item">
														<Link className="nav-link active" id="pills-leaderboardr-tab"
															data-toggle="pill" to="#pills-leaderboardr" role="tab"
															aria-controls="pills-leaderboardr"
															aria-selected="true">Leaderboard</Link>
													</li>
													<li className="nav-item">
														<Link className="nav-link" id="pills-more-info-tab" data-toggle="pill"
															to="#pills-more-info" role="tab"
															aria-controls="pills-more-info" aria-selected="false">More
															Info</Link>
													</li>
												</ul>
											</div>
											<div className="tab-content">
												<div className="tab-pane fade show active" id="pills-leaderboardr"
													role="tabpanel" aria-labelledby="pills-leaderboardr-tab">

													<div className="inner-table">
														<div className="responsive-table">
															<table className="table">
																<thead>
																	<tr>
																		<th scope="col">USER</th>
																		<th scope="col">Place</th>
																		<th scope="col">Points</th>
																		<th scope="col">Prize</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<img src="assets/images/people/p1.png" alt="" />
																			Tom Bass
																		</td>
																		<td>
																			01
																		</td>
																		<td>
																			33528.36
																		</td>
																		<td>
																			40 EUR X 30WR
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
												<div className="tab-pane fade" id="pills-more-info" role="tabpanel"
													aria-labelledby="pills-more-info-tab">
													<div className="info-content">
														<div className="info-box">
															<h4 className="title">
																	Tournament Duration
															</h4>
															<p className="text">
																	7 Days (Monday 00:01 UTC - Sunday 23:59 UTC)
															</p>
														</div>
														<div className="info-box two">
															<h4 className="title">
																	Applicable Games
															</h4>
															<p className="text">
																	All Games Under 'Slots' Category
															</p>
														</div>
														<div className="info-box three">
															<h4 className="title">
																	Free Spin Reward Games

															</h4>
															<p className="text">
																	Book Of Pyramids, Brave Viking, Desert Treasure, Hawaii Cocktails, Lucky Blue, Lucky Lady Clover, Lucky Sweets,
																	Princess Of Sky, Princess Royal, Scroll Of Adventure, Slotomon Go, West Town Any Softswiss Slots Game | Wager x 40 times
															</p>
														</div>
														<Link to="#" className="mybtn1">Terms and Conditions</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-vip-only" role="tabpanel"
										aria-labelledby="pills-vip-only-tab">
										<div className="inner-table-content">
												<div className="header-area">
													<ul className="nav" role="tablist">
														<li className="nav-item">
															<Link className="nav-link active" id="pills-leaderboardr-vip-tab"
																data-toggle="pill" to="#pills-leaderboardr-vip" role="tab"
																aria-controls="pills-leaderboardr-vip"
																aria-selected="true">Leaderboard</Link>
														</li>
														<li className="nav-item">
															<Link className="nav-link" id="pills-more-info-vip-tab" data-toggle="pill"
																to="#pills-more-info-vip" role="tab"
																aria-controls="pills-more-info-vip" aria-selected="false">More
																Info</Link>
														</li>
													</ul>
												</div>
												<div className="tab-content" id="pills-tabContent">
													<div className="tab-pane fade show active" id="pills-leaderboardr-vip"
														role="tabpanel" aria-labelledby="pills-leaderboardr-vip-tab">
		
														<div className="inner-table">
															<div className="responsive-table">
																<table className="table">
																	<thead>
																		<tr>
																			<th scope="col">USER</th>
																			<th scope="col">Place</th>
																			<th scope="col">Points</th>
																			<th scope="col">Prize</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<img src="assets/images/people/p1.png" alt="" />
																				Tom Bass
																			</td>
																			<td>
																				01
																			</td>
																			<td>
																				33528.36
																			</td>
																			<td>
																				40 EUR X 30WR
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
													<div className="tab-pane fade" id="pills-more-info-vip" role="tabpanel"
														aria-labelledby="pills-more-info-vip-tab">
														<div className="info-content">
															<div className="info-box">
																<h4 className="title">
																		Tournament Duration
																</h4>
																<p className="text">
																		7 Days (Monday 00:01 UTC - Sunday 23:59 UTC)
																</p>
															</div>
															<div className="info-box two">
																<h4 className="title">
																		Applicable Games
																</h4>
																<p className="text">
																		All Games Under 'Slots' Category
																</p>
															</div>
															<div className="info-box three">
																<h4 className="title">
																		Free Spin Reward Games
		
																</h4>
																<p className="text">
																		Book Of Pyramids, Brave Viking, Desert Treasure, Hawaii Cocktails, Lucky Blue, Lucky Lady Clover, Lucky Sweets,
																		Princess Of Sky, Princess Royal, Scroll Of Adventure, Slotomon Go, West Town Any Softswiss Slots Game | Wager x 40 times
																</p>
															</div>
															<Link to="#" className="mybtn1">Terms and Conditions</Link>
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
								We update our site regularly; more and more winners are added every day! To locate the most
								recent winner's information
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
										01.08.2019
									</p>
								</div>
								<div className="right">
									<p className="id">#5747e75482</p>
								</div>
							</div>
							<div className="bottom-area">
								<div className="left">
									0.099 ETH
								</div>
								<div className="right">
									<img src="assets/images/icon2.png" alt="" />
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
									0.099 ETH
								</div>
								<div className="right">
									<img src="assets/images/icon2.png" alt="" />
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
									0.099 ETH
								</div>
								<div className="right">
									<img src="assets/images/icon2.png" alt="" />
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
			<footer className="footer" id="footer">
			<div className="subscribe-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="subscribe-box">
									<form action="#">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-area">
												<h5 className="sub-title">
														subscribe to LuckyDraws
												</h5>
												<h4 className="title">
														To Get Exclusive Benefits
												</h4>
										</div>
									</div>
									<div className="col-lg-3 col-4 d-flex align-self-center">
										<div className="icon">
											<img src="assets/images/mail-box.png" alt="" />
										</div>
									</div>
									<div className="col-lg-6 col-8 d-flex align-self-center">
										<div className="form-area">
												<input type="text" placeholder="Your Email Address" />
										</div>
									</div>
									<div className="col-lg-3 d-flex align-self-center">
										<div className="button-area">
											<button className="mybtn1" type="submit">Subscribe
												<span><i className="fas fa-paper-plane"></i></span>
											</button>
										</div>
									</div>
								</div>
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								About 
							</h4>
							<ul className="link-list">
								<li>
									<Link to="about">
										<i className="fas fa-angle-double-right"></i>	About Us
									</Link>
								</li>
								<li>
									<Link to="contact">
										<i className="fas fa-angle-double-right"></i>	Contact Us
									</Link>
								</li>
								
							</ul>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								My Account
							</h4>
							<ul className="link-list">
								<li>
									<Link to="#">
										<i className="fas fa-angle-double-right"></i> Manage Your Account
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fas fa-angle-double-right"></i> How to Deposit
									</Link>
								</li>
															
							</ul>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								help center 
							</h4>
							<ul className="link-list">
								<li>
									<Link to="faq">
										<i className="fas fa-angle-double-right"></i>Help centre
									</Link>
								</li>
								<li>
									<Link to="faq">
										<i className="fas fa-angle-double-right"></i>FAQ
									</Link>
								</li>
								
							</ul>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								Legal Info
							</h4>
							<ul className="link-list">
								<li>
									<Link to="terms-conditions-details">
										<i className="fas fa-angle-double-right"></i>Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="terms-conditions-details">
										<i className="fas fa-angle-double-right"></i>Terms of Service
									</Link>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="copy-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="left-area">
								<p>Copyright © 2020.All Rights Reserved By <Link to="https://www.Doshservices.com">Dosh Services</Link>
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			</footer> 	
			<div className="bottomtotop">
				<i className="fas fa-chevron-right"></i>
			</div>
		</Fragment>
	)
}
