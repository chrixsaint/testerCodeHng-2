const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoutes');
const organisationRouter = require('./routes/orgRoutes');
const router = require('./routes/indexRoutes');

const app = express();

app.use(bodyParser.json());


app.use('/', router);

app.use('/auth', authRouter);
app.use('/api', organisationRouter);

module.exports = app;
