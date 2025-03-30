//! function that is passed as an argument to another function or 
//! return from another function

function calc(sum){
  let result =  sum;
  return result
}
function sum(a,b){
    return a+b
}

console.log(calc(sum(10,20)))

let arr = [1,2,3,4];
arr.forEach((val)=>console.log(val))

let newArr = arr.map(val=> val*10)
console.log(newArr)

let filteredArr = arr.filter(n=>n>2);
console.log(filteredArr)

let sumOfArr = arr.reduce((curr,next)=>curr+next ,0);
console.log(sumOfArr)