import React, {Fragment} from 'react';
import { Route , Switch } from "react-router-dom"
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Account from './Account';
import Affiliate from './Affiliate';
import Awards from './Awards';
import Bonus from './Bonus';
import Lottery from './Lottery';
import Winners from './Winners';
import Wallet from './Wallet';
import Tournaments from './Tournaments';
import FAQ from './FAQ';
import Cart from './Cart';
import TermsAndCondition from './TermsAndCondition';
import TermsAndConditionDetails from "./TermsAndConditionDetails"
import Competitions from './Competitions';
import HowItWork from './HowItWork';
import SignIn from './Modal/SignIn';
import Error404 from './404';
// import Index2 from "./Index2"


function App() {
 
  return (
    <Fragment>    
      <Switch>
      <Route exact path="/" component={Landing} /> 
      {/* <Route exact path="/" component={Index2} />  */}
        <Route exact path="/account" component={Account} /> 
        <Route exact path="/contact" component={Contact} /> 
         <Route exact path="/about" component={About} /> 
         <Route exact path="/affiliate" component={Affiliate} /> 
         <Route exact path="/awards" component={Awards} /> 
         <Route exact path="/bonus" component={Bonus} /> 
         <Route exact path="/cart" component={Cart} /> 
         <Route exact path="/termsAndCondition" component={TermsAndCondition} /> 
         <Route exact path="/termsAndConditionDetails" component={TermsAndConditionDetails} />
         <Route exact path="/competitions" component={Competitions} /> 
         <Route exact path="/howItWork" component={HowItWork} /> 
         <Route exact path="/signIn" component={SignIn} /> 
         <Route exact path="/lottery" component={Lottery} /> 
         <Route exact path="/winners" component={Winners} /> 
         <Route exact path="/wallet" component={Wallet} /> 
         <Route exact path="/tournaments" component={Tournaments} /> 
         <Route exact path="/faq" component={FAQ} /> 
         <Route exact path="/404" component={Error404} /> 
      </Switch>
    </Fragment> 
  );
}

export default App;
