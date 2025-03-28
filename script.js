console.log("hello world");
let naam = "sujal";
const greet = () => `Hello ${naam}`;
console.log(greet());

let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach((e) => (sum = sum + e));
console.log(sum);

console.log(arr.reduce((acc, rec) => acc + rec, 0));

let newArr = arr.filter((e) => e % 2 === 0);
console.log(newArr);


