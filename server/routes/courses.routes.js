let express = require('express'),
    router = express.Router();

router.route('/create').post((req, res) => {
    return res.json({ "created": req.body });
});

router.route('/').get((req, res) => {
    return res.json({ "courses" : [{_id: "123", name: "end-to-end", author: "lewis prescott"}] });
})

module.exports = router;