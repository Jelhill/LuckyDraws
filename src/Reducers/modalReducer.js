import { 
    OPEN_SIGNIN_MODAL, OPEN_SIGNUP_MODAL
 } from "../Actions/modalActions"

const initialState = {
    showSignInModal: false,
    showSignUpModal: false,
}   

const modalReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === OPEN_SIGNIN_MODAL) {
        newState.showSignInModal = action.value
    }

    if(action.type === OPEN_SIGNUP_MODAL) {
        newState.showSignUpModal = action.value
    }



    return newState
}

export default modalReducer
