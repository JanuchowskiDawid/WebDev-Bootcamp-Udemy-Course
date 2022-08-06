// //console printing
// console.log("Hello World?");
// let total = 1 + 3;
// console.log(total);
// //if-else statemets
// let random = Math.random();
// if (random < 0.5) {
//     console.log("random is less then 0.5");
// } else {
//     console.log("random is greater then 0.5");
// }
// //nested conditional
// const password = prompt("please enter a new password");

// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log("Valid password");
//     } else {
//         console.log("remove that space!");
//     }

// } else {
//     console.log("too short");
// }
// const userInput = prompt("enter smt");
// if (userInput) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// const day = 2;

// switch (day) {
//     case 1: s
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Not a Monday");
//         break;
//     case 3:
//         console.log("Not a Monday");
//         break;
//     case 4:
//         console.log("Not a Monday");
//         break;
//     case 5:
//         console.log("Not a Monday");
//         break;
//     case 6:
//         console.log("Not a Monday");
//         break;
//     case 7:
//         console.log("Not a Monday");
//         break;
//     default:
//         console.log("Not a day");

// }

/*I've provided you with an array called airplaneSeats, which represents the rows of seats on a flight.  Our friend Hugo is looking to book a seat on our flight. Fortunately, there is one middle seat available (it's set to null currently).  Please update the array element that is currently null, to instead be "Hugo". (Please don't directly change the code on line 6 where I'm initially setting it to null.  This is an exercise in accessing data in nested arrays!)

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats.splice(3,1,['Luke','Hugo','Deniz']);*/

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

const SECRET = "JBCPIS";

let guess = prompt("enter secret code...");
while (guess !== SECRET) {
    guess = prompt("enter secret code...");
}