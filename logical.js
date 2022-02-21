var a=[9,1,2,4,3,6,5,7,8,9,7,6]
var i=0
var b=[]
while(i<a.length){
    if(a[i]%2==0){
       b.push(0)       
    }

    else{
        b.push(a[i])
    }
    i++
}
console.log(b)



var a=[2,5,[4,6],3,[7,9]]
var i=0
var sum=0
while(i<a.length){
    var b=a[i]
    if(typeof(b)==a){
        var j=0
        while(j<b.length){
            sum=sum+b[j]
            j++
        }
    }
    else{
        sum=sum+a[i]
    }
    i++
}
console.log(sum)