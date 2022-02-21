var a = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]; 
var odd_n=0;
var even_n=0;
for(var i of a){
   if(i%2 ===0){
       even_n+=1
   }
   else{
       odd_n+=1
   }
}
console.log(odd_n);
console.log(even_n);