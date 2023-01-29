import React, { useContext, useState, useEffect } from "react";

import "./loanDetails.css";
import { LoanContext } from "../../context/LoanContext";
import { calculate } from "../../utils/calculateLoan";

function LoanDetails() {
  const { loanAmount, interestRate, installmentNumber, installmentFrequency, taxRate } =
    useContext(LoanContext);
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);

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


  return (
    <>
      {
        detail.length > 0 && detail && detail.map((item, index) => {
          return (
            <div key={index} className="loanDetails">
              <span className="loanDetailsItem">Loan amount: <b>${item.loanAmount}</b></span>
              <span className="loanDetailsItem">Interest rate: <b>%{item.interestRate}</b></span>
              <span className="loanDetailsItem">Installment number: <b>{item.installmentNumber} {installmentFrequency}</b></span>
              <span className="loanDetailsItem">Installment amount: <b>${item.periodPayment}</b></span>
              <span className="loanDetailsItem">Total paid: <b>${item.totalPaid}</b></span>
              <span className="loanDetailsItem">Total tax: <b>${item.totalTax}</b></span>
            </div>
          )
        })
      }
      <table>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Installment Amount</th>
            <th scope="col">Profit Amount</th>
            <th scope="col">Principal</th>
            <th scope="col">Balance</th>
            <th scope="col">{taxRate.toUpperCase()}</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="No">
                    {item.no}
                  </td>
                  <td data-label="Installment Amount">
                    ${item.installmentAmount}
                  </td>
                  <td data-label="Profit Amount">${item.profitAmount}</td>
                  <td data-label="Principal">${item.principal}</td>
                  <td data-label="Balance">{item.balance}</td>
                  <td data-label={taxRate.toUpperCase()}>${item.tax}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default LoanDetails;
