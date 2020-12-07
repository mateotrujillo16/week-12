const fs = require('fs');

planet = fs.readFile('planet.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  console.log(data);
});