const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

// const obj = {
//   hello: function() {       // It prefers the format of hello() {
//     console.log('hello');
//   }
// };

class A {
  foo() {
    console.log('Hello World');
    /* error Expected 'this' to be used by class method 'foo'. */
  }
}
