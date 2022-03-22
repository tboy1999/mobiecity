const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const routes = require('./routes');
const db = require('./config/db');

//connect to db

db.connect();

const app = express();
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// methodOverride
app.use(methodOverride('_method'));

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// router
routes(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
