function employtable(employname : String,basicSalary: number,Exerince : number, rating:number, variablepaye: number, bonus: number, reward: number): number {

if( Exerince > 5 && rating >=4){
   console.log("Eligiblity All Creatria :" + employname)
   return (basicSalary*variablepaye) + bonus + reward; 
       
}
else if( rating <4 && rating>=3 ){
   return (basicSalary*variablepaye) + bonus;
     
}
else if( rating <3 ){
   return (basicSalary*variablepaye) + bonus;
    basicSalary/variablepaye;
}
return 0;
}


const john = employtable("john", 75000, 5.1, 4.2, 0.15, 1500, 5000);
const bob = employtable("boby", 68000, 3.1, 3.8, 0.10, 1200, 0);
const Carol = employtable("Carol", 82000, 7.1, 4.5, 0.10, 1200, 0);
const David = employtable("David", 90000, 10.2, 2.5, 0.03, 300, 0);
const Eva = employtable("Eva", 60000, 2.4, 3.5, 0.10, 1200, 0);
console.log("John's Total Salary: " + john);
  
console.log("bob's Total Salary: " + bob);
console.log("Carol's Total Salary: " + Carol);
console.log("David's Total Salary: " + David);
console.log("Eva's Total Salary: " + Eva);
