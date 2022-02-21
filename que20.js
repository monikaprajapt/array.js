char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
 
uniques=[]
for(var i of char_list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
 
for(var j of uniques){
   count=0
   for(var k of char_list){
       if (j === k){
           count+=1
       }
   }
   console.log(j,count," times");
}


a=[1,2,3,4,2,2,1,2,4,5,3,4,5,3,2,2,1,8,8,7,9,8,7]
var c=[]
for(i of a){
    if(!c.includes(i)){
        c.push(i)
    }
}
console.log(c)
for(j of c){
    var count=0
    for(k of a){
        if(j==k){
            count+=1
        }
    }
    console.log(j,count,"times")
}