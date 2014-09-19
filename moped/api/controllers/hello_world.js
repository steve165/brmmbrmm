'use strict';

var util = require('util');

module.exports = {
  hello: hello
}

function hello(req, res) {
  var name = req.swagger.params.name.value;
  var hello = name ? util.format('Hello, %s, got a new motor?', name) : 'Hello, stranger!';
  res.json(hello);
}
