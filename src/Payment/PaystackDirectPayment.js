import React from 'react';
import { PaystackButton } from 'react-paystack';
import { connect } from 'react-redux';
import { totalAmount } from "../Actions/helperFunctions"
import { showPaystackDirectSuccessMessage } from "../Actions/modalActions"





const PaystackPayment = (props) => {
const {email, token, cart, item } = props

const verifyPayment = (response) => {
    console.log(response)
    const data = new FormData()
    let myHeaders = new Headers();
    console.log("Item Id", item.id, totalAmount(cart))
    data.append("amount", totalAmount(cart))
    data.append("reference", response.reference)
    data.append("billing_id", item.id)
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch("https://app.luckydraws.ng/verify-payment", {
      method: "POST",
      headers: myHeaders,
      body: data
    })
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse)
      if(jsonResponse.status === "success") {
        props.showPaystackDirectSuccessMessage("Payment Successful, Ticket Booked")
        // window.location.reload(true)
      }
    })
    .catch(err => console.log(err))
}

const componentProps = {
    email: email,
    amount: totalAmount(cart) * 100,
    text: "CHECKOUT WITH PAYSTACK",
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
    onSuccess: (payment) => verifyPayment(payment)
}
    return (
    <div className="App">
      <div className="container">
        <div className="checkout-form">
          <PaystackButton {...componentProps} className="paystack-button-direct"/>
        </div>
      </div>
    </div>
    )
  }

const mapStateToProps = (state) => {
	const { modalReducer } = state
	const { userReducer } = state
	const { lotteryReducer } = state
	return {	
	  fundingAmount: modalReducer.fundingAmount,
      walletBalance: userReducer.userWallet,
      email: userReducer.email,
      token: userReducer.token,
      cart: lotteryReducer.cart,
      paystackDirectSuccessMessage: modalReducer.paystackDirectSuccessMessage

	}
}

const mapDispatchToProps = (dispatch) => {
	return {	
    showPaystackDirectSuccessMessage: (message) => dispatch(showPaystackDirectSuccessMessage(message))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PaystackPayment)
