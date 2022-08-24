const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("new request");
//     res.send("Hello, we got your request");
// })

app.get('/', (req, res) => {
    res.send('This is home page!');
})

app.get('/r/:subreddit', (req, res) => {
    const subreddit = req.params.subreddit;
    res.send(`This is ${subreddit}`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const subreddit = req.params.subreddit;
    const post = req.params.postID;

    res.send(`This is ${subreddit}. Wieving PostID: ${post}`);
})

app.get('/cat', (req, res) => {
    res.send('meow');
})

app.get('/dog', (req, res) => {
    res.send('woof');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
});

app.get('*', (req, res) => {
    res.send("don't know that path");
})
