import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"
import breadcrumbPlay from "./assets/images/breadcrumb/play.png"
import ic6 from "./assets/images/play/ic6.png"
import ic66 from "./assets/images/play/ic66.png"
import ic1 from "./assets/images/play/ic1.png"
import ic11 from "./assets/images/play/ic11.png"
import ic2 from "./assets/images/play/ic2.png"
import ic22 from "./assets/images/play/ic22.png"
import icon1 from "./assets/images/game/icon1.png"
import icon2 from "./assets/images/game/icon2.png"
import icon3 from "./assets/images/game/icon3.png"
import iconImage2 from "./assets/images/icon2.png"
// import sonycamera from "./assets/images/prize/sonycamera.png"
// import hometheatre from "./assets/images/prize/hometheatre.png"
// import beasto from "./assets/images/prize/beasto.png"
// import samsungphone from "./assets/images/prize/samsungphone.png"
// import racingcar from "./assets/images/prize/racingcar.png"
// import fridge from "./assets/images/prize/fridge.png"
import { updateCompetitionState, isLoading } from "./Actions/lotteryActions"
import { connect } from 'react-redux'


class Competitions extends Component {
	componentDidMount = () => {		
		fetch(`https://app.luckydraws.ng/`, {
		method: "GET"})
		.then(res => res.json())
		.then(jsonRes => {
			console.log(jsonRes)
			if(jsonRes.status === "success" & !this.props.competitions.length) {
				this.props.updateCompetitionState(jsonRes.competitions.data)
			}
		})
		.catch((err) => console.log(err))
    }
	render(){
	return (
		<Fragment>
			<Header />	
			<section className="breadcrumb-area play">
				<img className="bc-img" src={breadcrumbPlay} alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4 className="title">
								Competitions
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
									<Link to="competitions">Competitions</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			
			<section className="play-games">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="gaming-activities">
									<div className="gaming-activities-inner">
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="all-games">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 text-center">
									<ul className="nav" role="tablist">
									<li className="nav-item">
										<Link className="nav-link active" id="pills-tab1-tab" data-toggle="pill" to="#pills-tab1" role="tab" aria-controls="pills-tab1" aria-selected="true">
											<div className="icon">
												<img className="one" src={ic6} alt="" />
												<img className="two" src={ic66} alt="" />
											</div>
											<span>All Games</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" id="pills-tab2-tab" data-toggle="pill" to="#pills-tab2" role="tab" aria-controls="pills-tab2" aria-selected="false">
										<div className="icon">
											<img className="one" src={ic1} alt="" />
											<img className="two" src={ic11} alt="" />
										</div>
										<span>Active</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" id="pills-tab3-tab" data-toggle="pill" to="#pills-tab3" role="tab" aria-controls="pills-tab3" aria-selected="false">
										<div className="icon">
											<img className="one" src={ic2} alt="" />
											<img className="two" src={ic22} alt="" />
										</div>
										<span>Archived</span>
										</Link>
									</li>
									</ul>
									<div className="tab-content" id="pills-tabContent">
									<div className="tab-pane fade show active" id="pills-tab1" role="tabpanel" aria-labelledby="pills-tab1-tab">
										<div className="row">									
										{
											this.props.competitions.map((competition, index) => {
												return <div key={index} className="col-lg-4 col-md-6">
													<div className="single-game">										
														<img src={competition.image_url} alt="" />
														<Link to={{pathname: `/competition-details/${competition.comp_id}`, state: competition}} className="mybtn2">PLay NoW !</Link>
													</div>
												</div>
											})
										}																				
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab2" role="tabpanel" aria-labelledby="pills-tab2-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													{/* <img src={icon1} alt="" /> */}
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													{/* <img src={icon2} alt="" /> */}
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													{/* <img src={icon3} alt="" /> */}
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													{/* <img src={icon1} alt="" /> */}
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													{/* <img src={icon1} alt="" /> */}
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													{/* <img src={icon3} alt="" /> */}
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab3" role="tabpanel" aria-labelledby="pills-tab3-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab4" role="tabpanel" aria-labelledby="pills-tab4-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab5" role="tabpanel" aria-labelledby="pills-tab5-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-tab6" role="tabpanel" aria-labelledby="pills-tab6-tab">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon1} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon2} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-game">
													<img src={icon3} alt="" />
													<Link to="#" className="mybtn2">PLay NoW !</Link>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12 text-center">
												<Link to="#" className="mybtn1">View More</Link>
											</div>
										</div>
									</div>
									</div>
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
													<img src={iconImage2} alt="" />
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
													<img src={iconImage2} alt="" />
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
													<img src={iconImage2} alt="" />
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
}

const mapStateToProps = (state) => {
	const { lotteryReducer } = state	
	console.log(lotteryReducer.competitions)
	return{
		competitions: lotteryReducer.competitions,
		loading: lotteryReducer.isLoading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateCompetitionState: (values) => dispatch(updateCompetitionState(values)),
		isLoading: (value) => dispatch(isLoading(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitions)