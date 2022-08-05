//console printing
console.log("Hello World?");
let total = 1 + 3;
console.log(total);
//if-else statemets
let random = Math.random();
if (random < 0.5) {
    console.log("random is less then 0.5");
} else {
    console.log("random is greater then 0.5");
}
//nested conditional
const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password");
    } else {
        console.log("remove that space!");
    }

} else {
    console.log("too short");
}
