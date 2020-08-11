import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function FAQ() {
	return (
		<Fragment>
			<Header />

		<section className="breadcrumb-area bc-faq">
			<img className="bc-img" src="assets/images/breadcrumb/faq.png" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h4 className="title">
							Faq
						</h4>
						<ul className="breadcrumb-list">
							<li>
								<Link to="index.html">
										<i className="fas fa-home"></i>
										Home
								</Link>
							</li>
							<li>
								<span><i className="fas fa-chevron-right"></i> </span>
							</li>
							<li>
								<Link to="faq.html">Faq</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<section className="faq-section">
			<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle">
										Got any Question 
								</h5>
								<h2 className="title">
										We've answers
								</h2>
								<p className="text">
										It’s up to the competition in features, with some unique 
										advantages.All the competitions.Here are some of them.
								</p>
							</div>
						</div>
					</div>
				<div className="row">
				<div className="col-lg-12">
					<div className="faq-wrapper">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item">
						<Link className="nav-link" id="general-tab" data-toggle="tab" to="#general" role="tab" aria-controls="general" aria-selected="false">All</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" id="general-tab" data-toggle="tab" to="#general" role="tab" aria-controls="general" aria-selected="true">general</Link>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">		
						<div className="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">
						<div className="accordion sorteo-accordion" id="accordionExample6">
							<div className="card">
							<div className="card-header" id="heading16">
								<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapse16"><i className="fa fa-question"></i>What if the competitions slot is not fully booked when timer runs out?</button>
								</h2>
							</div>
							<div id="collapse16" className="collapse show" aria-labelledby="heading16" data-parent="#accordionExample6">
								<div className="card-body">
								<p>If the competition is not full, the timer will add some time in order for all the tickets to sell on the competition. This will happen a maximum of 4 times then if the competition is still not sold out a cash alternative will be awarded instead and only the people that have entered will go into the live draw.</p>
								</div>
							</div>
							</div>
							<div className="card">
							<div className="card-header" id="heading16">
								<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapse16"><i className="fa fa-question"></i>How many entrants is a player allowed to have in one draw?</button>
								</h2>
							</div>
							<div id="collapse16" className="collapse show" aria-labelledby="heading16" data-parent="#accordionExample6">
								<div className="card-body">
								<p>Each player can enter any one competition a maximum of 5 times.</p>
								</div>
							</div>
							</div>
							<div className="card">
							<div className="card-header" id="heading17">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapse17"><i className="fa fa-question"></i> How long does it take before winners get their prize?</button>
								</h2>
							</div>
							<div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordionExample6">
								<div className="card-body">
								<p>Your prize will be hand delivered from our team member within 5 days of the winner being announced.</p>
								</div>
							</div>
							</div>
						</div>
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
