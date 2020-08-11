
import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import icon1 from "./assets/images/icon1.png"
import { connect } from 'react-redux'

const Cart = (props) => {
	return (
		<Fragment>
			<Header />
			<section className="breadcrumb-area cart">
				<img className="bc-img" src="assets/images/breadcrumb/cart-bg.png" alt="" /> 
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Cart
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
									<Link to="cart">Cart</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="cart-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="message-one">
								<p>
										Hey! Nice Number Selection.Please review your order below
										and follow the next quick steps to complete your order.
								</p>
							</div>
							<div className="message-two">
								<div className="left">
									<p>
										<i className="far fa-check-circle"></i>
											Selected Numbers was successfully added to your cart
									</p>
								</div>
								<div className="right">
									<Link to="#"><i className="far fa-edit"></i> Update Cart</Link>
								</div>
							</div>
							<div className="cart-table-area">
								<div className="responsive-table">
									<table className="table">
									<thead>
										<tr>
										<th scope="col">Ticket numbers</th>
										<th scope="col">Price</th>
										<th scope="col">Quantity</th>
										<th scope="col">Expires</th>
										<th scope="col">Total</th>
										<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>											
												<ul className="number-list">
												{props.userSelectedNumber.map((num, index) => {
													return <li key={index}>{`A${num}`}</li>
												})}													
												</ul>
											</td>
											<td>
												<img src={icon1} alt="" />
												0.00000051
											</td>
											<td>
												<div className="qty">
														<ul>
															<li>
																<span className="qtminus">
																	<i className="fas fa-angle-left"></i>
																</span>
															</li>
															<li>
																<span className="qttotal">1</span>
															</li>
															<li>
																<span className="qtplus">
																	<i className="fas fa-angle-right"></i>
																</span>
															</li>
														</ul>
												</div>
											</td>
											<td>
												<span className="time">30 mins.left</span>
											</td>
											<td>
												<img src={icon1} alt="" />
												0.00000051
											</td>
											<td>
												<div className="remove">
														<i className="fas fa-times"></i>
												</div>
											</td>
										</tr>
									</tbody>
									</table>
								</div>
							</div>
							<div className="total-pay">
								<div className="content">
									<span>Total to Pay:</span>
									<div className="num">
											<img src={icon1} alt="" />
											0.00000051
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="payment-method">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
									Payment Method
							</h4>
							<p className="text">
									Choose a payment method 
							</p>
						</div>
						<div className="col-lg-12">
							<div className="method-slider">
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/dabit-card.png" alt="" />
										</div>
										<span>Credit Card</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/dabit-card.png" alt="" />
										</div>
										<span>Dabit Card</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method active">
										<div className="icon">
											<img src="assets/images/payment/paypal.png" alt="" />
										</div>
										<span>Paypal</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/bitcoin.png" alt="" />
										</div>
										<span>Bitcoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/litecoin.png" alt="" />
										</div>
										<span>Litecoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/ether.png" alt="" />
										</div>
										<span>Ethereum</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/rippel.png" alt="" />
										</div>
										<span>Ripple </span>
									</Link>
								</div>
								<div className="item">
										<Link to="#" className="single-method">
											<div className="icon">
													<img src="assets/images/payment/bitcoin.png" alt="" />
											</div>
											<span>Bitcoin</span>
										</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/litecoin.png" alt="" />
										</div>
										<span>Litecoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src="assets/images/payment/ether.png" alt="" />
										</div>
										<span>Ethereum</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-12 text-center">
							<Link to="#" className="mybtn1">
									PurChase
							</Link>
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


const mapStateToProps = (state) => {
	const { lotteryReducer } = state
	console.log("numbers", lotteryReducer.userSelectedNumber)
	return {	
	  userSelectedNumber: lotteryReducer.userSelectedNumber,
	}
}

export default connect(mapStateToProps)(Cart)