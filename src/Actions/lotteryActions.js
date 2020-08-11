export const OPEN_SIGNIN_MODAL = "OPEN_SIGNIN_MODAL"
export const GENERATE_LOTTERY_NUMBERS = "GENERATE_LOTTERY_NUMBERS"
export const SAVE_USER_SELECTED_NUMBER = "SAVE_USER_SELECTED_NUMBER"
export const SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR"
export const UPDATE_COMPETITION_STATE = "UPDATE_COMPETITION_STATE"
export const IS_LOADING = "IS_LOADING"
export const SET_API_ENDPOINTS = "SET_API_ENDPOINTS"

export const generateNumbers = (values) => {
    return {
        type: GENERATE_LOTTERY_NUMBERS,
        values
    }
}

export const saveUserSeletedNumber = (number) => {
    return {
        type: SAVE_USER_SELECTED_NUMBER,
        number,
        colorTracker: 1
    }
}

export const updateCompetitionState = (values) => {
    return {
        type: UPDATE_COMPETITION_STATE,
        values
    }
}

export const isLoading = (value) => {
    return {
        type: IS_LOADING,
        value
    }
}

export const setAPIEndpoints = (values) => {

        return {
            type: SET_API_ENDPOINTS,
            values
        }
    
}