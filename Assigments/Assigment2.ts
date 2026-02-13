function eligibilityOfLoan(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): string {

  if (creditScore > 750) {
    if (income >= 55000 && isEmployed && debtToIncomeRatio < 40) {
      return `${customerName} is eligible for loan`;
    } else {
      return `${customerName} is not eligible for loan`;
    }
  } 
  else if (creditScore >= 650 && creditScore <= 750) {
    if (income >= 55000 && isEmployed && debtToIncomeRatio < 40) {
      return `${customerName} is eligible for loan`;
    } else {
      return `${customerName} is not eligible for loan`;
    }
  } 
  else (creditScore < 750)
  {
    return `${customerName} is not eligible for loan`;
  }
}

const customerName: string = "Prakash";
const creditScore: number = 720;
const income: number = 54000;
const isEmployed: boolean = true;
const debtToIncomeRatio: number = 30;

const result = eligibilityOfLoan(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);

console.log(result);
