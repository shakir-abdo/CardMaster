const { Router } = require("express");
const router = Router()
const coverter = require('../../congratulation')

// Test route
router.post("/test", (req, res) => {
    const { body } = req
    coverter(body.name, body.user, body.branch, body.account, body.mobile).then((data) => {
        res.attachment('card.png')
        res.send(data)
    })
});

module.exports = router;
