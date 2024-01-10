let prompt=require('prompt-sync')();
let a = prompt("Enter a number :")
a=parseInt(a)
a>0?console.log(a+" is a positive number"): a<0 ? console.log(a+" is a negative number"):  console.log("This number is zero")