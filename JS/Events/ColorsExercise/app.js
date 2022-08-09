function getRandomColorValue() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    let newColor = getRandomColorValue();
    console.log(newColor);
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})