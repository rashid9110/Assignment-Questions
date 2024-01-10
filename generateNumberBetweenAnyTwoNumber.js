let prompt=require('prompt-sync')();
let num1=prompt("Enter a first smill number :")
num1=parseInt(num1)
let num2=prompt("Enter a second big number :")
num2=parseInt(num2)
console.log("Output number is :")
for(let i=num1+1;i<=num2;i++){
    console.log(i)
}