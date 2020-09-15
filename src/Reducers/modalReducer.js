import { 
    OPEN_SIGNIN_MODAL, OPEN_SIGNUP_MODAL,
    UPDATE_STATE_WITH_REGISTRATION,
    SAVE_IMAGE_TO_STATE,
    FUND_WALLET_MODAL,
    UPDATE_STATE_WITH_FUNDING_AMOUNT,
    UPDATE_STATE_WITH_ERROR_MESSAGE,
    UPDATE_STATE_WITH_SUCCESS_MESSAGE,
    UPDATE_STATE_WITH_PAYMENT_DIRECT_SUCCESS_MESSAGE
 } from "../Actions/modalActions"

const initialState = {
    showSignInModal: false,
    showSignUpModal: false,
    formInputs: {}, 
    userImage: null,
    walletModal: false,
    modalShow: false,
    fundingAmount: 0,
    surnameErrorMessage: "",
    firstnameErrorMessage: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
    phoneErrorMessage: "",
    successMessage: "",
    paystackDirectSuccessMessage: ""
}   

const modalReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === OPEN_SIGNIN_MODAL) {
        newState.showSignInModal = action.value
    }

    if(action.type === OPEN_SIGNUP_MODAL) {
        newState.showSignUpModal = action.value
    }

    if(action.type === UPDATE_STATE_WITH_REGISTRATION) {
        Object.assign(newState.formInputs, action.formInputs)
    }

    if(action.type === SAVE_IMAGE_TO_STATE) {
        newState.userImage = action.image
    }

    if(action.type === FUND_WALLET_MODAL) {
        newState.walletModal = action.value
        newState.modalShow = action.value
    }

    if(action.type === UPDATE_STATE_WITH_FUNDING_AMOUNT) {
        newState.fundingAmount = action.value
    }

    if(action.type === UPDATE_STATE_WITH_ERROR_MESSAGE) {
        console.log(">>>", action.values)
        const { name, message } = action.message
        if(name === "last_name") newState.surnameErrorMessage = message
        if(name === "first_name") newState.firstnameErrorMessage = message
        if(name === "email") newState.emailErrorMessage = message
        if(name === "password") newState.passwordErrorMessage = message
        if(name === "phone") newState.phoneErrorMessage = message
    }

    if(action.type === UPDATE_STATE_WITH_SUCCESS_MESSAGE) {
        newState.successMessage = action.message
        
    }

    if(action.type === UPDATE_STATE_WITH_PAYMENT_DIRECT_SUCCESS_MESSAGE) {
        newState.paystackDirectSuccessMessage = action.message
    }

    return newState
}

export default modalReducer
