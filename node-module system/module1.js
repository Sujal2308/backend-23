let add = (a, b) => {
  return a + b;
};

let div = (a, b) => {
  if (b == 0) {
    // throwing customised errors
    throw new Error("Denominator can't be zero");
  }
  return a / b;
};

//! can't use export keyword - supported in ES modules
// export function sub(a, b) {
//   return a - b;
// }

module.exports = {
  add,
  div,
};
