
import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"
import AddFundToWallet from './Modal/AddFundToWallet'
import { fundWalletModal } from "./Actions/modalActions"
import { updateStateWIthWalletInfo } from "./Actions/userActions"
import { thousandSeperator } from "./Actions/helperFunctions"
import { connect } from 'react-redux'
import PaystackWalletFunding from './Payment/PaystackWalletFunding'

function Wallet(props) {

	const openFundWalletModal = (e) => {
		e.preventDefault()
		props.fundWalletModal(true)
	}

	return (
	<Fragment>
		<Header />	
		<section className="breadcrumb-area bc-awards">
			<img className="bc-img" src="assets/images/breadcrumb/awards.png" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h4 className="title">
							Accounts
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
								<Link to="Winners">Wallet</Link>
							</li>		
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section className="awards-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-heading">
							<h5 className="subtitle">
								Previous Winners
							</h5>
							<h2 className="title">
								Deposit Bonus
							</h2>
							<p className="text">
								We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 ">
						<div className="single-awards">
							<div className="content">
								<img src="assets/images/feature/payout.png" alt="" />
								<h4 className="title">
									Wallet Balance
								</h4>
								<p>
									<i className="fas fa-wallet"></i>NGN {
										props.walletBalance === 0 ? "0.00" : thousandSeperator(props.walletBalance.toFixed(2))}
								</p>
								<Link to="#" className="mybtn2" onClick={openFundWalletModal}> Fund Wallet</Link>
								<AddFundToWallet 
									show={props.modalShow}
									onHide={() => props.fundWalletModal(false)}
								/>
							</div>
						</div>
					</div>
		
					<div className="col-lg 6 col-md-offset-2 activities_new" >
						<div className="tab-content" id="pills-tabContent">
							<div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
								<div className="responsive-table">
									{!props.fundingAmount > 0 ? null :
									<Fragment>
										<div className="reciept-display">
										<div className="reciept-div-top">
											<div className="transaction-id-div">
												<div className="wallet-title-div">TRANSACTION ID</div>
												<div className="wallet-value-div">000452457855662</div>
											</div>
											<div className="description-div">
												<div className="wallet-title-div">DESCRIPTION</div>
												<div className="wallet-value-div">FUNDING WALLET WITH {thousandSeperator(props.fundingAmount)}</div>
											</div>
											<div className="amount-div">
												<div className="wallet-title-div">AMOUNT</div>
												<div className="wallet-value-div">{
													thousandSeperator(props.fundingAmount)}</div>
											</div>
										</div>
										<div className="reciept-div-bottom">
											<div className="wallet-total-div">TOTAL</div>
											<div className="amount-div-total">
											{thousandSeperator(props.fundingAmount.toFixed(2))}</div>
										</div>
									</div>
										<div>
											<PaystackWalletFunding />										
										</div>
									</Fragment>
									}
									<table className="table">
									<thead>
										<tr>
											<th scope="col">DATE</th>
											<th scope="col">BET AMOUNT</th>
											<th scope="col">TYPE</th>							
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												12/05/2020
											</td>
												<td> NGN 3,000 </td>
											<td> Debit </td>									   
											
											
											

										</tr>
										<tr>
											<td>
												12/05/2020
											</td>
													<td> NGN 3,000 </td>			
											<td> Debit </td>
											
											
											
											

										</tr>
										<tr>
											<td>
												12/05/2020
											</td>
											<td> NGN 3,000 </td>
											<td> Debit </td>
											
											
											

										</tr>
										<tr>
											<td>
												12/05/2020
											</td>
											<td> NGN 3,000 </td>
											
											<td> Credit</td>
											
											

										</tr>
										<tr>
											<td>
												12/05/2020
											</td>
											
											<td> NGN 3,000 </td>
											
											<td> Credit</td>
											

										</tr>
										<tr>
											<td>
												12/05/2020
											</td>
											
											<td> NGN 3,000 </td>
											
											<td> Credit</td>
											

										</tr>
										
									</tbody>
									</table>
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

const mapStateToProps = (state) => {
	const { modalReducer } = state
	const { userReducer } = state
	const { lotteryReducer } = state
	return {	
	  walletModal: modalReducer.walletModal,
	  modalShow: modalReducer.modalShow,
	  userSelectedNumber: lotteryReducer.userSelectedNumber,
	  userSelectedNumberTracker: lotteryReducer.userSelectedNumberTracker, 
	  fundingAmount: modalReducer.fundingAmount,
	  walletBalance: userReducer.userWallet
	}
}

const mapDispatchToProps = (dispatch) => {
	return {	
		fundWalletModal: (value) => dispatch(fundWalletModal(value)),
		updateStateWIthWalletInfo: (value) => dispatch(updateStateWIthWalletInfo(value)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)