const express = require('express');

const app = express();

const x = 'Hello';

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
