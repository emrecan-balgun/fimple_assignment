export const calculate = (balance, rate, terms, taxRate) => {
  let data = [];
  let detail = [];

  balance = parseFloat(balance);
  rate = parseFloat(rate);
  terms = parseFloat(terms);

  //Calculate the per period interest rate
  let period = rate / 12;

  //Calculate the payment
  let payment = balance * (period / (1 - Math.pow(1 + period, - terms)));

  //begin building the return string for the display of the amort table
  detail = [
    {
      loanAmount: balance.toFixed(2),
      interestRate: (rate * 100).toFixed(2),
      installmentNumber: terms,
      periodPayment: payment.toFixed(2),
      totalPaid: (payment * terms).toFixed(2),
      totalTax: (payment * terms - balance).toFixed(2),
    },
  ];

  for (let count = 0; count < terms; ++count) {
    //in-loop interest amount holder
    let interest = 0;

    //in-loop period principal amount holder
    let periodPrincipal = 0;

    interest = balance * period;
    periodPrincipal = payment - interest;
    let newTaxRate;

    taxRate === "kkdf"
      ? (newTaxRate = interest * 0.15)
      : (newTaxRate = interest * 0.1);

    data.push({
      no: count + 1,
      installmentAmount: (interest + periodPrincipal).toFixed(2),
      profitAmount: periodPrincipal.toFixed(2),
      principal: interest.toFixed(2),
      balance: balance.toFixed(2),
      tax: newTaxRate.toFixed(2),
    });

    //update the balance for each loop iteration
    balance = balance - periodPrincipal;
  }

  return { data, detail };
};
