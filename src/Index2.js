import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"
export default function Index2() {

	return (
		<div className="index2">	
			<Header />
		<div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
							<Link className="navbar-brand" href="index.html">
								<img src="assets/images/logo.png" alt="" />
							</Link>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse fixed-height" id="main_menu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item dropdown">
										<Link className="nav-link active dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Home
										<div className="mr-hover-effect"></div>
										</Link>
										<ul className="dropdown-menu" >
											<li><Link className="dropdown-item" href="index.html"> <i className="fa fa-angle-double-right"></i>Home 1</Link></li>
											<li><Link className="dropdown-item" href="index2.html"> <i className="fa fa-angle-double-right"></i> Home 2</Link></li>
										</ul>
									</li>
									<ul className="navbar-nav ml-auto">
									<li className="nav-item ">
										<Link className="nav-link " href="index.html">Home
												<div className="mr-hover-effect"></div></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="competitions.html">Competitions
												<div className="mr-hover-effect"></div></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="how-it-work.html">How To Play
												<div className="mr-hover-effect"></div></Link>
									</li>
																
											<li className="nav-item">
											<Link className="nav-link" href="contact.html">Contact
													<div className="mr-hover-effect"></div></Link>
										</li>
								</ul>
									
									
									
									<li className="nav-item">
											<Link className="nav-link" href="contact.html">Contact
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
		<div className="hero-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="left-content">
							<div className="content">
								<h5 className="subtitle">
									Smart cryptocurrency
								</h5>
								<h1 className="title">
									for gaming
								</h1>
								<p className="text">
										Play, Invest,Exchange and Join the
										Contest with high rewards at LuckyDraws!	
								</p>
								<div className="links">
									<Link to="#" className="mybtn1 link1">Get Started Now!</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section className="about-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="about-box">
							<div className="about-box-inner">
								<div className="row">
									<div className="col-lg-6">
										<div className="video-area">
											<Link to="https://www.youtube.com/watch?v=oj40TQirhss" className="video-play-btn2 play-video mfp-iframe">
												<i className="fas fa-play"></i>
												<span></span>
											</Link>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="section-heading">
											<h5 className="subtitle">
												Our Journey in a Nutshell
											</h5>
											<h2 className="title">
												About LuckyDraws
											</h2>
											<p className="text">
													LuckyDraws is a unique cryptogames providing 
													pleasant pastime. We offer our members to play Provably Fair games and some bonus games, join contests, achieve various awards.
													
											</p>
											<Link to="#" className="mybtn1">Read More </Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="features">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
							an exhaustive list of 
							</h5>
							<h2 className="title">
									Amazing features
							</h2>
							<p className="text">
									It’s up to the competition in features, with some unique 
									advantages.All the latest crypto games.Here are some of them.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="feature-box">
							<div className="feature-box-inner">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="single-feature landscape">
											<div className="icon one">
												<img src="assets/images/feature/icon1.png" alt="" />
											</div>
											<div className="content">
												<h4 className="title">
													Exclusive Bonuses
												</h4>
												<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="single-feature landscape">
											<div className="icon three">
												<img src="assets/images/feature/payout.png" alt="" />
											</div>
											<div className="content">
												<h4 className="title">
														Instant Payout
												</h4>
												<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="single-feature landscape">
											<div className="icon two">
												<img src="assets/images/feature/icon2.png" alt="" />
											</div>
											<div className="content">
												<h4 className="title">
														Provably Fair
												</h4>
												<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="single-feature landscape">
											<div className="icon four">
												<img src="assets/images/feature/icon3.png" alt="" />
											</div>
											<div className="content">
												<h4 className="title">
														24/7 Support
												</h4>
												<Link to="#" className="link">read more <i className="fas fa-arrow-right"></i></Link>
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
		<section className="featured-game">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
									Try to check out our
							</h5>
							<h2 className="title">
									featured games
							</h2>
							<p className="text">
									Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10 players receive prizes every hour!

							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="game-slider">
							<div className="item">
								<div className="single-game">
									<img src="assets/images/game/icon1.png" alt="" />
									<Link to="#" className="mybtn2">PLay NoW !</Link>
								</div>
							</div>
							<div className="item">
								<div className="single-game">
										<img src="assets/images/game/icon2.png" alt="" />
										<Link to="#" className="mybtn2">PLay NoW !</Link>
								</div>
							</div>
							<div className="item">
								<div className="single-game">
										<img src="assets/images/game/icon3.png" alt="" />
										<Link to="#" className="mybtn2">PLay NoW !</Link>
								</div>
							</div>
							<div className="item">
								<div className="single-game">
										<img src="assets/images/game/icon2.png" alt="" />
										<Link to="#" className="mybtn2">PLay NoW !</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="activities">
				<img className="shape shape1" src="assets/images/people/shape1.png" alt="" />
				<img className="shape shape2" src="assets/images/people/shape2.png" alt="" />
				<img className="shape shape3" src="assets/images/people/shape3.png" alt="" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
								The Smarter Way 
							</h5>
							<h2 className="title">
								Lend and Borrow
							</h2>
							<p className="text">
								The World's First Crypto Lending Marketplace and 
								Affordable and competitive interest rates
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="tab-menu-area">
							<ul className="nav nav-lend mb-3" id="pills-tab" role="tablist">
								<li className="nav-item">
									<Link className="nav-link active" id="pills-all-bets-tab" data-toggle="pill" href="#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">All bets</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" id="pills-my-bets-tab" data-toggle="pill" href="#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">my bets</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" id="pills-my-jackpots-tab" data-toggle="pill" href="#pills-my-jackpots" role="tab" aria-controls="pills-my-jackpots" aria-selected="false">jackpots</Link>
								</li>
							</ul>
						</div>
						<div className="tab-content" id="pills-tabContent">
							<div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
								<div className="responsive-table">
									<table className="table">
									<thead>
										<tr>
										<th scope="col">USER</th>
										<th scope="col">BET ID</th>
										<th scope="col">BET AMOUNT</th>
										<th scope="col">CHANCE</th>
										<th scope="col">GAME</th>
										<th scope="col">PROFIT</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img src="assets/images/people/p1.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p2.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon2.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon2.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p3.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon3.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon3.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p4.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon4.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon4.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p5.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon5.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon5.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p6.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon1.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p1.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon2.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon2.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p2.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon3.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon3.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p3.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon4.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon4.png" alt="" />
												0.00000051
											</td>
										</tr>
										<tr>
											<td>
												<img src="assets/images/people/p4.png" alt="" />
												Tom Bass
											</td>
											<td>
												b799b8724b
											</td>
											<td>
												<img src="assets/images/icon5.png" alt="" />
												0.00000051
											</td>
											<td>70%</td>
											<td>Dice</td>
											<td>
												<img src="assets/images/icon5.png" alt="" />
												0.00000051
											</td>
										</tr>
									</tbody>
									</table>
								</div>
							</div>
							<div className="tab-pane fade" id="pills-my-bets" role="tabpanel" aria-labelledby="pills-my-bets-tab">
								<div className="responsive-table">
										<table className="table">
												<thead>
													<tr>
													<th scope="col">USER</th>
													<th scope="col">BET ID</th>
													<th scope="col">BET AMOUNT</th>
													<th scope="col">CHANCE</th>
													<th scope="col">GAME</th>
													<th scope="col">PROFIT</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<img src="assets/images/people/p1.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p2.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p3.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p4.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p5.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p6.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p1.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p2.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p3.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p4.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
													</tr>
												</tbody>
												</table>
								</div>
							</div>
							<div className="tab-pane fade" id="pills-my-jackpots" role="tabpanel" aria-labelledby="pills-my-jackpots-tab">
								<div className="responsive-table">
										<table className="table">
												<thead>
													<tr>
													<th scope="col">USER</th>
													<th scope="col">BET ID</th>
													<th scope="col">BET AMOUNT</th>
													<th scope="col">CHANCE</th>
													<th scope="col">GAME</th>
													<th scope="col">PROFIT</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<img src="assets/images/people/p1.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p2.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p3.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p4.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p5.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p6.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon1.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p1.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon2.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p2.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon3.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p3.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon4.png" alt="" />
															0.00000051
														</td>
													</tr>
													<tr>
														<td>
															<img src="assets/images/people/p4.png" alt="" />
															Tom Bass
														</td>
														<td>
															b799b8724b
														</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
														<td>70%</td>
														<td>Dice</td>
														<td>
															<img src="assets/images/icon5.png" alt="" />
															0.00000051
														</td>
													</tr>
												</tbody>
												</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="funfact">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="single-fun">
								<img src="assets/images/funfact/icon1.png" alt="" />
								<div className="count-area">
									<div className="count">93K</div>
								</div>
								<p>
									Players
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-fun">
								<img src="assets/images/funfact/icon2.png" alt="" />
								<div className="count-area">
									<div className="count">99+</div>
								</div>
								<p>
										Games
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-fun">
								<img src="assets/images/funfact/icon3.png" alt="" />
								<div className="count-area">
									<div className="count">70+</div>
								</div>
								<p>
										Winners
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</section> 
		<section className="get-start">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 d-flex align-self-center">
						<div className="left-area">
							<div className="section-heading">
								<h5 className="subtitle">
									every day lots of  wins
								</h5>
								<h2 className="title ">
										be one of them
								</h2>
								<p className="text">
										Get started in less than 5 min - no credit card 
										required.Gain early access to LuckyDraws and  experience crypto like never before. 
								</p>
								<Link to="#" className="mybtn1">Play  Now!</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="right-image">
							<img src="assets/images/get-start.png" alt="" />
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
								<Link className="mybtn2" href="#">View All </Link>
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
									<Link to="about.html">
										<i className="fas fa-angle-double-right"></i>	About Us
									</Link>
								</li>
								<li>
									<Link to="contact.html">
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
									<Link to="faq.html">
										<i className="fas fa-angle-double-right"></i>Help centre
									</Link>
								</li>
								<li>
									<Link to="faq.html">
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
									<Link to="terms-conditions-details.html">
										<i className="fas fa-angle-double-right"></i>Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="terms-conditions-details.html">
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
	</div>
	)
}
