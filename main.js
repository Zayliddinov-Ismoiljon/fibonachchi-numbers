//Masala 
// n ta Fibonachchi sonlaridan tashkil topgan massiv hosil qiling 
// Fibonachchi sonlari -> F[k]=F[k-1]+F[k-2]; k=2,3,4,....


let n =10
let a =[1,1];
 
for(let i=2; i<n; i++){
  a[i] = a[i-1] + a[i-2]
}

console.log(a);