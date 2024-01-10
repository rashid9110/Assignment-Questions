let prompt=require('prompt-sync')();
let username=prompt("Enter a Username :")
let password=prompt("Enter a Password :")
if(username=='admin'&&password=='12345'){
    console.log("Login Successful")
}else{
    console.log("Wrong Username and Password")
}