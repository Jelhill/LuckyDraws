
import React, {Fragment} from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function HowItWork() {
	
	return (
		<Fragment>
			<Header />
			<section className="breadcrumb-area h-i-w">
				<img className="bc-img" src="assets/images/breadcrumb/how-it-work.png" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								How it Works
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
									<Link to="how-it-work">How it Works</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="how-play">
				<div className="how-it-work">
					<img className="bg-shape" src="assets/images/howitwork/bg-shape.png" alt="" />
					<div className="container">
					<div className="row justify-content-center">
							<div className="col-lg-8 col-md-10">
								<div className="section-heading">
									<p className="text">
										We update our site regularly with new competitions and more winners are added every day! To locate the most recent winner's information
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4">
								<div className="single-work">
									<img src="assets/images/howitwork/ic1.png" alt="" />
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
									<img src="assets/images/howitwork/ic2.png" alt="" />
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
									<img src="assets/images/howitwork/ic3.png" alt="" />
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

			<section className="lottery-video">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="video-box">
								<Link to="#" className="video-play-btn video-icon mfp-iframe">
									<img src="assets/images/play-icon-red.png" alt="" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="question-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<img src="assets/images/question-left.png" alt="" />
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
													₦ 14,000
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
													₦ 40,000
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
		
			<Footer />

			<div className="bottomtotop">
				<i className="fas fa-chevron-right"></i>
			</div>
			</Fragment>

	)
}
