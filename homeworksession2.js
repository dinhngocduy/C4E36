//bai 1
//Kiểu Boolean trong JavaScript mô tả một trong hai giá trị: true (đúng) hoặc false (sai).
//vi du:
// 1.var x = 0;
//Boolean(x);       // trả về false
//2 Boolean(10 > 9)        // trả về kết quả true
//3 var x = “”;
// Boolean(x);       // trả về kết quả false
// bai 2
// A flow chart is a graphical or symbolic representation of a process. Each step in the process is represented by a different symbol and contains a short description of the process step. The flow chart symbols are linked together with arrows showing the process flow direction.
//bai 3 
// Nest conditionals. One conditional can also be nested within another. ... The outer conditional contains two branches. The second branch (the else from the outer) contains another if statement, which has two branches of its own. Those two branches could contain conditional statements as well.
// vi du: if x < y:
    // print("x is less than y")
    // else:
    //     if x > y:
    //         print("x is greater than y")
    //     else:
    //         print("x and y must be equal")
// TURTLE
//1
// color("red")
// for(i=1; i<5; i++){
// lt(30)
// fd(100)
// rt(60)
// fd(100)
// rt(120)
// fd(100)
// rt(60)
// fd(100)
// lt(120)
// }
// 2
// color("red")
// for(i=1; i<5; i++){
// fd(100)
// rt(90)
// }
// color("blue")
// rt(30)
// for(i=1; i<3; i++){
//   fd(100)
//   rt(120)
// }
// rt(120)
// color("red")
// for(i=1; i<5; i++){
// fd(101)
// lt(60)
// }
// fd(101)
// rt(190)
// color("blue")
// for(i=1; i<5; i++){
// fd(103)
// rt(72)}
// serious ex
//1
let x = prompt("Enter your weight (kg)")
let y = prompt("enter your height(cm)")
Y=y*0.01
BMI = x/(Y*Y)
console.log(BMI)
if (BMI < 16)
{
    console.log("Severely underweight")
}
else if(BMI <=18.5){
    console.log("Underweight")
}
else if(BMI<= 25){
    console.log("Normal")
}
else if(BMI <= 30){
    console.log("Overweight")}
else {
    console.log("Obese")
}
//2
let n = prompt("Enter a number")
tich = 1
for (i=1; i<=n; i++){
tich = tich*i
console.log(tich)}