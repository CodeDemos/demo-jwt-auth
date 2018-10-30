'use strict';
const jwt = require('jsonwebtoken');

const payload = {
  username: 'bobuser',
  firstName: 'Bob',
  lastName: 'User',
  password: 'baseball' // <<== very bad
};

const options = {
  subject: payload.username,
  expiresIn: '7d'
};

const token = jwt.sign(payload, 'thinkful', options);

console.log(token);

try {
  const decoded = jwt.verify(token, 'thinkful');
  console.log(decoded);
} catch(err) {
  console.error(err.message);
}

// Number of **seconds** since 1970 (epoch)
const d = new Date(0);
console.log(d.setUTCSeconds(1523379936));
console.log(d.toLocaleString());


var header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
var data = 'eyJ1c2VybmFtZSI6ImJvYnVzZXIiLCJmaXJzdE5hbWUiOiJCb2IiLCJsYXN0TmFtZSI6IlVzZXIiLCJwYXNzd29yZCI6ImJhc2ViYWxsIiwiaWF0IjoxNTIyNzc1MjY0LCJleHAiOjE1MjMzODAwNjQsInN1YiI6ImJvYnVzZXIifQ';
console.log(Buffer.from(header, 'base64').toString('ascii'));
console.log(Buffer.from(data, 'base64').toString('ascii'));