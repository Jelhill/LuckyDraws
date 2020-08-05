import { 
    GENERATE_LOTTERY_NUMBERS
 } from "../Actions/lotteryActions"

const initialState = {
    lotteryNumbers: []
}   

const lotteryReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GENERATE_LOTTERY_NUMBERS) {
        console.log(action.values)
        newState.lotteryNumbers = newState.lotteryNumbers.concat(action.values)
    }

    return newState
}

export default lotteryReducer
