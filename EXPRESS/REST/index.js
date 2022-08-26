const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
uuid();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'OMG'
    },
    {
        id: uuid(),
        username: 'Klaudix',
        comment: 'Yes, so what?'
    },
    {
        id: uuid(),
        username: 'DJ',
        comment: 'XDDDDDDD'
    },
    {
        id: uuid(),
        username: 'Todd',
        comment: 'LOL'
    }
]

app.get('/comments', (req, res) => {
    res.render("comments/index", { comments })
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect("comments");
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id).comment;
    comment = req.body.comment;
    res.render('comments/new');
    res.redirect("comments");
})

app.post('/', (req, res) => {
    res.send("POST request")
})

app.listen(3000, () => {
    console.log("on port 3000");
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})