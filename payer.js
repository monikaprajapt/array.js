var a=[1,2,3]
var i=0
var list=[]
while(i<a.length){
    var j=0
    while(j<a.length){
        var k=0
        while(k<a.length){
            l=a[i],a[j],a[k]
            list.push(l)
            k=k+1
        }
        j=j+1

    }
    i=i+1
}
console.log(list)



