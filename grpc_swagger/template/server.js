const express = require('express');
const app = express();

app.use(express.static(__dirname /* path to index.html */));
app.listen(3000);

console.info('Served at port 3000');