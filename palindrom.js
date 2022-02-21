//  





var a=require("readline-sync")
var num=a.questionInt("enter the string")
var rew=0
var x=num
while(num>0){
    rew=(rew*10)+num%10
    num=Math.floor(num/10)
}
if(x==rew){
    console.log("it is  palindrom")
}
else{
 
    console.log("it is not palindrom")
}



var a=require("readline-sync")
var num=a.question("enter the string")
let store=num
string=""
for(i=num.length-1; i>=0; i--){
    string=string+num[i]
}
console.log(string)
if(store==string){
    console.log("it is palindrom")
}
else{
    console.log("it is not palindrom")
}