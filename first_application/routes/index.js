var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
var places = [
{ name: 'Home', rating: 10 },
{ name: 'Vegas', rating: 5 },
{ name: 'Virginia Beach', rating: 5 },
{ name: 'Disneyland', rating: 7 },
{ name: 'Alaska', rating: 8 }
];
// create a name
var myname = "Tiffany Parrott";
res.render('index', {
title: 'Favorite Places',
places: places,
myname: myname
});
});
module.exports = router;