import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./loanDetails.css";
import { LoanContext } from "../../context/LoanContext";
import { calculate } from "../../utils/calculateLoan";

function LoanDetails() {
  const { t } = useTranslation();

  const {
    loanAmount,
    interestRate,
    installmentNumber,
    installmentFrequency,
    taxRate,
  } = useContext(LoanContext);

  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const currency = localStorage.getItem("currency");

  useEffect(() => {
    try {
      const { data, detail } = calculate(
        loanAmount,
        interestRate,
        installmentNumber,
        taxRate
      );
      setData(data);
      setDetail(detail);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // add commas to numbers
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {detail.length > 0 &&
        detail &&
        detail.map((item, index) => {
          return (
            <div key={index} className="loanDetails">
              <span className="loanDetailsItem">
                {t("Loan amount")}:{" "}
                <b>
                  {currency}
                  {numberWithCommas(item.loanAmount)}
                </b>
              </span>
              <span className="loanDetailsItem">
                {t("Interest rate")}:{" "}
                <b>%{numberWithCommas(item.interestRate)}</b>
              </span>
              <span className="loanDetailsItem">
                {t("Installment number")}:{" "}
                <b>
                  {numberWithCommas(item.installmentNumber)}{" "}
                  {t(installmentFrequency)}
                </b>
              </span>
              <span className="loanDetailsItem">
                {t("Installment amount")}:{" "}
                <b>
                  {currency}
                  {numberWithCommas(item.periodPayment)}
                </b>
              </span>
              <span className="loanDetailsItem">
                {t("Total paid")}:{" "}
                <b>
                  {currency}
                  {numberWithCommas(item.totalPaid)}
                </b>
              </span>
              <span className="loanDetailsItem">
                {t("Total tax")}:{" "}
                <b>
                  {currency}
                  {numberWithCommas(item.totalTax)}
                </b>
              </span>
            </div>
          );
        })}
      <table>
        <thead>
          <tr>
            <th scope="col">{t("No")}</th>
            <th scope="col">{t("Installment amount")}</th>
            <th scope="col">{t("Profit amount")}</th>
            <th scope="col">{t("Principal")}</th>
            <th scope="col">{t("Balance")}</th>
            <th scope="col">{t(taxRate.toUpperCase())}</th>
            {/* test et tax rate */}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="No">{item.no}</td>
                  <td data-label={t("Installment amount")}>
                    {currency}
                    {item.installmentAmount}
                  </td>
                  <td data-label={t("Profit amount")}>
                    {currency}
                    {item.profitAmount}
                  </td>
                  <td data-label={t("Principal")}>
                    {currency}
                    {item.principal}
                  </td>
                  <td data-label={t("Balance")}>{item.balance}</td>
                  <td data-label={t(taxRate.toUpperCase())}>
                    {currency}
                    {item.tax}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default LoanDetails;
