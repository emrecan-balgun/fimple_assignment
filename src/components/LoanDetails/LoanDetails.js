import React, { useContext } from 'react'
import { LoanContext } from '../../context/LoanContext';

import './loanDetails.css';

function LoanDetails() {
  const {
    loanAmount,
    interestRate,
    installmentNumber,
    installmentFrequency,
    taxRate,
  } = useContext(LoanContext);

  // console.log(loanAmount, interestRate, installmentNumber, installmentFrequency, taxRate);

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className='loanDetailsContainer'>
      <span>Toplam geri ödeme tutarı: <b>${numberWithCommas(2000)}</b></span>
      <span>Aylık taksit tutarı: <b>${numberWithCommas(600)}</b></span>
      <span>Toplam vergi tutarı: <b>${numberWithCommas(800)}</b></span>
    </div>
  )
}

export default LoanDetails