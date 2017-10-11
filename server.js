const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('./config');

const jwtPassport = require('passport-jwt');
const JwtStrategy = jwtPassport.Strategy;
const ExtractJwt = jwtPassport.ExtractJwt;

const app = express();

const options = {
  secretOrKey: config.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  algorithms: ['HS256']
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  done(null, payload.user);
});

const createAuthToken = function(user) {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.username,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256' //default
  });
};

const jwtAuth = passport.authenticate('jwt', {session: false});

passport.use(jwtStrategy);
app.use(passport.initialize());

app.get('/api/token',(req, res) => {
  const payload = {
    username:'bobuser',
    firstName: 'Bob',
    lastName: 'User'
  };
  const authToken = createAuthToken(payload);
  res.json({authToken});
});

app.get('/api/protected', jwtAuth, (req, res) => {
  return res.json({data: 'rosebud'});
});

app.post('/api/refresh', jwtAuth, (req, res) => {
  console.log(req.user)
  const authToken = createAuthToken(req.user);
  res.json({authToken});
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`app listening on port ${process.env.PORT || 8080}`)
}); 
