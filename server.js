// Dependencies
const express = require('express');
const session = require("express-session");
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
// Initializes Sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// Sets up session and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
  cookie: {
    // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
    httpOnly: true,
    // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
    secure: false,
    // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));
const helpers = require("./utils/helpers");
  

// Starts the server to begin listening
sequelize.sync({
  force: false,
}).then(()=>{
  app.listen(PORT, () => {
      console.log('Server listening on: http://localhost:' + PORT);
    });
})