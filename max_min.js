var a=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=a[0]
var i=1
while(i<a.length){
    if(a[i-1]>max){
        max=a[i]
    }
    i++ 
}
console.log(max)


 