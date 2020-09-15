import { 
    UPDATE_STATE_FOR_HEADER, 
    USER_IS_LOGGED_IN, 
    UPDATE_STATE_WITH_WALLET_INFO,
    UPDATE_STATE_WITH_BILLINGS_DETAILS, 
    
 } from "../Actions/userActions"

const initialState = {
    firstname: "",
    userId: 0,
    isLoggedIn: false,
    userWallet: 0,
    email: "",
    token: "",
    billingDetails: []
}

const userReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === UPDATE_STATE_FOR_HEADER) {
        newState.isLoggedIn = action.values.isLoggedIn
        newState.firstname = action.values.firstname
        newState.id = action.values.id
        newState.email = action.values.email
        newState.token = action.values.token
    }

    if(action.type === USER_IS_LOGGED_IN) {
        newState.isLoggedIn = action.value
    }

    if(action.type === UPDATE_STATE_WITH_WALLET_INFO) {
        newState.userWallet = action.value.available_balance
    }

    if(action.type === UPDATE_STATE_WITH_BILLINGS_DETAILS) {
        newState.billingDetails = action.data
    }

    return newState
}



export default userReducer
