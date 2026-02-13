function elibibityofLoan(customerName, creditScore, income, isEmployed, debtToIncomeRatio) {
    if (creditScore > 750) {
        return "".concat(customerName, " is eligible for loan");
    }
    else {
        return "".concat(customerName, " is not eligible for loan");
    }
}
console.log(elibibityofLoan);
