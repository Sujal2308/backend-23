//sync code
let person = "sujal";
const greet = p => `Hello ${p}`
console.log(greet(person))

//async code

async function greet2(greet){
    await greet(person);
    return greet2
}
console.log(greet2())


