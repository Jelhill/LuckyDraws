// import React, { Component, Fragment } from 'react'
// import { isLoading, setAPIEndpoints } from './Actions/lotteryActions'
// import { connect } from 'react-redux'


// class APIEndpoints extends Component {

//     componentDidMount = () => {
//         // fetch("https://www.postman.com/collections/73279c3989bfa6721306")
//             // fetch("https://app.luckydraws.ng")
//         // fetch("https://app.luckydraws.ng/competition-details/8c41b1ecdf4cf5cd36878ce4/tickets", {
//         //     method: "GET",
//         //     headers: {"Content-type": "applications/json"}
//         // })
//         .then(res => res.json())
//         .then((jsonRes) => {
//             console.log(jsonRes)
//             // if(jsonRes.item.length > 0) {
//             //     // this.props.setAPIEndpoints(jsonRes.item)
//             // }
//         })
//     }
//     render() {
//         // console.log("I load First")
//         // const endPoint = this.props.endPoints
//         return (
//             <div>
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <td>Name</td>
//                             <td>Endpoint URL</td>
//                         </tr>
//                     </thead>

//                     <tbody>
                        
//                         {/* {
//                             this.props.endPoints.map((elem, index) => {
//                                 const {request } = elem
//                             return (<tr key={index}>
//                                 <td>{elem.name}</td>
//                                 <td>{elem.url}</td>
                                
//                             </tr>)
//                             })
//                         } */}
//                         {/* {   
                
//                             endpointData.map((data, index) => {  
//                            return <tr key={index}>
//                                 <td>{data.name}</td>
//                                 {
//                                     typeof(data.request) === "object" ? 
//                                     Object.values(data.request).map((req, i) => {
//                                         return <td>{req[3]}</td>
//                                         })
//                                     : null }                      
//                             </tr>                    
//                         })} */}

//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     console.log(">>>>", state.lotteryReducer.endPoints)
//     return {
//         endPoints: state.lotteryReducer.endPoints   
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setAPIEndpoints: (values) => dispatch(setAPIEndpoints(values))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(APIEndpoints)