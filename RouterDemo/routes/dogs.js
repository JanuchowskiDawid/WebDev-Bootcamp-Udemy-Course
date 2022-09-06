const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('viewing all dogs');
})
router.get('/yasuo', (req, res) => {
    res.send('dog shit');
})
router.get('/:id', (req, res) => {
    res.send('viewing one dog');
})
router.post('/', (req, res) => {
    res.send('adding a dog');
})

module.exports = router;