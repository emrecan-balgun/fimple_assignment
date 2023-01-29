import React, { useState, useContext } from "react";
import { Modal } from "react-responsive-modal";
import {
  AiFillPrinter,
  AiFillFilePdf,
  AiFillCloseCircle,
} from "react-icons/ai";
import "react-responsive-modal/styles.css";

import "./loanModal.css";
import { ModalContext } from "../../context/ModalContext";
import LoanDetails from "../LoanDetails/LoanDetails";

function LoanModal() {
  const { isOpenModal, dispatch } = useContext(ModalContext);

  const [open] = useState(isOpenModal);

  const onCloseModal = () => {
    dispatch({ type: "SET_OPEN_MODAL", payload: false });
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      showCloseIcon={false}
      classNames={{
        modal: "customModal",
      }}
      center
    >
      <h2 className="modalTitle">Payback Plan</h2>
      <LoanDetails />
      <div className="buttonContainer">
        {/* <button type="button" className="button">
           <span className="buttonText">Print</span>
           <span className="buttonIcon">
             <AiFillPrinter />
           </span>
         </button>
         <button type="button" className="button">
           <span className="buttonText">Save</span>
          <span className="buttonIcon">
             <AiFillFilePdf />
           </span>
       </button> */}
        <button type="button" className="button" onClick={onCloseModal}>
          <span className="buttonText">Close</span>
          <span className="buttonIcon">
            <AiFillCloseCircle />
          </span>
        </button>
      </div>
    </Modal>
  );
}

export default LoanModal;
