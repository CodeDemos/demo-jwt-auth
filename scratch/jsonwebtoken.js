'use strict';
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Super-Secret';

const payload = {
  username: 'bobuser',
  firstName: 'Bob',
  lastName: 'User'
};

const options = {
  subject: payload.username,
  expiresIn: '7d'
};

const token = jwt.sign(payload, JWT_SECRET, options);

console.log(token);

try {
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log(decoded);
} catch (err) {
  console.error(err);
}

console.log(Buffer.from(token.split('.')[0], 'base64').toString());
console.log(Buffer.from(token.split('.')[1], 'base64').toString());

// EPOCH: Number of seconds since Jan 1 1970 (1970-01-01T00:00:00Z UTC)
const d = new Date(0);
console.log(d.setUTCSeconds(1540910968));
console.log(d.toLocaleString());
