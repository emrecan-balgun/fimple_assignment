import React, { useContext } from "react";

import "./table.css";
import { LoanContext } from "../../context/LoanContext";
import { handleMortgageDataChange } from "../../utils/test";

function Table() {
  const {
    loanAmount,
    interestRate,
    installmentNumber,
    installmentFrequency,
    taxRate,
  } = useContext(LoanContext);

  // bsmv = %0.10
  // kkdf = %0.15

  // const yearlyPayments = handleMortgageDataChange(loanAmount, installmentNumber, interestRate, monthlyPayment);

  // let paymentMonthsArr = [];

  // for(let i = 0; i < installmentNumber; i++) {
  // 	paymentMonthsArr.push(
  // 		<tr key={yearlyPayments[i].year}>
  // 			<td>{yearlyPayments[i].year}</td>
  // 			<td>{yearlyPayments[i].interestPaid.toLocaleString('en-GB', localeOptions)}</td>
  // 			<td className="to-date-yearly-payment">{yearlyPayments[i].interestPaidToDate.toLocaleString('en-GB', localeOptions)}</td>
  // 			<td>{yearlyPayments[i].principalRepaid.toLocaleString('en-GB', localeOptions)}</td>
  // 			<td className="to-date-yearly-payment">{yearlyPayments[i].principalRepaidToDate.toLocaleString('en-GB', localeOptions)}</td>
  // 			<td>{yearlyPayments[i].outstandingBalance.toLocaleString('en-GB', localeOptions)}</td>
  // 		</tr>
  // 	);
  // }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Taksit No</th>
            <th scope="col">Taksit Tutarı</th>
            <th scope="col">Ana Para</th>
            <th scope="col">Kalan Ana Para</th>
            <th scope="col">Kar Tutarı</th>
            <th scope="col">KKDF</th>
            <th scope="col">BSMV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-label="Taksit No">
              1
            </td>
            <td data-label="Taksit Tutarı">9.956.46 TL</td>
            <td data-label="Ana Para">7.106.46 TL</td>
            <td data-label="Kalan Ana Para">92.893.54 TL</td>
            <td data-label="Kar Tutarı">2.280,00</td>
            <td data-label="KKDF">342,00</td>
            <td data-label="BSMV">228,00</td>
          </tr>
          <tr>
            <td scope="row" data-label="Taksit No">
              1
            </td>
            <td data-label="Taksit Tutarı">9.956.46 TL</td>
            <td data-label="Ana Para">7.106.46 TL</td>
            <td data-label="Kalan Ana Para">92.893.54 TL</td>
            <td data-label="Kar Tutarı">2.280,00</td>
            <td data-label="KKDF">342,00</td>
            <td data-label="BSMV">228,00</td>
          </tr>
          <tr>
            <td scope="row" data-label="Taksit No">
              1
            </td>
            <td data-label="Taksit Tutarı">9.956.46 TL</td>
            <td data-label="Ana Para">7.106.46 TL</td>
            <td data-label="Kalan Ana Para">92.893.54 TL</td>
            <td data-label="Kar Tutarı">2.280,00</td>
            <td data-label="KKDF">342,00</td>
            <td data-label="BSMV">228,00</td>
          </tr>
          <tr>
            <td scope="row" data-label="Taksit No">
              1
            </td>
            <td data-label="Taksit Tutarı">9.956.46 TL</td>
            <td data-label="Ana Para">7.106.46 TL</td>
            <td data-label="Kalan Ana Para">92.893.54 TL</td>
            <td data-label="Kar Tutarı">2.280,00</td>
            <td data-label="KKDF">342,00</td>
            <td data-label="BSMV">228,00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
