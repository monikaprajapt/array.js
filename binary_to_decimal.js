//  


var num=[1,0,0,1,1,0,1,1]
var sum=0
var c=0
for(i=num.length-1;i>=0;i--){
    a=(2**c)*num[i]
    sum=sum+a
    c++
}
console.log(sum)