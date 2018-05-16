var express = require('express');
var router = express.Router();

/* GET infos page. */
router.get('/', function(req, res, next) {
    res.render('infos', { title: 'Express' });
});

module.exports = router;
