let names: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks:  number[] =[75,80,82];

//Added 10 Marks to each student
for(let i=0; i<marks.length; i++){
    marks[i] += 10;
}   
console.log("Updated Marks: ", marks);

 //average marks All students
 let totalMarks: number = 0;
    for(let i=0; i<marks.length; i++){
        totalMarks += marks[i];
    }  
    console.log("Average Marks of Student: ", totalMarks/marks.length);