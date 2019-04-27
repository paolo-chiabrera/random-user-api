const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const healthcheck = require('express-healthcheck');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');

require('dotenv').config();

const app = express();

app.use(cors({
    methods: ['GET'],
}));
app.use(logger('dev'));
app.use('/healthcheck', healthcheck());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

const index = require('./routes/index');
const random = require('./routes/random');

app.use(index);
app.use(random);

module.exports = app;
