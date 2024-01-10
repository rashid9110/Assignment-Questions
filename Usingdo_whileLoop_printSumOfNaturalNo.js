let prompt=require('prompt-sync')();
let num=prompt("Enter any Natural Number to want the sum :")
let i=1,sum=0;
do{
    sum+=i;
    i++
}while(i<=num)
console.log('sum of natural number is :'+sum)