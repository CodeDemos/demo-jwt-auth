'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Strategy: LocalStrategy } = require('passport-local');
const { Users, Items } = require('./db/data');

const jwtPassport = require('passport-jwt');
const JwtStrategy = jwtPassport.Strategy;
const ExtractJwt = jwtPassport.ExtractJwt;

const app = express();
app.use(express.static('public'));
app.use(express.json());

/**
 * Login and local strategy ===================================================
 */
const localStrategy = new LocalStrategy((username, password, done) => {
  try {
    // Find and authenticate user based on `username` and `password`
    let user = Users.find((usr) => usr.username === username && usr.password === password);
    if (user) {
      user = Object.assign({}, user);
      delete user.password; //remove password from result

      done(null, user); // login success - sets `req.user = user`
    } else {
      done(null, false); // login failure
    }
  } catch (err) {
    done(err); // error
  }
});

passport.use(localStrategy);
const localAuth = passport.authenticate('local', { session: false, failWithError: true });

app.post('/api/login', localAuth, (req, res) => {
  // The `req.user` has a value because of `done(null, user)` in Local Strategy
  console.log(`Login: ${req.user.username}, ${req.user.id}`);
  const options = {
    expiresIn: '1d'
  };
  const payload = {
    user: req.user
  };
  const authToken = jwt.sign(payload, JWT_SECRET, options);
  res.json({ authToken });
});

/**
 * Protected endpoints and JWT strategy ========================================
 */
const JWT_SECRET = 'FOR-DEMO-ONLY'; // do not hard-code this in a real project

const jwtStrategy = new JwtStrategy({
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer')
}, (payload, done) => {
  // The following line accepts the JWT and sets `req.user = user`
  done(null, payload.user);  // JWT is valid - sets `req.user = payload.user`
});
passport.use(jwtStrategy);

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });

app.get('/api/items', jwtAuth, (req, res) => {
  // The `req.user` has a value because of `done(null, payload.user)` in JWT Strategy
  console.log(`GET request by: ${req.user.username}, ${req.user.id}`);
  const result = Items.filter(item => item.userId === req.user.id);
  return res.json(result);
});

/**
 * Start Server ================================================================
 */
app.listen(process.env.PORT || 8080, () => {
  console.log(`app listening on port ${process.env.PORT || 8080}`);
});
