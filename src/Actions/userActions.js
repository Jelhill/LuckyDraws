export const UPDATE_STATE_FOR_HEADER ="UPDATE_STATE_FOR_HEADER"
export const USER_IS_LOGGED_IN ="USER_IS_LOGGED_IN"
export const UPDATE_STATE_WITH_WALLET_INFO = "UPDATE_STATE_WITH_WALLET_INFO"
export const UPDATE_STATE_WITH_BILLINGS_DETAILS = "UPDATE_STATE_WITH_BILLINGS_DETAILS"

export const updateStateForHeader = (values) => {
    return {
        type: UPDATE_STATE_FOR_HEADER,
        values
    }
}

export const userIsLoggedIn = (value) => {
    return{
        type: USER_IS_LOGGED_IN,
        value
    }
}

export const updateStateWIthWalletInfo = (value) => {
    return{
        type: UPDATE_STATE_WITH_WALLET_INFO,
        value
    }
}

export const updateStateWithBillingsDetails = (data) => {
    return{
        type: UPDATE_STATE_WITH_BILLINGS_DETAILS,
        data
    }
}

