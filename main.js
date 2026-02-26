const dieone = [1, 2, 3, 4, 5, 6];
const dietwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultone = [];
const resulttwo = [];
let results = [resultone, resulttwo];

function rollDice() {
 let resultone = Math.floor(Math.random() * dieone.length);
 let resulttwo = Math.floor(Math.random() * dietwo.length);

 let rollone = dieone[resultone];
 let rolltwo = dietwo[resulttwo];

 results.forEach((result) => results.push(result))
}
console.log(results);


// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }


// console.log(getRandomInt(1, 7));


function rolls() {
}


if(resultone === 1){
console.log("You rolled a one!");
}
if (resultone === 2) {
console.log("You rolled a two!!");
}
if (resultone === 3) {
console.log("You rolled a three!");
}
if (resultone === 4) {
console.log("You rolled a four!!");
}
if (resultone === 5) {
console.log("You rolled a five!");
}
if (resultone === 6) {
console.log("You rolled a six!");
}

if(resulttwo === 1){
console.log("You rolled a one!");
}
if (resulttwo === 2) {
console.log("You rolled a two!!");
}
if (resulttwo === 3) {
console.log("You rolled a three!");
}
if (resulttwo === 4) {
console.log("You rolled a four!!");
}
if (resulttwo === 5) {
console.log("You rolled a five!");
}
if (resulttwo === 6) {
console.log("You rolled a six!!");
}
if (resulttwo === 7) {
console.log("You rolled a seven!");
}
if (resulttwo === 8) {
console.log("You rolled an eight!!");
}
if (resulttwo === 9) {
console.log("You rolled a nine!");
}
if (resulttwo === 10) {
console.log("You rolled a ten!");
}

