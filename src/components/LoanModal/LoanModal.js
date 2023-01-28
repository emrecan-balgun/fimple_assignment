import { buildQueries } from "@testing-library/react";
import React, { useContext } from "react";
import Modal from "react-modal";
import {
  AiFillPrinter,
  AiFillFilePdf,
  AiFillCloseCircle,
} from "react-icons/ai";

import { ModalContext } from "../../context/ModalContext";
import LoanDetails from "../LoanDetails/LoanDetails";
import Table from "../Table/Table";
import "./loanModal.css";

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'black',
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
  },
};

Modal.setAppElement("#root");

function LoanModal() {
  const { isOpenModal, dispatch } = useContext(ModalContext);

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#36454F";
  }

  function closeModal() {
    dispatch({ type: "SET_OPEN_MODAL", payload: false });
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Loan Calculator"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Payback Plan</h2>
      <LoanDetails />
      <Table />
      <div className="buttonContainer">
        <button type="button" className="button">
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
        </button>
        <button type="button" className="button">
          <span className="buttonText">Close</span>
          <span className="buttonIcon">
            <AiFillCloseCircle onClick={closeModal} />
          </span>
        </button>
      </div>
    </Modal>
  );
}

export default LoanModal;
