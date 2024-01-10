const prompt=require('prompt-sync')();
const mark=prompt("Enter a marks of Student (1 to 100) :");
if(90<mark&&100>=mark){
    console.log("grade A ");
}
else if(90>=mark&&70<mark){
    console.log("Grade B");
}
else if(70>=mark&&50<mark){
    console.log("Grade C");
}
else{
    console.log("Grade F");
}