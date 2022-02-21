ole.log("This is palindrome");
}else{
   console.log("This is not a palindrome");
}


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var reversedArray=[]
for(var i=numbers.length-1; i>=0;i--){
   reversedArray.push(numbers[i])
}var Name=['m','a','l','a','y','a','l','a','m'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
for (var j=1; j<=Name; j++ ){
    if (new_array[j]===Name[j]){
        count++;
   }
}
if(count===Name.length){
   cons
console.log(reversedArray);




// var a=["monika","mona","kruna","sapna"]
var i=0
var b=(a.length)-1
while(i<b){
    c=a[i]
    a[i]=a[b]
    a[b]=c
    i=i+1
    b=b-1
// console.log(a)
}
console.log(a)



var a=require("readline-sync")
var num=a.questionInt("enter the number")
var b=[1,2,3,4,5,6,7,8,5,4,3]
var c=[]
var i=0
while((i<(b.length)-num)){
    c.push(b[i])
    i++
var a=require("readline-sync")
var num=a.questionInt("enter the number")
var b=[1,2,3,4,5,6,7,8,5,4,3]
var c=[]
var i=0
while((i<(b.length)-num)){
    c.push(b[i])
    i++
}
var j=0
while(j<=num){
    c.push(b[-j])
    j++
}
console.log(c)


var a=[1,2,3,4,3,2,5,7,8,9]
var i=0
var c=[]
for(i of a){
    if(!c.includes(i)){
        c.push(i)
    }
}
console.log(c)



var a=[1,2,3,4,5]
var b=[3,4,5,6,7]
var i=0
var c=[]
for (i of a){
    c.push(a[i]+b[i])
}
console.log(c)
 


var a=["monika"]
var l=[]
for(i of a){
    for(j of i){
        l.push(j)
    }
}
console.log(l)


