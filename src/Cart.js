import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { thousandSeperator, checkForTokenWithExpiryDate } from "./Actions/helperFunctions"
import { removeItemFromCart, saveUserSelectedNumber } from "./Actions/lotteryActions"
import { totalAmount } from "./Actions/helperFunctions"
import { fundWalletModal } from "./Actions/modalActions"
import PaystackPayment from './Payment/PaystackDirectPayment'

const Cart = (props) => {

	const checkoutWithWallet = (e) => {
		e.preventDefault()
		const userObject = checkForTokenWithExpiryDate("access-token")
		const headers = new Headers()
		headers.append("Authorization", `Bearer ${userObject.token}`);

		fetch("https://app.luckydraws.ng/wallet-checkout", {
			method: "POST",
			headers: headers,
		})
		.then(response => response.json())
		.then(jsonResponse => {
			console.log(jsonResponse)
		})
		.catch(err => console.log(err))
	}

	const getBillingDetails = (e) => {
		e.preventDefault()
		const userObject = checkForTokenWithExpiryDate("access-token")
		const headers = new Headers();
		headers.append("Authorization", `Bearer ${userObject.token}`);	
		fetch("https://app.luckydraws.ng/account/billing-adress", {
		  method: "GET",
		  headers: headers
		})
		.then(response => response.json())
		.then(jsonResponse => {
			if(jsonResponse.status === "success" && jsonResponse.data.length < 1) {
				console.log(jsonResponse)
				props.history.push("/billing")
			}else{
				props.history.push("/paystackCheckout")
			}		
		})
		.catch(err => console.log(err))
	}


	const removeItem = (selectedTicket) => {
		const comp_id = selectedTicket.ticket.competition.comp_id
		const userObject = checkForTokenWithExpiryDate("access-token")
		const myHeaders = new Headers()
		myHeaders.append("Authorization", `Bearer ${userObject.token}`);
		const data = new FormData()
		data.append("value", selectedTicket.ticket.value)
		data.append("id", selectedTicket.ticket.id)
		fetch(`https://app.luckydraws.ng/competition-details/${comp_id}`, {
			method: "DELETE",
			headers: myHeaders,
			body: data
		})
		.then(response => response.json())
		.then(jsonResponse => {
			fetch(`https://app.luckydraws.ng/account/cart`,{
            		method: "GET",
					headers: myHeaders					
				})
				.then(response => response.json())
				.then(jsonResponse => {
					if(jsonResponse.status === "success") {
						props.saveUserSelectedNumber(jsonResponse.data)
					}				
				})
		})
		.catch(err => console.log(err))
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
								{props.cart.length ? null : 
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
									
										props.cart.map((select, index) => (													
										<tr key={index}>
											<td>											
												<ul className="number-list">
													<li>{select.ticket.value}</li>												
												</ul>
											</td>
											<td><img src={select.ticket.competition.image_url} alt="" className="selected-game-image"/></td>
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
													<i className="fas fa-times" onClick={() => removeItem(select)}></i>
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
											{thousandSeperator(totalAmount(props.cart))	}
									</div>
								</div>
								
							<div className="checkout-button-div">
								<div className="">
									<button onClick={checkoutWithWallet} className="checkout-wallet-button">
										CHECKOUT WITH WALLET
									</button>
								</div>
								<div className="">										
									<button to="/billing" className="paystack-button" onClick={getBillingDetails}>Checkout with Paystack</button>									
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
							<h4 className="titvle">
									Payment Method
							</h4>
							<p className="text">
									Choose a payment method 	
							</p>
						</div>
						<div className="col-lg-12">
							<div className="method-slider">

								<div className="item">
									<button to="/wallet" className="single-method">
										<div className="icon">
											PAY WITH WALLET
										</div>										
									</button>
									{/* <Link to="/wallet" className="single-method">
										<div className="icon">
											PAY WITH WALLET
										</div>										
									</Link> */}
								</div>
								<div className="item">
									<Link to="#" className="single-method active">
										<div className="icon">
											{/* <img src={payStackCard} alt="" /> */}
											<PaystackPayment className="paystack-button"/>
										</div>
										<span></span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-12 text-center">
							<Link to="/wallet" className="mybtn1" >
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
	const { modalReducer } = state
	const { lotteryReducer } = state
	// console.log("numbers", lotteryReducer.userSelectedNumber)
	// console.log("Tracker", lotteryReducer.userSelectedNumberTracker)
	return {	
	  walletModal: modalReducer.walletModal,
	  userSelectedNumber: lotteryReducer.userSelectedNumber,
	  userSelectedNumberTracker: lotteryReducer.userSelectedNumberTracker, 
	  cart: lotteryReducer.cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {	
		removeItemFromCart: (ticket, batchId) => dispatch(removeItemFromCart(ticket, batchId)),
		fundWalletModal: (value) => dispatch(fundWalletModal(value)),
		saveUserSelectedNumber: (data) => dispatch(saveUserSelectedNumber(data)),

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)