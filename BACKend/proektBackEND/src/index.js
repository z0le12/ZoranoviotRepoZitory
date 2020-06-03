const express = require('express');
const querystring = require('querystring');
const database = require('./database/mysql.js');
const mainRouter = require('./mainRouter/mainRouter.js');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const http = require('http');

const app = express();

const httpServer = http.Server(app);

app.use(express.static('./public/'));
app.use(express.json());
app.use(express.json({ type: '*/*' }));
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(mainRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server has been handeled on port:${port}`)
});