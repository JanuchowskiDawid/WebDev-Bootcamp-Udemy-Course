const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("I am clicked");
}

btn.onmouseenter = scream;

function scream() {
    console.log("Cant touch this");
}
btn2 = document.querySelector('#v3');
btn2.addEventListener('click', () => {
    alert("clicked");
})
// Click Events Exercise
// Let's get some practice using addEventListener. I've provided you with two buttons, each with an id: 'hello' and 'goodbye'.  Your goal is to add a click listener to each button.

// When the hello button is clicked, you should console.log "hello"

// When the goodbye button is clicked, you should console.log "goodbye"
const helloButton = document.querySelector("#hello");
const byeButton = document.querySelector("#goodbye");
helloButton.addEventListener('click', () => { console.log("hello"); });
byeButton.addEventListener('click', () => { console.log("goodbye"); });