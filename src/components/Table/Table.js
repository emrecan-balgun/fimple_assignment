import React, { useContext } from "react";
import { LoanContext } from "../../context/LoanContext";
import { handleMortgageDataChange } from "../../utils/test";

import "./table.css";

function Table() {
  const {
    loanAmount,
    interestRate,
    installmentNumber,
    installmentFrequency,
    taxRate,
  } = useContext(LoanContext);

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
    <div className="">
      <table class="styled-table">
        <thead>
          <tr>
            <th>Taksit No</th>
            <th>Taksit Tutarı</th>
            <th>Ana Para</th>
            <th>Kalan Ana Para</th>
            <th>Kar Tutarı</th>
            <th>KKDF</th>
            <th>BSMV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>9.956.46 TL</td>
            <td>7.106.46 TL</td>
            <td>92.893.54 TL</td>
            <td>2.280,00</td>
            <td>342,00</td>
            <td>228,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
