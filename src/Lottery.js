
import React, { Fragment, useEffect } from 'react'
import { Link, useParams, withRouter } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import breadcrumbLottery from "./assets/images/breadcrumb/lottery.png"
import lotterySt1 from "./assets/images/lottery/st1.png"
import lotterySt2 from "./assets/images/lottery/st2.png"
import tikitIcon from "./assets/images/tikit-icon.png"
import bgShape from "./assets/images/howitwork/bg-shape.png"
import howItWorkIC1 from "./assets/images/howitwork/ic1.png"
import howItWorkIC2 from "./assets/images/howitwork/ic2.png"
import howItWorkIC3 from "./assets/images/howitwork/ic3.png"
import questionLeft from "./assets/images/question-left.png"
import icon2 from "./assets/images/icon2.png"
import { generateNumbers, saveUserSelectedNumber, updateGameBatchState } from "./Actions/lotteryActions"
import { connect } from 'react-redux' 
import { checkIncludes, thousandSeperator, totalAmount } from "./Actions/helperFunctions"
import { filterSelectedTicketsByBatch } from "./Actions/helperFunctions"


function Lottery(props) {
	const { id } = useParams()
	const batchId = id
	const { image_url, ticket_row, amount } = props.location.state	

	
	const getSelectedNumber = (number) => {	
		props.saveUserSelectedNumber(number, image_url, amount, batchId )
	}
	
	const getBatch = (compId) => {
		const alphabet = props.alphabet	
		const batch = []
		for (let i = 0; i < alphabet.length; i++) {
			if(i + 1 <= compId) {
				batch.push(alphabet[i])
			}        
		}
		   
		return batch
	}

	const FetchDefaultBatch = () => {
		fetch(`https://app.luckydraws.ng/competition-details/${id}/tickets`, {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify({batch: "A"})
		})
		.then(res => res.json())
		.then((jsonRes) => {
			if(jsonRes.status === "success"){
				props.updateGameBatchState(jsonRes.data[0].tickets)	
			}
		})
	}
	useEffect(FetchDefaultBatch, [])


	const getTickets = (batchType) => {
		fetch(`https://app.luckydraws.ng/competition-details/${id}/tickets`, {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify({batch: batchType})
		})
		.then(res => res.json())
		.then((jsonRes) => {
			if(jsonRes.status === "success"){
				props.updateGameBatchState(jsonRes.data[0].tickets)	
			}
		})
	}

	return (
		<Fragment>
			<Header />		
			<section className="breadcrumb-area bc-lottery">
				<img className="bc-img" src={breadcrumbLottery} alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Lottery
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
									<Link to="lottery">Lottery</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="lottery-area">
				<div className="lottery-staticstics">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="single-staticstics">
									<div className="left">
										<div className="icon">
											<img src={lotterySt1} alt="" />
										</div>
									</div>
									<div className="right">
										<h4 className="title">Lottery Reward</h4>
										<div className="count">
											
											<span>₦200,000</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="single-staticstics">
									<div className="left">
										<div className="icon">
											<img src={lotterySt2} alt="" />
										</div>
									</div>
									<div className="right">
										<h4 className="title">Purchased Tickets</h4>
										<div className="count">
											<img src={tikitIcon} alt="" />
											<span>120</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="single-staticstics">
									<div className="left">
										<div className="icon">
											<img src={lotterySt2} alt="" />
										</div>
									</div>
									<div className="right">
										<h4 className="title">My Tickets</h4>
										<div className="count">
											<img src={tikitIcon} alt="" />
											<span>02</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="daily-lottery">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8 col-md-10">
								<div className="section-heading">
									<h5 className="subtitle">
										Try to check out our
									</h5>
									<h2 className="title">
										Daily Lottery
									</h2>
									<p className="text">
										We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="draw-time">
									<h5 className="subtitle">
											Lottery Draw Starts In:
									</h5>
									<div className="draw-counter">
											<div data-countdown="2021/12/15"></div>
									</div>
									<p className="text">
											To meet Today's challenges
									</p>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="lottery-poster">
					<img src={image_url} alt=""/>
				</div>
				<div className="buy-tickets">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="buy-tickets-box">
									<div className="heading">
										<h4 className="title">
											Buy Lottery Tickets
										</h4>
										
									</div>
									<div className="content">
										<div className="top-area">
											<div className="row">
												
												<div className="col-lg-3">
													<div className="info-box">
														<h4 className="title">
																1 TICKET COSTS
														</h4>
														<div className="number">
																<i className="fab fa-naira"></i>
																₦{thousandSeperator(amount.toFixed(2))}
														</div>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="info-box">
														<h4 className="title">
																QUANTITY 
														</h4>
														<div className="number">															
															{!props.userSelectedNumber.length ? 
															"0" :
															 filterSelectedTicketsByBatch(props.userSelectedNumber, batchId).length
															 }
														</div>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="info-box">
														<h4 className="title">
																	BATCH VALUE
														</h4>
														<div className="number">
																<i className="fab fa-naira"></i>
																
																₦{
																	!props.userSelectedNumber.length ? 
																	"0.00" :
																	thousandSeperator(amount.toFixed(2) * filterSelectedTicketsByBatch(props.userSelectedNumber, batchId).length)}
														</div>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="info-box">
														<h4 className="title">
															CART VALUE
														</h4>
														<div className="number">
																<i className="fab fa-naira"></i>
																₦{thousandSeperator(totalAmount(props.userSelectedNumber))}
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="game-numbers">
											<h4 className="title">
												GAME NUMBERS
											</h4>
											<div className="number-box">
												<div className="auto-number">
													<div className="top-content">
														<input type="radio" id="auto-num" name="auto-num" />
														<label htmlFor="auto-num">
																Auto Generated
																<span>
																	Random numbers will be generated automatically
																</span>
														</label>
													</div>
												</div>
												<div className="auto-number">
													<div className="top-content">
														<ul className="game-by-alphabet">
														{!ticket_row > 0 ? null :														
														getBatch(ticket_row).map((batchType, index) =>{
															return <li key={index} onClick={() => getTickets(batchType)}>{batchType}</li>
														})														
														}													
														</ul>
													</div>
												</div>
												<div className="manual-number">
													<div className="top-content">
														<input type="radio" id="manual-num" name="auto-num" />
														<label htmlFor="manual-num">
																Manual Select
																<span>Pick 5 numbers manually</span>
														</label>
													</div>
													<div className="main-content">
														<ul className="number-list">
														{	!props.tickets.length ? "Loading..." :
															props.tickets.map((ticket, index) => {																											
									
															return checkIncludes(props.userSelectedNumber, ticket.value, batchId) ? 
															<li key={index} 
																style={{backgroundColor: "orange"}}
																onClick={() => getSelectedNumber(ticket.value)}>{ticket.value}
															</li>
															:
															<li key={index} 
																onClick={() => getSelectedNumber(ticket.value)}>{ticket.value}
															</li>

														})}		
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="/cart" className="mybtn1">Buy ticket</Link>
											</div>
										</div>
									</div>									
							</div>

							</div>

						</div>

					</div>

				</div>
				<div className="how-it-work">
					<img className="bg-shape" src={bgShape} alt="" />
					<div className="container">
					<div className="row justify-content-center">
							<div className="col-lg-8 col-md-10">
								<div className="section-heading">
									<h5 className="subtitle">
											Want to see how 
									</h5>
									<h2 className="title">
											How it works? 
									</h2>
									<p className="text">
										We update our site regularly with new competitions and more winners are added every day! To locate the most recent winner's information
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4">
								<div className="single-work">
									<img src={howItWorkIC1} alt="" />
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
									<img src={howItWorkIC2} alt="" />
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
									<img src={howItWorkIC3} alt="" />
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

			<section className="question-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<img src={questionLeft} alt="" />
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
											<img src={icon2} alt="" />
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
											<img src={icon2} alt="" />
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
											<img src={icon2} alt="" />
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



const mapStateToProps = (state) => {
	const { lotteryReducer } = state
	// console.log("Tickets", lotteryReducer.tickets)
	console.log("User Selected Number", lotteryReducer.userSelectedNumber)
	
	// console.log("Tracker", lotteryReducer.userSelectedNumberTracker)
	// console.log("Competitions", lotteryReducer.competitions)
	return {	
	  userSelectedNumber: lotteryReducer.userSelectedNumber,
	  userSelectedNumberTracker: lotteryReducer.userSelectedNumberTracker, 
	  competitions: lotteryReducer.competitions,
	  alphabet: lotteryReducer.alphabet,
	  tickets: lotteryReducer.tickets, 
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
		generateNumbers: (values) => dispatch(generateNumbers(values)),
		saveUserSelectedNumber: (number, image_url, amount, batchId) => dispatch(saveUserSelectedNumber(number, image_url, amount, batchId)),
		updateGameBatchState: (tickets) => dispatch(updateGameBatchState(tickets))
	}
  }

  export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Lottery))