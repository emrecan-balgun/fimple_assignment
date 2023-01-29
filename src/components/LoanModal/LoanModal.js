import React, { useState, useContext } from "react";
import { Modal } from "react-responsive-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "react-responsive-modal/styles.css";

import "./loanModal.css";
import { ModalContext } from "../../context/ModalContext";
import LoanDetails from "../LoanDetails/LoanDetails";

function LoanModal() {
  const { t } = useTranslation();
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
      <h2 className="modalTitle">{t("Payback plan")}</h2>
      <LoanDetails />
      <div className="buttonContainer">
        <button type="button" className="button" onClick={onCloseModal}>
          <span className="buttonText">{t("Close")}</span>
          <span className="buttonIcon">
            <AiFillCloseCircle />
          </span>
        </button>
      </div>
    </Modal>
  );
}

export default LoanModal;
