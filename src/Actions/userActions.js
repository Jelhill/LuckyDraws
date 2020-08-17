export const UPDATE_STATE_FOR_HEADER ="UPDATE_STATE_FOR_HEADER"
export const USER_IS_LOGGED_IN ="USER_IS_LOGGED_IN"

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