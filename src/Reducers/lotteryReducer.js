import { 
    GENERATE_LOTTERY_NUMBERS,
    SAVE_USER_SELECTED_NUMBER,
    UPDATE_COMPETITION_STATE,
    IS_LOADING,
    SET_API_ENDPOINTS,
    UPDATE_GAME_BATCH_STATE,
    REMOVE_ITEM_FROM_CART,
 } from "../Actions/lotteryActions"

const initialState = {
    lotteryNumbers: [],
    userSelectedNumber: [],
    userSelectedNumberTracker: [],
    numberAlreadyExist: "",
    findIndex: 0,
    reset: false, 
    colorTracker: 0,
    isLoading: true,
    competitions: [],
    endPoints: [],
    alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    tickets: []
    
}   

const lotteryReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GENERATE_LOTTERY_NUMBERS) {
        newState.lotteryNumbers = newState.lotteryNumbers.concat(action.values)
    }

    if(action.type === SAVE_USER_SELECTED_NUMBER) {

        const { number, image_url, amount, batchId } = action 

        let numberAlreadyExist = newState.userSelectedNumber.filter(user => user.number === number && user.batchId === batchId)
        let findIndex = newState.userSelectedNumber.findIndex(user => user.number === number && user.batchId === batchId)
        if(numberAlreadyExist && findIndex >= 0) {
            newState.userSelectedNumber = newState.userSelectedNumber.filter(item => {            
                if (item.number === number && item.batchId === batchId)
                    return false;
                return true;
            })
        }else{
            newState.userSelectedNumber = [...newState.userSelectedNumber, {number, image_url, amount, batchId}]
        }
    }

    if(action.type === IS_LOADING) {
        newState.isLoading = action.value
    }

    if(action.type === UPDATE_COMPETITION_STATE){   
        newState.competitions = newState.competitions.concat(action.values)
    }

    if(action.type === SET_API_ENDPOINTS) {
       console.log("A", action.values)
        let res = []
        action.values.forEach((elem) => {
            let newObj = {name: elem.name, url: elem.schema}
            res.push(newObj)        
        })
        newState.endPoints = newState.endPoints.concat(res)        
    }

    if(action.type === UPDATE_GAME_BATCH_STATE) {
        newState.tickets = action.tickets
    }

    if(action.type === REMOVE_ITEM_FROM_CART) {
        const { ticket, batchId } = action
        newState.userSelectedNumber = newState.userSelectedNumber.filter(item => {
            if (item.number === ticket && item.batchId === batchId){
                return false;
            }
            return true;
        })
    }
    return newState
}

export default lotteryReducer
