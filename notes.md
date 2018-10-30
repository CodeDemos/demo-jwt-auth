Fri D25: JWT Authentication
What are JWTs?
Analogy movie theater ID (change to building pass)
JWT pieces and parts JWT.io
Process
Create a User
Login with BasicAuth returns a JWT
Access protected endpoint with BearerToken
Periodically, refresh JWT

http://thinkful.slides.com/thinkful/jwt-authentication
JWT by analogy
https://glitch.com/edit/#!/demo-jwt-auth?path=server.js:1:0
scratchpad.js
What is the payload?
Importance of secret
- create and verify a JWT
- dissect in JWT.io
server.js and Postman
require libs
hit endpoint return a JWT
copy, hit protected endpoint with token

Encoding vs Encryption
var header = '{"alg":"HS256","typ":"JWT"}';
var payload = '{"user":{"username":"bobuser","firstName":"Bob","lastName":"User"},"iat":1506091591,"exp":1506091651,"sub":"bobuser"}';
var header64 = new Buffer(header).toString('base64');
var payload64 = new Buffer(payload).toString('base64');
console.log(header64);
console.log(payload64);
var headerStr = new Buffer(header64, 'base64').toString('ascii');
var payloadStr = new Buffer(payload64, 'base64').toString('ascii');
console.log(headerStr);
console.log(payloadStr);
Encoding and Decoding Base64 Strings in Node.js
http://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/
Difference between Encoding and Encryption:
https://stackoverflow.com/questions/4657416/difference-between-encoding-and-encryption/4657456#4657456
Encoding vs. Encryption vs. Hashing vs. Obfuscation
https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/
