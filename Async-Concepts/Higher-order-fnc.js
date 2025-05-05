//! A function that takes another function as an argument is a highre order fnc

setTimeout(() => {
  console.log("5 second completed (setTimeout)");
}, 5000);

let count = 1;
setInterval(() => {
  if (count != 10) {
    console.log(`${count} second completed`);
    count++;
  } else {
    clearInterval();
  }
}, 1000);
console.log("sync");
