import React, { Fragment, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"
import Logo from "./assets/images/logo.png"
import SignIn from './Modal/SignIn'
import { openSignInModal, openSignUpModal } from "./Actions/modalActions"
import { updateStateForHeader, userIsLoggedIn } from "./Actions/userActions"
import { saveUserSelectedNumber } from "./Actions/lotteryActions"
import { checkForTokenWithExpiryDate } from "./Actions/helperFunctions"
import { updateStateWIthWalletInfo } from "./Actions/userActions"
import { thousandSeperator } from "./Actions/helperFunctions"
import { connect } from "react-redux"
import SignUp from './Modal/SignUp'

function Header(props) {
    const userObject = checkForTokenWithExpiryDate("access-token")
    const myHeaders = new Headers();

    const getWalletBalance = () => {
		myHeaders.append("Authorization", `Bearer ${userObject.token}`);
		fetch("https://app.luckydraws.ng/account/wallet", {
			method: "GET",
			headers: myHeaders
		})
		.then(response => response.json())
		.then(jsonResponse => {
            console.log("i ran wallet")
			if(jsonResponse.status === "success"){
				props.updateStateWIthWalletInfo(jsonResponse.data[0])
			}
		})
		.catch(err => console.log(err))	
    }

    const getCart = () => {
		myHeaders.append("Authorization", `Bearer ${userObject.token}`);
        props.updateStateForHeader(userObject)
        fetch("https://app.luckydraws.ng/account/cart",{
            method: "GET",
            headers: myHeaders					
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log("i ran cart")
            if(jsonResponse.status === "success") {
                props.saveUserSelectedNumber(jsonResponse.data)
            }				
        })
        .catch(err => console.log(err))
    }


    useEffect(getCart, [])
    useEffect(getWalletBalance)

    const displaySignInModal = () => {
        props.openSignInModal(true)
    }

    const displaySignUpModal = () => {
        props.openSignUpModal(true)
    }

    const signOut = () => {
        localStorage.removeItem("access-token")
        props.userIsLoggedIn(false)
        props.history.push("/competitions")
        
    }
    
    return (     
            <Fragment>   
            <header className="header">	

         { !props.isLoggedIn ?
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
                                                <i className="fas fa-envelope"></i>	info@luckydraws.ng
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-content">
                           
                                <ul className="right-list">                                    
                                        <li>
                                            <div className="cart-icon tm-dropdown">
                                                <Link to={"/cart"}><i className="fas fa-cart-arrow-down"></i></Link>
                                                <span className="cart-count">{props.cart.length}</span>
                                                <div className="tm-dropdown-menu">
                                                    <ul className="list">
                                                        <li className="list-item">
                                                            <div className="close">
                                                                    <i className="fas fa-times"></i>
                                                            </div>
                                                            <ul className="number-list">
                                                            {   !props.cart.length ? null :
                                                                props.cart.map((ticket, index) => {
                                                                return <li key={index}>{ticket.number}</li>
                                                            })}                                                          
                                                
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <Link to="cart" className="link-btn">Checkout</Link>
                                                </div>
                                            </div>
                                        </li>
                                    
                                        <li>
                                            <span onClick={displaySignInModal} className="sign-in" data-toggle="modal" data-target="#login">
                                                <i className="fas fa-user"></i> Sign In
                                            </span>
                                            <SignIn />
                                        </li>
                                 </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        :
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
                                                <i className="fas fa-envelope"></i>	info@luckydraws.ng
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-content">                            
                                 <ul className="right-list">                                    
                                        <li>                                             
                                            <div className="cart-icon tm-dropdown">
                                            <span className="header-balance">Wallet  <span className="balance-bold">NGN {thousandSeperator(props.walletBalance.toFixed(2))}</span></span>
                                                <Link to={"/cart"}><i className="fas fa-cart-arrow-down"></i></Link>
                                                <span className="cart-count">{props.cart.length}</span>
                                                <div className="tm-dropdown-menu">
                                                    <ul className="list">
                                                        <li className="list-item">
                                                            <div className="close">
                                                                    <i className="fas fa-times"></i>
                                                            </div>
                                                            <ul className="number-list">
                                                            {   !props.cart.length ? null :
                                                                props.cart.map((ticket, index) => {
                                                                return <li key={index}>{ticket.number}</li>
                                                            })}                                                        
                                                
                                                            </ul>
                                                        </li>                                                   
                                                        
                                                    </ul>
                                                    
                                                    <Link to="cart" className="link-btn">Checkout</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart-icon tm-dropdown">
                                                <span>{props.firstname}</span>
                                                <i className="fa fa-caret-down down-caret"></i>
                                                <div className="tm-dropdown-menu">
                                                    <ul className="list">
                                                        <li className="list-item">
                                                            <ul className=".signInList">
                                                                <Link to="/profile"><li><i className="fa fa-user"></i>My Profile</li></Link>
                                                                <Link to="/wallet"><li><i className="fa fa-wallet"></i>My Wallet</li></Link>
                                                                <div className="logoutDiv"><li onClick={signOut} className="logout"><i className="fa fa-sign-out-alt"></i>Sign Out</li></div>                                                                                                          
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>                    
                                </ul>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         }

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
                                            <Link className="nav-link" to="/competitions">Competitions
                                                    <div className="mr-hover-effect"></div></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/howItWork">How To Play
                                                    <div className="mr-hover-effect"></div></Link>
                                        </li>
                                                                        
                                        <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact
                                                    <div className="mr-hover-effect"></div>
                                                </Link>
                                        </li>
                                    </ul>
                                    {props.isLoggedIn ? null :
                                    <span className="mybtn1" onClick={displaySignUpModal}> Join us</span>
                                    }
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
    const { lotteryReducer } = state
    const { userReducer } = state
	return {
      showSignInModal: modalReducer.showSignInModal,
      showSignUpModal: modalReducer.showSignUpModal,
      userSelectedNumber: lotteryReducer.userSelectedNumber,
      isLoggedIn: userReducer.isLoggedIn,
      firstname: userReducer.firstname,
      userId: userReducer.userId,
      cart: lotteryReducer.cart,
      walletBalance: userReducer.userWallet

	}
}
  
  const mapDispatchToProps = (dispatch) => {
	return {
        openSignInModal: (value) =>  dispatch(openSignInModal(value)),
        openSignUpModal: (value) =>  dispatch(openSignUpModal(value)),
        updateStateForHeader: (values) =>  dispatch(updateStateForHeader(values)),
        userIsLoggedIn: (value) => dispatch(userIsLoggedIn(value)),
        saveUserSelectedNumber: (value) => dispatch(saveUserSelectedNumber(value)),
        updateStateWIthWalletInfo: (value) => dispatch(updateStateWIthWalletInfo(value)),

	}
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))