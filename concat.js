var a=[1,2,3,4,5]
var b=[6,7,8,9]
var c=a.concat(b)
console.log(c)




var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=numbers[0]
for(i=0; i<numbers.length; i++){
    if(numbers[i]>=max){
        max=numbers[i]
    }
}
console.log(max)




var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var b=numbers[i]
var i=0
while(i<numbers.length){
    var j=numbers[i]
    if(j>b){
        b=j
    }
    i=i+1
}
console.log(b)



var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var reversedArray=[]
for(var i=numbers.length-1; i>=0;i--){
   reversedArray.push(numbers[i])
}
console.log(reversedArray);





