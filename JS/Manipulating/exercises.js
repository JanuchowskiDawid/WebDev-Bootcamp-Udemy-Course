// I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

// Please write some JavaScript to make them rainbow-colored! 

// In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

// Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array. 

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const letters = document.querySelectorAll('span');
let i = 0;
for (let letter of letters) {
    letter.style.color = colors[i];
    i++;
}

// ClassList Practice
// In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

// Please use JavaScript and the classList property to invert which elements have the highlight class. 

// Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one
// WRITE YOUR CODE IN HERE:
const liLinks = document.querySelectorAll('li');
for (let link of liLinks) {
    link.classList.toggle('highlight');
}

// 100 Button Insanity Exercise
// Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:

// Create exactly 100 new button elements

// Each button must have some text inside of it (it doesn't matter what)

// Each button must be appended inside the container div.
const divElement = document.querySelector("div");
let buttons = [];
for (let i = 0; i < 100; i++) {
    buttons[i] = document.createElement('button');
    buttons[i].innerText = 'Hey!';
    divElement.appendChild(buttons[i]);
}