import React, {Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"


export default function TermsAndCondition() {
	return (
			<Fragment>				
				<Header />
				<section className="breadcrumb-area bc-terms">
					<img className="bc-img" src="assets/images/breadcrumb/tc.png" alt="" />
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h4 className="title">
									terms & conditions
								</h4>
								<ul className="breadcrumb-list">
									<li>
										<Link to="/">
											<i className="fas fa-home"></i>
											Home
										</Link>
									</li>
									<li>
										<span><i className="fas fa-chevron-right"></i> </span>
									</li>
									<li>
										<Link to="termsAndConditions">Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<div className="serch-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="serch-box">
									<div className="row">
										<div className="col-lg-12">
											<form action="#">
												<ul className="list">
													<li className="input-field">
														<input type="text" placeholder="Serch For Articals" />
													</li>
													<li className="button">
														<button type="submit" className="mybtn1">Get Started </button>
													</li>
												</ul>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="help-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="help-box">
									<div className="help-box-inner">
										<h4 className="title">
											Getting Started Guides
										</h4>
										<div className="content">
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="help-box-inner2-hearer">
										<h4 className="title">
												Terms and Conditions of Megawins
										</h4>
									</div>
									<div className="help-box-inner2">
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
										<div className="single-artical">
											<div className="content">
												<h4 className="title">
													Bonus Terms & Conditions
												</h4>
											</div>
											<div className="writer-profile">
												<div className="img">
													<img src="assets/images/tc.png" alt="" />
												</div>
												<div className="writer-content">
													<h5 className="w-name">
														Written by <Link to="#">
															David Kemmerer
														</Link>
													</h5>
													<p>27 articles in this collection
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="help-box-inner3-hearer">
											<h4 className="title">
													Privacy
											</h4>
										</div>
										<div className="help-box-inner2">
											<div className="single-artical">
												<div className="content">
													<h4 className="title">
														Bonus Terms & Conditions
													</h4>
												</div>
												<div className="writer-profile">
													<div className="img">
														<img src="assets/images/tc.png" alt="" />
													</div>
													<div className="writer-content">
														<h5 className="w-name">
															Written by <Link to="#">
																David Kemmerer
															</Link>
														</h5>
														<p>27 articles in this collection
														</p>
													</div>
												</div>
											</div>
											<div className="single-artical">
												<div className="content">
													<h4 className="title">
														Bonus Terms & Conditions
													</h4>
												</div>
												<div className="writer-profile">
													<div className="img">
														<img src="assets/images/tc.png" alt="" />
													</div>
													<div className="writer-content">
														<h5 className="w-name">
															Written by <Link to="#">
																David Kemmerer
															</Link>
														</h5>
														<p>27 articles in this collection
														</p>
													</div>
												</div>
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
	
			</Fragment>
	)
}
