require('dotenv').config(); //configuracion de variables de entorno
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const { errorHandler } = require('./utils/middleware/errorHandlers');
const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;


const router = require('./network/routes');
const database = require('./db');
const app = express();

let store;
if (process.env.NODE_ENV === "development") {//session en base de datos
    store = new session.MemoryStore;
} else {
    //
}
database();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    cookie: { maxAge: TWO_HOURS_IN_SEC*1000 },
    store: store,
    secret: process.env.AUTH_COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router(app);
app.use(errorHandler);


module.exports = app;