import { UPDATE_STATE_FOR_HEADER, USER_IS_LOGGED_IN } from "../Actions/userActions"

const initialState = {
    firstname: "",
    userId: 0,
    isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === UPDATE_STATE_FOR_HEADER) {
        console.log(action)
        newState.isLoggedIn = action.values.isLoggedIn
        newState.firstname = action.values.firstname
        newState.id = action.values.userId
    }

    if(action.type === USER_IS_LOGGED_IN) {
        newState.isLoggedIn = action.value
    }

    return newState
}



export default userReducer
