import React, { Fragment, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { connect } from 'react-redux'
import { updateStateWithRegistration, saveImageInState } from "../Actions/modalActions"
import { checkForTokenWithExpiryDate } from "../Actions/helperFunctions"
import PaystackDirectPayment from './PaystackDirectPayment'
import { updateStateWithBillingsDetails } from "../Actions/userActions"




function PaystackCheckoutPage(props) {

	const getBillings = () => {
		const userObject = checkForTokenWithExpiryDate("access-token")
		const headers = new Headers()
		headers.append("Authorization", `Bearer ${userObject.token}`);
		fetch("https://app.luckydraws.ng/account/billing-adress", {
			method: "GET",
			headers: headers
		})
		.then(response => response.json())
		.then(jsonResponse => { 
			props.updateStateWithBillingsDetails(jsonResponse.data)		
		})
		.catch(err => console.log(err))

	}

	useEffect(getBillings, [])

	
	// const { first_name, last_name, address, city, state, email} = props.billingDetails
	return (
		<Fragment>
			<Header />
            <section className="awards-area">				
				<div className="container">								
					<div className="row">											
						<div className="col-lg 6 col-md-offset-2 profile add-margin" >
                            <h2>Select Billing Details</h2>


							{!props.paystackDirectSuccessMessage.length ? null :
								<div className="paystack-success-response">Payment Successful, Ticket Booked</div>
							}

							{props.billingDetails.map((item, index) => {

                            return <div key={item.id} className="billing-details-div">
                                <div className="billing-details-profile">
                                    <h3>{`${item.last_name} ${item.first_name}`}</h3>
                                    <p>{item.email}</p>
                                    <label htmlFor="">08036792165</label>
                                    <p>{item.address}</p>
                                    <p>{`${item.city} ${item.state}`}</p>
                                </div>
                                <PaystackDirectPayment  item={item}/>
                            </div>
							}) }
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
	const { userReducer } = state
	return {
	  formInputs: modalReducer.formInputs,
	  userImage: modalReducer.userImage,
	  successMessage: modalReducer.successMessage,
	  billingDetails: userReducer.billingDetails,
	  paystackDirectSuccessMessage: modalReducer.paystackDirectSuccessMessage
	}
  }
  

  const mapDispatchToProps = (dispatch) => {
	return {
		updateStateWithRegistration: (modalInputs) => dispatch(updateStateWithRegistration(modalInputs)),
		saveImageInState: (image) => dispatch(saveImageInState(image)),
		updateStateWithBillingsDetails: (data) => dispatch(updateStateWithBillingsDetails(data))

	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PaystackCheckoutPage)