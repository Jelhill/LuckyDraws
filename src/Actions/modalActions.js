export const OPEN_SIGNIN_MODAL = "OPEN_SIGNIN_MODAL"
export const OPEN_SIGNUP_MODAL = "OPEN_SIGNUP_MODAL"



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