const jwt = require('jsonwebtoken');

const config = require('./config');

const payload = {
  username: 'bobuser',
  firstName: 'Bob',
  lastName: 'User'
};

const options = {
  subject: payload.username,
  expiresIn: '7d',
  algorithm: 'HS256'
}

const token = jwt.sign(payload, 'abracadabra', options);

console.log(token); 

try {
  const decoded = jwt.verify(token, 'abracadabra');
  console.log(decoded);
} catch(err) {
  console.error(err)
}

const d = new Date(0);
d.setUTCSeconds(1506429634);
d.toLocaleString();