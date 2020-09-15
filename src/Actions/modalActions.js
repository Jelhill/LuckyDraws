export const OPEN_SIGNIN_MODAL = "OPEN_SIGNIN_MODAL"
export const OPEN_SIGNUP_MODAL = "OPEN_SIGNUP_MODAL"
export const UPDATE_STATE_WITH_REGISTRATION = "UPDATE_STATE_WITH_REGISTRATION"
export const SAVE_IMAGE_TO_STATE = "SAVE_IMAGE_TO_STATE"
export const FUND_WALLET_MODAL = "FUND_WALLET_MODAL"
export const UPDATE_STATE_WITH_FUNDING_AMOUNT = "UPDATE_STATE_WITH_FUNDING_AMOUNT"
export const UPDATE_STATE_WITH_ERROR_MESSAGE = "UPDATE_STATE_WITH_ERROR_MESSAGE"
export const UPDATE_STATE_WITH_SUCCESS_MESSAGE = "UPDATE_STATE_WITH_SUCCESS_MESSAGE"
export const UPDATE_STATE_WITH_PAYMENT_DIRECT_SUCCESS_MESSAGE = "UPDATE_STATE_WITH_PAYMENT_DIRECT_SUCCESS_MESSAGE"



export const openSignInModal = (value) => {
    return {
        type: OPEN_SIGNIN_MODAL,
        value
    }
}

export const openSignUpModal = (value) => {
    return {
        type: OPEN_SIGNUP_MODAL,
        value
    }
}

export const updateStateWithRegistration = (formInputs) => {
    return{
        type: UPDATE_STATE_WITH_REGISTRATION,
        formInputs
    }
}

export const saveImageInState = (image) => {
    return {
        type: SAVE_IMAGE_TO_STATE,
        image
    }
}


export const fundWalletModal = (value) => {
    return {
        type: FUND_WALLET_MODAL,
        value
    }
}

export const updateStateWithFundingAmount = (value) => {
    return {
        type: UPDATE_STATE_WITH_FUNDING_AMOUNT,
        value
    }
}

export const showValidationError = (message) => {
    return{
        type: UPDATE_STATE_WITH_ERROR_MESSAGE,
        message
    }
}

export const showSuccessMessage = (message) => {
    return{
        type: UPDATE_STATE_WITH_SUCCESS_MESSAGE,
        message
    }
}

export const showPaystackDirectSuccessMessage = (message) => {
    return{
        type: UPDATE_STATE_WITH_PAYMENT_DIRECT_SUCCESS_MESSAGE,
        message
    }
}