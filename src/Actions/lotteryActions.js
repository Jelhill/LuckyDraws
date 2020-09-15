export const OPEN_SIGNIN_MODAL = "OPEN_SIGNIN_MODAL"
export const GENERATE_LOTTERY_NUMBERS = "GENERATE_LOTTERY_NUMBERS"
export const SAVE_USER_SELECTED_NUMBER = "SAVE_USER_SELECTED_NUMBER"
export const SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR"
export const UPDATE_COMPETITION_STATE = "UPDATE_COMPETITION_STATE"
export const IS_LOADING = "IS_LOADING"
export const SET_API_ENDPOINTS = "SET_API_ENDPOINTS"
export const UPDATE_GAME_BATCH_STATE = "UPDATE_GAME_BATCH_STATE"
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"

export const generateNumbers = (values) => {
    return {
        type: GENERATE_LOTTERY_NUMBERS,
        values
    }
}

export const saveUserSelectedNumber = (data) => {
    return {
        type: SAVE_USER_SELECTED_NUMBER,
        data
    }
}
// export const saveUserSelectedNumber = (number, image_url, amount, batchId) => {
//     return {
//         type: SAVE_USER_SELECTED_NUMBER,
//         number,
//         image_url,
//         amount,
//         batchId
//     }
// }

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

export const updateGameBatchState = (tickets) => {
    return {
        type: UPDATE_GAME_BATCH_STATE,
        tickets
    }
}

export const removeItemFromCart = (ticket, batchId) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        ticket,
        batchId
    }
}

