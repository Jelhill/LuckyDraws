export const thousandSeperator = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const checkForTokenWithExpiryDate = (key) => {
    const itemStr = localStorage.getItem(key)  
    if (!itemStr) {
      return false
    }        
    const expiryTime = itemStr.split(" ")[1] 
    const id = itemStr.split(" ")[2] 
    const firstname = itemStr.split(" ")[3] 

    const now = new Date()
    if (now.getTime() > expiryTime) {
      localStorage.removeItem(key)
      return {isLoggedIn: false}
    }
    return {isLoggedIn: true, id: id, firstname: firstname}
}

//SET TOKEN IN LOCAL STORAGE
export const saveTokenWithExpiration = (key, token, tokenDuration, user) => {
    console.log("payload", user)
    const now = new Date()
    const expiryTime = now.getTime() + tokenDuration
    localStorage.setItem(key, `${token} ${expiryTime} ${user.id} ${user.first_name}`)
}

//TOTAL AMOUNT 
export const totalAmount = (selectedGames) => {
  if(selectedGames.length ===  0) {
    return "0.00"
  }
  const totalAmount = selectedGames.reduce((accumulator,  eachGame) => {
     return parseInt(eachGame.amount) + accumulator
  }, 0)  
  return totalAmount

}

// INCLUDE OBJECT
  export const checkIncludes = (arrayOfObject, value, batchId) => {
  const valueCompare = `${value}${batchId}`
  const resultNumber = []

  for (let i = 0; i < arrayOfObject.length; i++) {
      if(arrayOfObject.length > 0 ){
          resultNumber.push(`${arrayOfObject[i].number}${arrayOfObject[i].batchId}`)
      }         
  }
  if(resultNumber.includes(valueCompare)){
      return true
  }else{
      return false
  }
}

// REMOVE DOUBLE ENTRY
export const removeDoubleEntry = (selectedNumbers, number, batchId) => {
  selectedNumbers.filter(item => {
    if (item.number === number && item.batchId === batchId) return false;
    return true;
  })
}

// Filter user selected Item based on selected batch

export const filterSelectedTicketsByBatch = (userSelectedNumber, batchId) => {
  if(userSelectedNumber.length === 0) return 0
  return userSelectedNumber.filter(item => item.batchId === batchId)
}