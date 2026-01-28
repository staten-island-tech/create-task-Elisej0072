const numbers = [ "one", "two", "three", "four", "five", "six"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(6));



function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// function results() {
// if(numbers ===  ){
//     console.log();
// } 
//  else if () {
//     console.log();
// } else {
//     console.log()
// }
// if () {
//     console.log();
// } else if () {
//     console.log();
// } else {
//     console.log();
// }}