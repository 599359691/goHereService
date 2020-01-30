const express = require('express');
const db = require('./db/connect');
const app = express();
const bodypaser = require('body-parser');
app.use(bodypaser.urlencoded({extended: false}));
app.use(bodypaser.json());

const userRouter = require('./router/userRouter');
const registRouter = require('./router/registRouter');
const loginRouter = require('./router/loginRouter');
const checkLogin = require('./router/checkLogin');
const indexRouter = require('./router/indexRouter');
const detailRouter = require('./router/detailRouter');
const editRouter = require('./router/editRouter');
const mineTextRouter = require('./router/mineTextRouter');
const editTextRouter = require('./router/editTextRouter');
const exitLoginRouter = require('./router/exitLoginRouter');
const newTextRouter = require('./router/newTextRouter');
const deleteTextRouter = require('./router/deleteTextRouter');
const findRouter = require('./router/findRouter');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/reg', registRouter);
app.use('/checkLogin', checkLogin);
app.use('/index', indexRouter);
app.use('/detail', detailRouter);
app.use('/edit', editRouter);
app.use('/mineText', mineTextRouter);
app.use('/editText', editTextRouter);
app.use('/exitLogin', exitLoginRouter);
app.use('/newText', newTextRouter);
app.use('/deleteText', deleteTextRouter);
app.use('/find', findRouter);

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.listen('9093', function () {
    console.log("9093");
});
