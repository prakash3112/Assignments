function employtable(employname, basicSalary, Exerince, rating, variablepaye, bonus, reward) {
    if (Exerince > 5 && rating >= 4) {
        console.log("Eligiblity All Creatria :" + employtable);
        return (basicSalary * basicSalary) + bonus + reward;
    }
    else if (rating < 4 && rating >= 3) {
        return (basicSalary * basicSalary) + bonus;
    }
    else if (rating < 3) {
        return (basicSalary * basicSalary) + bonus;
    }
    return 0;
}
var john = employtable("john", 75000, 5.1, 4.2, 15, 1500, 5000);
console.log("John's Total Salary: " + john);
