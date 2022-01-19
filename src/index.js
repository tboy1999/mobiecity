const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const routes = require('./routes');

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

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// router
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
