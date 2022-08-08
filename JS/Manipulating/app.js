const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

const textInner = document.querySelector("h1");
textInner.textContent = "OMG!";

for (let link of allLinks) {
    link.innerText = "I AM A LINK!";
}
const inputText = document.querySelector("input[type=text]");
inputText.setAttribute('placeholder', 'OMG I AM ACCESSED VIA CODE!');