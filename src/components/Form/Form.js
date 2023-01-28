import { useContext, useState } from "react";
import { NumericFormat } from "react-number-format";

import FormImage from "../../assets/img/form-header-photo.svg";
import { LoanContext } from "../../context/LoanContext";
import { ModalContext } from "../../context/ModalContext";
import LoanModal from "../LoanModal/LoanModal";
import "./form.css";

function Form() {
  const { isOpenModal, dispatch } = useContext(ModalContext);
  const { dispatch: dispatchLoan } = useContext(LoanContext);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [installmentNumber, setInstallmentNumber] = useState(0);
  const [installmentFrequency, setInstallmentFrequency] = useState(null);
  const [taxRate, setTaxRate] = useState(null);

  const handleLoanAmount = (amount) => {
    // remove prefix $ and commas
    const newAmount = amount.replace(/[$,]/g, "");
    setLoanAmount(newAmount);
  };

  const handleInterestRate = (rate) => {
    // remove prefix %
    const newRate = rate.replace(/[%]/g, "");
    setInterestRate(newRate);
  };

  // Modal
  const handleModal = () => {
    dispatch({ type: "SET_OPEN_MODAL", payload: true });
    dispatchLoan({
      type: "CHANGE_DETAILS",
      payload: {
        loanAmount,
        interestRate,
        installmentNumber,
        installmentFrequency,
        taxRate,
      },
    });
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <h1 className="form-title">Loan Calculator</h1>
        <img src={FormImage} alt="loan_photo" className="form-img" />
        <div className="input-flex">
          <div>
            <label className="form-label">Loan amount</label>
            <NumericFormat
              prefix={"$"}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
              placeholder="$100,000"
              className="form-input"
              onChange={(e) => handleLoanAmount(e.target.value)}
            />
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
                  value="weekly"
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
                  value="monthly"
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
                  value="yearly"
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
        <button className="btn" onClick={(e) => handleModal()}>
          Calculate
        </button>
        {isOpenModal && <LoanModal />}
      </div>
    </div>
  );
}

export default Form;
