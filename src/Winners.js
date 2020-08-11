import React, { Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom"

export default function Winners() {
	return (
		<Fragment>
	


	<Header />
	<section className="breadcrumb-area bc-awards">
		<img className="bc-img" src="assets/images/breadcrumb/awards.png" alt="" />
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						Winners
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
							<Link to="Winners">Winners</Link>
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
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic1.png" alt="" />
							<h4 className="title">
								Luck power
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic2.png" alt="" />
							<h4 className="title">
								Zero Hunter
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic3.png" alt="" />
							<h4 className="title">
								BTC Top				
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic4.png" alt="" />
							<h4 className="title">
								BTC King
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic5.png" alt="" />
							<h4 className="title">
								Money Bag
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-awards">
						<div className="content">
							<img src="assets/images/awards/ic6.png" alt="" />
							<h4 className="title">
								BTC Top
							</h4>
							<p>
								<i className="fas fa-users"></i>342
							</p>
							<Link to="#" className="mybtn2">Read MOre</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="activities">
			<img className="shape shape1" src="assets/images/people/shape1.png" alt="" />
			<img className="shape shape2" src="assets/images/people/shape2.png" alt="" />
			<img className="shape shape3" src="assets/images/people/shape3.png" alt="" />
		   <div className="container">
			     <div className="row">
				   <div className="col-lg-12">
					    <div className="tab-content" id="pills-tabContent">
						   <div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
							   <div className="responsive-table">
								   <table className="table">
								   <thead>
									   <tr>
									   	<th scope="col">DATE</th>
									   <th scope="col">USER</th>
									   <th scope="col">BET ID</th>
									   <th scope="col">BET AMOUNT</th>
									   <th scope="col">CHANCE</th>
									    <th scope="col">REWARDS</th>
									   </tr>
								   </thead>
								   <tbody>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											  
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										 
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										  
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										  
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										 
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										  
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   
									   </tr>
									   <tr>
									   		<td>
									   			12/05/2020
									   		</td>
										   <td>
											   
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   
									   </tr>
								   </tbody>
								   </table>
							   </div>
						   </div>
						   
						  
					   </div>
				   </div>
			   </div>
		   </div>
	
		   <div className="funfact">
			   <div className="container">
				   <div className="row">
					   <div className="col-lg-4">
						   <div className="single-fun">
							   <img src="assets/images/funfact/icon1.png" alt="" />
							   <div className="count-area">
								   <div className="count">93K</div>
							   </div>
							   <p>
								Players
							   </p>
						   </div>
					   </div>
					   <div className="col-lg-4">
						   <div className="single-fun">
							   <img src="assets/images/funfact/icon2.png" alt="" />
							   <div className="count-area">
								   <div className="count">99+</div>
							   </div>
							   <p>
									   Games
							   </p>
						   </div>
					   </div>
					   <div className="col-lg-4">
						   <div className="single-fun">
							   <img src="assets/images/funfact/icon3.png" alt="" />
							   <div className="count-area">
								   <div className="count">70+</div>
							   </div>
							   <p>
									   Winners
							   </p>
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
