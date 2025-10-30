const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

var token = jwt.sign({ role: 'admin' }, JWT_SECRET);

console.log(token);
