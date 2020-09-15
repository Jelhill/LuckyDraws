import React from 'react';
import { PaystackButton } from 'react-paystack';
import { connect } from 'react-redux';


const PaystackWalletFunding = (props) => {
const {fundingAmount, email, token } = props

const verifyPayment = (response) => {
    console.log(response)
    const data = new FormData()
    let myHeaders = new Headers();
    data.append("amount", fundingAmount)
    data.append("reference", response.reference)
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch("https://app.luckydraws.ng/wallet/verify-payment", {
        method: "POST",
        headers: myHeaders,
        body: data
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.status === "success"){
        window.location.reload(true)
      }    
    })
    .catch(err => console.log(err))
}

const componentProps = {
    email: email,
    amount: fundingAmount * 100,
    text: "CHECKOUT WITH PAYSTACK",
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
    onSuccess: (payment) => verifyPayment(payment)
}
    return (
    <div className="App">
      <div className="container">
        <div className="checkout-form">
          <PaystackButton {...componentProps} className="paystack-button"/>
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
      cart: lotteryReducer.cart

	}
}

const mapDispatchToProps = (dispatch) => {
	return {	

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PaystackWalletFunding)
