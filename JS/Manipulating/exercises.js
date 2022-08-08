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
