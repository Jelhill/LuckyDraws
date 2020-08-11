import { 
    GENERATE_LOTTERY_NUMBERS,
    SAVE_USER_SELECTED_NUMBER,
    UPDATE_COMPETITION_STATE,
    IS_LOADING,
    SET_API_ENDPOINTS
 } from "../Actions/lotteryActions"


const initialState = {
    lotteryNumbers: [],
    userSelectedNumber: [],
    numberAlreadyExist: "",
    findIndex: 0,
    reset: false, 
    colorTracker: 0,
    isLoading: true,
    competitions: [],
    endPoints: [],
    alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
}   

const lotteryReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GENERATE_LOTTERY_NUMBERS) {
        newState.lotteryNumbers = newState.lotteryNumbers.concat(action.values)
    }

    if(action.type === SAVE_USER_SELECTED_NUMBER) {
        const { number}= action

        let numberAlreadyExist = newState.userSelectedNumber.filter(user => user === number)
        let findIndex = newState.userSelectedNumber.findIndex(user => user === number)

        if(numberAlreadyExist && findIndex >= 0) {
            newState.userSelectedNumber = newState.userSelectedNumber.filter(arr => arr !== number)
        }else{
            newState.userSelectedNumber = [...newState.userSelectedNumber, number]
        }
    }

    if(action.type === IS_LOADING) {
        newState.isLoading = action.value
    }

    if(action.type === UPDATE_COMPETITION_STATE){   
        newState.competitions = newState.competitions.concat(action.values)
        console.log(action.values)
    }

    if(action.type === SET_API_ENDPOINTS) {
       console.log("A", action.values)
        let res = []
        action.values.forEach((elem) => {
            let newObj = {name: elem.name, url: elem.schema}
            res.push(newObj)        
        })
        // if(res > 0 ) {
            newState.endPoints = newState.endPoints.concat(res)
        // }
    }

    return newState
}

// const lotteryReducer = (state = initialState, action) => {
//     const newState = {...state}

//     switch(action.type) {
//         case GENERATE_LOTTERY_NUMBERS: {
//             newState.lotteryNumbers = newState.lotteryNumbers.concat(action.values)
//             break
//         }
        
//         case SAVE_USER_SELECTED_NUMBER: {
//             const { number } = action
//             let numberAlreadyExist = newState.userSelectedNumber.filter(user => user === number)
//             let findIndex = newState.userSelectedNumber.findIndex(user => user === number)
//             if(numberAlreadyExist && findIndex >= 0) {
//                 newState.userSelectedNumber = newState.userSelectedNumber.filter(arr => arr !== number)
//             }else{
//                 newState.userSelectedNumber = [...newState.userSelectedNumber, number]
//             }
//             break
//         }
//         case UPDATE_COMPETITION_STATE: {
//             newState.competitions = action.values
//             break
//         }
//         default: {
//             return newState
//         }
//     }
    
// }

export default lotteryReducer
