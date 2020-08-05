import { 
    GENERATE_LOTTERY_NUMBERS
 } from "../Actions/lotteryActions"

const initialState = {
    lotteryNumbers = []
}   

const lotterReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GENERATE_LOTTERY_NUMBERS) {
        newState.lotteryNumbers = [...newState.lotteryNumbers, action.values]
    }

    return newState
}

export default lotterReducer
