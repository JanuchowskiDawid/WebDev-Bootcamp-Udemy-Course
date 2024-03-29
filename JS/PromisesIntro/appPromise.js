const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.7) resolve();
            reject();
        }, 1000)
    })
}

fakeRequest("/dogs/1")
    .then(() => {
        console.log('Woof');
    })
    .catch(() => {
        console.log('Meow');
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => (delayedColorChange('orange', 1000)))
    .then(() => (delayedColorChange('yellow', 1000)))
    .then(() => (delayedColorChange('green', 1000)))
    .then(() => (delayedColorChange('blue', 1000)))
    .then(() => (delayedColorChange('indigo', 1000)))
    .then(() => (delayedColorChange('violet', 1000)))