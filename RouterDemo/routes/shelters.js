const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send("creating new shelter")
})
router.get('/', (req, res) => {
    res.send("all shelters")
})
router.get('/:id', (req, res) => {
    res.send("viewing one shelter")
})
router.get('/:id/edit', (req, res) => {
    res.send("edit form for one shelter")
})

module.exports = router;