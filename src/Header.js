import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from "./assets/images/logo.png"
import SignIn from './Modal/SignIn'
import { openSignInModal, openSignUpModal } from "./Actions/modalActions"
import { connect } from "react-redux"
import SignUp from './Modal/SignUp'

function Header(props) {

    const displaySignInModal = () => {
        props.openSignInModal(true)
    }

    const displaySignUpModal = () => {
        props.openSignUpModal(true)
    }
    return (     
            <Fragment>   
            <header className="header">	
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <div className="left-content">
                                    <ul className="left-list">
                                        <li>
                                            <p>
                                                <i className="fas fa-headset"></i> Support
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <i className="fas fa-envelope"></i>	info@luckdyrdaws.ng
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-content">
                                    <ul className="right-list">
                                        <li>
                                            <div className="cart-icon tm-dropdown">
                                                <i className="fas fa-cart-arrow-down"></i>
                                                <span className="cart-count">10</span>
                                                <div className="tm-dropdown-menu">
                                                    <ul className="list">
                                                        <li className="list-item">
                                                                <div className="close">
                                                                        <i className="fas fa-times"></i>
                                                                </div>
                                                            <ul className="number-list">
                                                                <li>24</li>
                                                                <li>25</li>
                                                                <li>26</li>
                                                                <li>27</li>
                                                                <li>28</li>
                                                            </ul>
                                                        </li>
                                                        <li className="list-item">
                                                                <div className="close">
                                                                        <i className="fas fa-times"></i>
                                                                </div>
                                                            <ul className="number-list">
                                                                <li>24</li>
                                                                <li>25</li>
                                                                <li>26</li>
                                                                <li>27</li>
                                                                <li>28</li>
                                                            </ul>
                                                        </li>
                                                        <li className="list-item">
                                                                <div className="close">
                                                                        <i className="fas fa-times"></i>
                                                                </div>
                                                            <ul className="number-list">
                                                                <li>24</li>
                                                                <li>25</li>
                                                                <li>26</li>
                                                                <li>27</li>
                                                                <li>28</li>
                                                            </ul>
                                                        </li>
                                                        <li className="list-item">
                                                            <div className="close">
                                                                    <i className="fas fa-times"></i>
                                                            </div>
                                                            <ul className="number-list">
                                                                <li>24</li>
                                                                <li>25</li>
                                                                <li>26</li>
                                                                <li>27</li>
                                                                <li>28</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <Link to="cart" className="link-btn">Checkout</Link>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <Link to="#" onClick={displaySignInModal} className="sign-in" data-toggle="modal" data-target="#login">
                                                <i className="fas fa-user"></i> Sign In
                                            </Link>
                                            <SignIn />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">                 
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" to="/">
                                    <img src={Logo} alt="" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse fixed-height" id="main_menu">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item ">
                                            <Link className="nav-link " to="/">Home
                                                    <div className="mr-hover-effect"></div></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="competitions">Competitions
                                                    <div className="mr-hover-effect"></div></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="howItWork">How To Play
                                                    <div className="mr-hover-effect"></div></Link>
                                        </li>
                                                                        
                                        <li className="nav-item">
                                                <Link className="nav-link" to="contact">Contact
                                                    <div className="mr-hover-effect"></div>
                                                </Link>
                                        </li>
                                    </ul>
                                    <Link to="#" className="mybtn1" onClick={displaySignUpModal}> Join us</Link>
                                    <SignUp />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>    
        </header>
    </Fragment>

    )
}


const mapStateToProps = (state) => {
	const { modalReducer } = state
	return {
      showSignInModal: modalReducer.showSignInModal,
      showSignUpModal: modalReducer.showSignUpModal,
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
        openSignInModal: (value) =>  dispatch(openSignInModal(value)),
        openSignUpModal: (value) =>  dispatch(openSignUpModal(value))
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Header)