// const numbers = [1, 2, 3, 4, 5, 6];


// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// }

// console.log(getRandomInt(1, 7));



// function roll() {
// let result = 0;
// if( ){
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

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// console.log(getRandomInt(6));



const numbers = [1, 2, 3, 4, 5, 6];
const x = numbers.filter((numbers) => numbers % 3 === 0);
console.log(x);
numbers.filter((numbers) => numbers % 3  === 0).forEach((el) => console.log(el));
