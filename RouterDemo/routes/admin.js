const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Not admin");
})

router.get('/topsecret', (req, res) => {
    res.send('viewing secret');
})
router.get('/delete everythink', (req, res) => {
    res.send('good bye');
})

module.exports = router;