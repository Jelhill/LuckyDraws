import { 
    GENERATE_LOTTERY_NUMBERS
 } from "../Actions/lotteryActions"

const initialState = {
    lotterNumbers = []
}   

const lotterReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GENERATE_LOTTERY_NUMBERS) {
        newState.showSignInModal = action.value
    }

    return newState
}

export default lotterReducer
