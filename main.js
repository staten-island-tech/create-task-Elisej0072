const dieone = [1, 2, 3, 4, 5, 6];
const dietwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let rollone = Math.floor(Math.random() * dieone.length);
let rolltwo = Math.floor(Math.random() * dietwo.length);
let results = [rollone, rolltwo];

function rollDice() { 
rollone.forEach((roll) => rollone.push(roll))
rolltwo.forEach((roll) => rolltwo.push(roll))
results.forEach((result) => results.push(result))
}
// console.log(results);


if(rollone === 1){
console.log("You rolled a one!");
}
if (rollone === 2) {
console.log("You rolled a two!!");
}
if (rollone === 3) {
console.log("You rolled a three!");
}
if (rollone === 4) {
console.log("You rolled a four!!");
}
if (rollone === 5) {
console.log("You rolled a five!");
}
if (rollone === 6) {
console.log("You rolled a six!");
}


if(rolltwo === 1){
console.log("You rolled a one!");
}
if (rolltwo === 2) {
console.log("You rolled a two!!");
}
if (rolltwo === 3) {
console.log("You rolled a three!");
}
if (rolltwo === 4) {
console.log("You rolled a four!!");
}
if (rolltwo === 5) {
console.log("You rolled a five!");
}
if (rolltwo === 6) {
console.log("You rolled a six!!");
}
if (rolltwo === 7) {
console.log("You rolled a seven!");
}
if (rolltwo === 8) {
console.log("You rolled an eight!!");
}
if (rolltwo === 9) {
console.log("You rolled a nine!");
}
if (rolltwo === 10) {
console.log("You rolled a ten!");
}


