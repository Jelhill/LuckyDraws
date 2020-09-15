import React from 'react'
import { Modal } from "react-bootstrap"
import { connect } from 'react-redux'
import { fundWalletModal, updateStateWithFundingAmount } from "../Actions/modalActions"

function AddFundToWallet(props) {
  const proceedFundWalletModal = (e) => {
		props.fundWalletModal(false)
	}
  
  const closeFundWalletModal = (e) => {
    props.updateStateWithFundingAmount(0)
    props.fundWalletModal(false)
  }
  
  const getAmountToFund = (e) => {
    props.updateStateWithFundingAmount(e.target.value)
  }  
  
    return (      
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <div className="modal-style">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            FUND WALLET
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Enter Amount to fund</label>
          <input type="number" name="amountToFund" onChange={getAmountToFund}/>
          
        </Modal.Body>
        <div className="modal-footer">
          <button className="proceed-button" onClick={proceedFundWalletModal}>Proceed</button>
          <button className="modal-cancel-button" onClick={closeFundWalletModal}>Cancel</button>
        </div>
        </div>
      </Modal>
    );  
  }
  
const mapStateToProps = (state) => {
	const { modalReducer } = state
	return {	
    walletModal: modalReducer.walletModal,
    fundingAmount: modalReducer.fundingAmount
	}
  }

  const mapDispatchToProps = (dispatch) => {
    return {	
      fundWalletModal: (value) => dispatch(fundWalletModal(value)),
      updateStateWithFundingAmount: (value) => dispatch(updateStateWithFundingAmount(value)),
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddFundToWallet)