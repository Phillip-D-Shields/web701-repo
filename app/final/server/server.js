// server/server/js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const events = require("./data/events");
const jwtAuthz = require("express-jwt-authz");
const ManagementClient = require("auth0").ManagementClient;
const mongoose = require('mongoose');
const userModel = require("./models/profile");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Set up Auth0 configuration
const authConfig = {
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_AUDIENCE,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
};

// Create middleware to validate the JWT using express-jwt
const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"]
});

const managementAPI = new ManagementClient({
  domain: authConfig.domain,
  clientId: authConfig.clientId,
  clientSecret: authConfig.clientSecret
});

// Middleware to check that the access token has the manage:users permission
const checkPermissions = jwtAuthz(["manage:users"], {
  customScopeKey: "permissions"
});


// ! mongoose connection to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
// ! test connection for errors
db.on("error", (error) => console.error(error));
// ! alert that db is connected
db.once("open", () => {
  console.log(`db is connected`);
});

app.get("/users", checkJwt, checkPermissions, (req, res) => {
  try {
    managementAPI
      .getUsers()
      .then(users => {
        res.send(users);
      })
      .catch(function(err) {
        res.send(401, "Unauthorized");
      });
  } catch (err) {
    res.send(401, "Unauthorized");
  }
});

// Make a call to the Auth0 Management API only if the correct permissions exist
// Delete a user with specified ID
app.get("/users/:id/delete", checkJwt, checkPermissions, (req, res) => {
  try {
    managementAPI
      .deleteUser({ id: req.params.id })
      .then(response => {
        res.send("User deleted!");
      })
      .catch(function(err) {
        res.send(err);
      });
  } catch (err) {
    res.send(err);
  }
});

// get all events
app.get("/events", (req, res) => {
  res.send(events);
});

app.get("/events/:id", checkJwt, (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(event => event.id === id);
  res.send(event);
});

app.get("/userVerify", (req, res, next) => {
  var { _raw, _json, ...userProfile } = req.user;

  var newUserId = req.user.email;
  var nickName = req.user.nickName;

  // ? check to see if current user already exists

  userModel.exists({ userId: newUserId }).then((exists) => {
    if (exists) {
      next();
    } else {
      // ! create new instance for new user
      var profileInstance = new userModel({
        userId: newUserId,
        userName: nickName
      });

      // ? save instance
      profileInstance.save((err) => console.error(err));
    }
  });
})
// listen on the port
app.listen(port);
