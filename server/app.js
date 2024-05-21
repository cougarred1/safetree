const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const routes = require('./routes');

const distPath = path.resolve(__dirname, '../dist');

const app = express();

app.use(
  session({
    secret: 'shush',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));

app.use('/', routes);

app.listen(3000, () => {
  console.log(`\
  \nCheck it out:\
  \nhttp://127.0.0.1:3000 |\
  http://localhost:3000
  `);
});

module.exports = {
  app,
};
