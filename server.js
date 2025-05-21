const express = require('express');
const mongoDb = require('./data/database');
const routes = require('./routes');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use('/', routes);
const PORT = 3000;

mongoDb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(` App run on port : ${PORT}`);
    });
  }
});
