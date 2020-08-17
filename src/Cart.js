import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { thousandSeperator } from "./Actions/helperFunctions"
import { removeItemFromCart } from "./Actions/lotteryActions"
// import paypalImage from "./assets/images/payment/paypal.png"
// import bitcoinImage from "./assets/images/payment/bitcoin.png"
// import litecoinImage from "./assets/images/payment/litecoin.png"
// import etherImage from "./assets/images/payment/ether.png"
import dabitcard from "./assets/images/payment/dabit-card.png"
import payStackCard from "./assets/images/paystack-twitter-card.png"
// import rippleImage from './assets/images/payment/rippel.png'
import { totalAmount } from "./Actions/helperFunctions"


const Cart = (props) => {

	const removeItem = (ticket, batchId) => {
		props.removeItemFromCart(ticket, batchId)		
	}

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
								{props.userSelectedNumber.length ? null : 
									<h2 className="empty-cart">You cart is currently empty</h2>
								 }
									<table className="table">
									<thead>
										<tr>
										<th scope="col">Ticket</th>
										<th scope="col">Game</th>
										<th scope="col">Price</th>
										{/* <th scope="col">Quantity</th> */}
										<th scope="col">Expires</th>
										<th scope="col">Total</th>
										<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
									{	
									
										props.userSelectedNumber.map((select, index) => (													
										<tr key={index}>
											<td>											
												<ul className="number-list">
													<li>{select.number}</li>												
												</ul>
											</td>
											<td><img src={select.image_url} alt="" className="selected-game-image"/></td>
											<td>											
											
												{`₦${thousandSeperator(select.amount)}`}
											</td>
											{/* <td>
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
											</td> */}
											<td>
												<span className="time">30 mins.left</span>
											</td>
											<td>

											{`₦${thousandSeperator(select.amount)}`}
											</td>
											<td>
												<div className="remove">
														<i className="fas fa-times" onClick={() => removeItem(select.number, select.batchId)}></i>
												</div>
											</td>
										</tr>
												
									))}	
										
									
									</tbody>
									</table>
								</div>
							</div>
							<div className="total-pay">
								<div className="content">
									<span>Total to Pay:</span>
									<div className="num">
										
											{thousandSeperator(totalAmount(props.userSelectedNumber))	}
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
								{/* <div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={dabitcard} alt="" />
										</div>
										<span>Credit Card</span>
									</Link>
								</div> */}
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={dabitcard} alt="" />
										</div>
										<span>Dabit Card</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method active">
										<div className="icon">
											<img src={payStackCard} alt="" />
										</div>
										<span></span>
									</Link>
								</div>
{/* 						
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={bitcoinImage} alt="" />
										</div>
										<span>Bitcoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={litecoinImage} alt="" />
										</div>
										<span>Litecoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={etherImage} alt="" />
										</div>
										<span>Ethereum</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
											<img src={rippleImage} alt="" />
										</div>
										<span>Ripple </span>
									</Link>
								</div>
								<div className="item">
										<Link to="#" className="single-method">
											<div className="icon">
												<img src={bitcoinImage} alt="" />
											</div>
											<span>Bitcoin</span>
										</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={litecoinImage} alt="" />
										</div>
										<span>Litecoin</span>
									</Link>
								</div>
								<div className="item">
									<Link to="#" className="single-method">
										<div className="icon">
												<img src={etherImage} alt="" />
										</div>
										<span>Ethereum</span>
									</Link>
								</div> */}
							</div>
						</div>
						<div className="col-lg-12 text-center">
							<Link to="wallet" className="mybtn1">
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
	console.log("Tracker", lotteryReducer.userSelectedNumberTracker)
	return {	
	  userSelectedNumber: lotteryReducer.userSelectedNumber,
	  userSelectedNumberTracker: lotteryReducer.userSelectedNumberTracker, 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {	
		removeItemFromCart: (ticket, batchId) => dispatch(removeItemFromCart(ticket, batchId))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)