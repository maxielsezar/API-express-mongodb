var express = require('express');
var router = express.Router();

/* GET jobs listing. */
router.get('/', function(req, res, next) {
  res.send('get jobs');
});
router.post('/', function(req, res, next) {
  res.send('create job');
});
router.put('/', function(req, res, next) {
  res.send('update job');
});
router.delete('/', function(req, res, next) {
  res.send('delete job');
});

module.exports = router;
