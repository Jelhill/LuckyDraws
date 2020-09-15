
export const thousandSeperator = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


export const checkForTokenWithExpiryDate = (key) => {
    const itemStr = localStorage.getItem(key)  
    if (!itemStr) {
      return false
    }        
    const token = itemStr.split(" ")[0]
    const expiryTime = itemStr.split(" ")[1] 
    const id = itemStr.split(" ")[2] 
    const firstname = itemStr.split(" ")[3] 
    const email = itemStr.split(" ")[4] 
  
    const now = new Date()
    if (now.getTime() > expiryTime) {
      localStorage.removeItem(key)
      return {isLoggedIn: false}
    }
    return {isLoggedIn: true, id, firstname, token, email}
}

//SET TOKEN IN LOCAL STORAGE
export const saveTokenWithExpiration = (key, token, tokenDuration, user) => {
    const now = new Date()
    const expiryTime = now.getTime() + tokenDuration
    localStorage.setItem(key, `${token} ${expiryTime} ${user.id} ${user.first_name} ${user.email}`)
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
  export const checkIncludes = (arrayOfTickets, ticketId) => {
  const resultNumber = []

  for (let i = 0; i < arrayOfTickets.length; i++) {
      if(arrayOfTickets.length > 0 ){
          resultNumber.push(arrayOfTickets[i].ticket_id)
      }         
  }
  
  if(resultNumber.includes(ticketId)){
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

// fetch(`https://app.luckydraws.ng/account/cart`,{
//             method: "GET",
//             headers: myHeaders					
//         })
//         .then(response => response.json())
//         .then(jsonResponse => {
//             console.log("Cart", jsonResponse.data)
//             if(jsonResponse.status === "success") {
//                 props.saveUserSelectedNumber(jsonResponse.data)
//             }				
//         })


//Form Validation
export const userInputValidation = (e) => {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  let responseMessage = {name: e.target.name, message: ""}
  
  if (e.target.name === "password" && e.target.value !== "" && e.target.value.length < 6) {
    responseMessage = {name: e.target.name, message: `${e.target.name} must have at least 6 characters`}
  }

  if (e.target.name === "email" && e.target.value !== "" && !pattern.test(e.target.value)) {
    responseMessage = {name: e.target.name, message: `${e.target.name} must be valid`}
  }

  if ((e.target.name === "last_name" || e.target.name === "first_name" ) && e.target.value !== "" && !/^([a-zA-Z]+)$/.test(e.target.value)) {
    responseMessage = {name: e.target.name, message: `${e.target.name} must be letters only`}
  }

  if ((e.target.name === "last_name" || e.target.name === "first_name" ) && e.target.value !== "" && e.target.value.length < 3) {
    responseMessage = {name: e.target.name, message: `${e.target.name} must have at least 3 characters`}
  }

  if ((e.target.name === "phone" && e.target.value !== "") && e.target.value.length < 8) {
    responseMessage = {name: e.target.name, message: `${e.target.name} must exceed 8 characters`}
  }
  
  return responseMessage
}
