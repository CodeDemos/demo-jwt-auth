# Demo Passport JWT Strategy

[Glitch Demo](https://glitch.com/~demo-passport-jwt-strategy)

## How to

Click the "Live" button in the nav to view a simple web interface which allows you to login and view the items belonging to a given user.

## Data

Demo uses simple in memory data in lieu of a real database. You can view the data in `/db/data.js`

## Server.js

The `server.js` file contains a simple Local Auth Strategy which is used to verify the username and password. If the UN/PW is valid, the `/api/login` endpoint creates a JWT with the user as the payload and returns a JWT.

The sample client saves the JWT in the`STORE.token`. It then calls the `/api/items` endpoint adding the token in the Authorization header as a Bearer token.

The `/api/items` endpoint validates the JWT, if valid, the strategy sets `req.user` to the current user (contained in the JWT payload). The endpoint handler then uses `req.user.id` to find and return the correct data

## Bonus file

* `scratch/jsonwebtoken.js` is a standalone demo of .sign() and .verify()
