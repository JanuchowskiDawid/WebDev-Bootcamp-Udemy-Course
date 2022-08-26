const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response");
})

app.post('/tacos', (req, res) => {
    res.send("Post /tacos response");
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("on port 3000");
})