var ary=[1,2,5,7,8]
var b=ary.map(tex)
console.log(b)
function tex(x){
    return x*10;
}




let ary=[1,3,4,5,3,7,6]
let sum=ary.reduce(accumulator,currentvalue){
    return accumulator+currentvalue
}
console.log(sum)

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinedstring(accumulator, currentValue) {
  return accumulator + currentValue;
}
let joinedstring=message.reduse(joinstring)
console.log(joinedstring)












const message = ["JavaScript ", "is ", "fun."];
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}
let joinedString = message.reduce(joinStrings);

console.log(joinedString)





var a={m:"mona",n:"sona"}
delete a.m
console.log(a)


var a={m:"mona",n:"sona"}
a.good=true
console.log(a)