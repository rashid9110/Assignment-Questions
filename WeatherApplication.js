let prompt=require('prompt-sync')();
let temp=prompt("Enter a current Temperature :")
temp>'30 '?console.log("Hot"):console.log("Moderate")