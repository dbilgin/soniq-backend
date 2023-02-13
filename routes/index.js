var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Soniq' });
});

router.get('/images', function (req, res, next) {
  const imageList = [];
  for (let index = 0; index < 100; index++) {
    imageList.push({ id: index, image: `https://picsum.photos/id/${index}` });
  }

  setTimeout(() => {
    res.json(imageList);
  }, 1000);
});

module.exports = router;
