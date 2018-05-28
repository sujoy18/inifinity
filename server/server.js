var express = require('express');
var app = express();
console.log(__dirname);
app.use('/', express.static('../build')); //serves the index.html

app.listen(3000, 'localhost', function () {
  console.log('listens on port 3000 -> http://localhost:3000/')
}); //listens on port 3000 -> http://localhost:3000/
