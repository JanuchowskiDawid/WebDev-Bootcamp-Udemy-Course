const express = require('express');
const app = express();
console.dir(app);

// app.use((req, res) => {
//     console.log("new request");
//     res.send("Hello, we got your request");
// })

app.get('/cat', (req, res) => {
    res.send('meow');
})

app.get('/dog', (req, res) => {
    res.send('woof');
})

app.get('/', (req, res) => {
    res.send('home page');
})
app.get('*', (req, res) => {
    res.send("don't know that path");
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
});
