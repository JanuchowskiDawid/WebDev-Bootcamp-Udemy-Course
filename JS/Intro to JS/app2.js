let max = prompt("What is the max value?(1 is the lowest)");
while (!max && max > 0) {
    max = prompt("What is the max value?(1 is the lowest) tThis  time enter a valid number");
}
let target = (Math.floor(Math.random() * max) + 1).toString();
let guessed = prompt("Guess a number");
let i = 1;
while (guessed !== target) {
    if (guessed > target) {
        guessed = prompt("Too big! Take another try");
    }
    else {
        guessed = prompt("Too small! Take another try");
    }
    i++;
}
alert("Congrats! It took you " + i + " tries");