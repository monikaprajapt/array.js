// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
// // console.log(uniques)
 
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j)
//  }
// } 

// console.log(duplicates);




var a=[19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
b=[]
for (i of a){
    if(!b.includes(i)){
        b.push(i)
    }

}
console.log(b)





