export const OPEN_SIGNIN_MODAL = "OPEN_SIGNIN_MODAL"
export const GENERATE_LOTTERY_NUMBERS = "GENERATE_LOTTERY_NUMBERS"



export const generateNumbers = (value) => {
    return {
        type: GENERATE_LOTTERY_NUMBERS,
        value
    }
}

