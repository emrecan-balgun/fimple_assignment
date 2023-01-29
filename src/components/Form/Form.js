import { useContext, useState, useRef, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { successNotify, warningNotify } from "../../constants/toastify";

import "./form.css";
import FormImage from "../../assets/img/form-header-photo.svg";
import { LoanContext } from "../../context/LoanContext";
import { ModalContext } from "../../context/ModalContext";
import LoanModal from "../LoanModal/LoanModal";
import Input from "../Input/Input";

function Form() {
  const myInputRef = useRef();
  const { isOpenModal, dispatch } = useContext(ModalContext);
  const { dispatch: dispatchLoan } = useContext(LoanContext);
  const [interestRate, setInterestRate] = useState(0);
  const [installmentNumber, setInstallmentNumber] = useState(0);
  const [installmentFrequency, setInstallmentFrequency] = useState(null);
  const [taxRate, setTaxRate] = useState(null);

  useEffect(() => {
    myInputRef.current.focus();
  }, []);

  const handleInterestRate = (rate) => {
    // remove prefix %
    const newRate = rate.replace(/[%]/g, "");
    const formattedNewRate = newRate / 100;
    setInterestRate(formattedNewRate);
  };

  const checkInputs = () => {
    !myInputRef.current.value() ||
    !interestRate ||
    !installmentNumber ||
    !installmentFrequency ||
    !taxRate
      ? warningNotify()
      : handleModal();
  };

  // Modal
  const handleModal = () => {
    // handleLoanAmount();
    successNotify();
    setTimeout(() => {
      dispatch({ type: "SET_OPEN_MODAL", payload: true });
      dispatchLoan({
        type: "CHANGE_DETAILS",
        payload: {
          // remove prefix $ and commas
          loanAmount: myInputRef.current.value().replace(/[$,]/g, ""),
          interestRate,
          installmentNumber,
          installmentFrequency,
          taxRate,
        },
      });
    }, 5000);
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <h1 className="form-title">Loan Calculator</h1>
        <img src={FormImage} alt="loan_photo" className="form-img" />
        <div className="input-flex">
          <div>
            <label className="form-label">Loan amount</label>
            {/* <MyInput newValue="500" ref={myInputRef} /> */}
            <Input ref={myInputRef} />
          </div>
          <div>
            <label className="form-label">Interest rate</label>
            <NumericFormat
              prefix={"%"}
              placeholder="%1.5"
              className="form-input"
              onChange={(e) => handleInterestRate(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Installment number</label>
            <input
              type="text"
              placeholder="12"
              className="form-input"
              onChange={(e) => setInstallmentNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="input-radio-wrapper">
          <label htmlFor="frequency" className="form-label">
            Installment Frequency
          </label>

          <div className="radio-flex">
            <div className="radio-group">
              <label className="radio-label">
                <input
                  className="input-radio"
                  type="radio"
                  value="week"
                  name="frequency"
                  onChange={(e) => setInstallmentFrequency(e.target.value)}
                />
                Weekly
                <span className="radio-checkmark"></span>
              </label>
            </div>

            <div className="radio-group">
              <label className="radio-label">
                <input
                  className="input-radio"
                  type="radio"
                  value="month"
                  name="frequency"
                  onChange={(e) => setInstallmentFrequency(e.target.value)}
                />
                Monthly
                <span className="radio-checkmark"></span>
              </label>
            </div>

            <div className="radio-group">
              <label className="radio-label">
                <input
                  className="input-radio"
                  type="radio"
                  value="year"
                  name="frequency"
                  onChange={(e) => setInstallmentFrequency(e.target.value)}
                />
                Yearly
                <span className="radio-checkmark"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="input-radio-wrapper">
          <label htmlFor="rate" className="form-label">
            Tax rate
          </label>

          <div className="radio-flex">
            <div className="radio-group">
              <label className="radio-label">
                <input
                  className="input-radio"
                  type="radio"
                  name="rate"
                  value="bsmv"
                  onChange={(e) => setTaxRate(e.target.value)}
                />
                BSMV
                <span className="radio-checkmark"></span>
              </label>
            </div>

            <div className="radio-group">
              <label className="radio-label">
                <input
                  className="input-radio"
                  type="radio"
                  value="kkdf"
                  name="rate"
                  onChange={(e) => setTaxRate(e.target.value)}
                />
                KKDF
                <span className="radio-checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <button className="btn" onClick={(e) => checkInputs()}>
          Calculate
        </button>
        {isOpenModal && <LoanModal />}
      </div>
    </div>
  );
}

export default Form;
