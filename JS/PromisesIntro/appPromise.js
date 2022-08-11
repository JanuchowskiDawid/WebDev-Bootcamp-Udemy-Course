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