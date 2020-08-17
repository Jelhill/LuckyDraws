import { 
    OPEN_SIGNIN_MODAL, OPEN_SIGNUP_MODAL,
    UPDATE_STATE_WITH_REGISTRATION
 } from "../Actions/modalActions"

const initialState = {
    showSignInModal: false,
    showSignUpModal: false,
    formInputs: {}
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

    return newState
}

export default modalReducer
