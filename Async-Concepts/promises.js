//* Promises are objects that represents eventual completion of async tasks
//! 1. promises can be resolved only once
//? 2. promise object is immutable (once it is captured and filled with some arbitrary data can't be altered)
//! 3. promises object can have 3 states pending(initially) , fulfilled (after getting successful response) , rejected
//? 4. promise objects contains promiseState , promiseValue (data)

//! 5 A promise is said to be settled (resolved) if it is either fulfilled or rejected, but not pending.

const promise = new Promise((res,rej)=>{
  setTimeout(()=>{
    res("Hello")
  },3000)
})
promise.then((e)=>{
  console.log(e)
})

const data = fetch("hello.com"); // wrong url
data.then((e)=>console.log("successful"))
.catch(()=>console.log("rejected"))
