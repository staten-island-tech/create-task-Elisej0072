const numbers = [1, 2, 3, 4, 5, 6];



function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

let result = console.log(getRandomInt(1, 7));

// function roll() {
// if(result === 1){
// console.log(You rolled a one!);
// } 
// else if (result === 2) {
// console.log(You rolled a two!!);
// }
// else if (result === 3) {
// console.log(You rolled a three!);
// }
// else if (result === 4) {
// console.log(You rolled a four!!);
// }
// else if (result === 5) {
// console.log(You rolled a five!);
// }
// else if (result === 6) {
// console.log(You rolled a six!);
// }}

