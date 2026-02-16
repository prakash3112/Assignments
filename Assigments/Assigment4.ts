const transactions: number[] = [
    50000,
    -2000,
    3000,
    -15000,
    -200,
    -300,
    4000,
    -3000
];

let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let balance: number = 0;
let suspiciousCount: number = 0;


for (let i = 0; i < transactions.length; i++) {

    const amount = transactions[i];

    
    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
    } else {
        debitCount++;
        totalDebit += amount; 
    }


    balance += amount;

   
    if (amount > 10000 || amount < -10000) {
        console.log(`Suspicious credit/debit Transaction with Amount: ${amount}`);
        suspiciousCount++;
    }
}

console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);
console.log("Total Amount Credited:", totalCredit);
console.log("Total Amount Debited:", totalDebit);
console.log("Remaining Balance in Account:", balance);
console.log("Total Suspicious Transactions:", suspiciousCount);
