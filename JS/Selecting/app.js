const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'imgs/gumball.png'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'imgs/hand2.png';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}