import { useContext, useState, useRef, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useTranslation } from "react-i18next";

import "./form.css";
import  Toastify from "../../constants/toastify";
import FormImage from "../../assets/img/form-header-photo.svg";
import { LoanContext } from "../../context/LoanContext";
import { ModalContext } from "../../context/ModalContext";
import LoanModal from "../LoanModal/LoanModal";
import Input from "../Input/Input";
import Language from "../Language/Language";

function Form() {
  //i18n
  const { t, i18n } = useTranslation();
  const { successNotify, warningNotify } = Toastify();

  //refs
  const myInputRef = useRef();
  const interestRateRef = useRef();
  const installmentNumberRef = useRef();
  const installmentFrequencyWeekRef = useRef();
  const installmentFrequencyMonthRef = useRef();
  const installmentFrequencyYearRef = useRef();
  const taxRateBSMVRef = useRef();
  const taxRateKKDFRef = useRef();

  // context
  const { isOpenModal, dispatch } = useContext(ModalContext);
  const { dispatch: dispatchLoan } = useContext(LoanContext);

  // states
  const [interestRate, setInterestRate] = useState(0);
  const [installmentNumber, setInstallmentNumber] = useState(0);
  const [installmentFrequency, setInstallmentFrequency] = useState(null);
  const [taxRate, setTaxRate] = useState(null);

  useEffect(() => {
    myInputRef.current.focus();
    const language = localStorage.getItem("language");
    language && i18n.changeLanguage(localStorage.getItem("language"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const resetInputs = () => {
    myInputRef.current.change("");
    interestRateRef.current.value = "";
    installmentNumberRef.current.value = "";
    installmentFrequencyWeekRef.current.checked = false;
    installmentFrequencyMonthRef.current.checked = false;
    installmentFrequencyYearRef.current.checked = false;
    taxRateBSMVRef.current.checked = false;
    taxRateKKDFRef.current.checked = false;
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
    <>
      <Language />
      <div className="main-wrapper">
        <div className="form-wrapper">
          <h1 className="form-title">{t("Loan Calculator")}</h1>
          <img src={FormImage} alt="loan_photo" className="form-img" />
          <div className="input-flex">
            <div>
              <label className="form-label">{t("Loan amount")}</label>
              {/* <MyInput newValue="500" ref={myInputRef} /> */}
              <Input ref={myInputRef} />
            </div>
            <div>
              <label className="form-label">{t("Interest rate")}</label>
              <NumericFormat
                valueIsNumericString={true}
                prefix={"%"}
                placeholder="%1.5"
                className="form-input"
                onChange={(e) => handleInterestRate(e.target.value)}
                getInputRef={interestRateRef}
              />
            </div>
            <div>
              <label className="form-label">{t("Installment number")}</label>
              <input
                type="number"
                placeholder="12"
                className="form-input"
                onChange={(e) => setInstallmentNumber(e.target.value)}
                ref={installmentNumberRef}
              />
            </div>
          </div>

          <div className="input-radio-wrapper">
            <label htmlFor="frequency" className="form-label">
              {t("Installment frequency")}
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
                    ref={installmentFrequencyWeekRef}
                  />
                  {t("Weekly")}
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
                    ref={installmentFrequencyMonthRef}
                  />
                  {t("Monthly")}
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
                    ref={installmentFrequencyYearRef}
                  />
                  {t("Yearly")}
                  <span className="radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="input-radio-wrapper">
            <label htmlFor="rate" className="form-label">
              {t("Tax rate")}
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
                    ref={taxRateBSMVRef}
                  />
                  {t("BSMV")}
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
                    ref={taxRateKKDFRef}
                  />
                  {t("KKDF")}
                  <span className="radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <button className="btn" onClick={(e) => checkInputs()}>
            {t("Calculate")}
          </button>
          <button className="btn" onClick={(e) => resetInputs()}>
            {t("Reset")}
          </button>
          {isOpenModal && <LoanModal />}
        </div>
      </div>
    </>
  );
}

export default Form;
