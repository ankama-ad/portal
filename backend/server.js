// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

let path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let embedToken = require(__dirname + '/embedConfigService.js');
const utils = require(__dirname + "/utils.js");
const powerbiRouter = require("./routes/powerbiEmbedRoutes");
const usersRoutes = require("./routes/userRoutes");
const deprtmentRoutes = require("./routes/departmentRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const reportRoutes = require("./routes/reportRoutes");
const requestRoutes = require("./routes/requestRoutes");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let cors = require('cors');
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Prepare server for Bootstrap, jQuery and PowerBI files
app.use('/js', express.static('./node_modules/bootstrap/dist/js/')); // Redirect bootstrap JS
app.use('/js', express.static('./node_modules/jquery/dist/')); // Redirect JS jQuery
app.use('/js', express.static('./node_modules/powerbi-client/dist/')) // Redirect JS PowerBI
app.use('/css', express.static('./node_modules/bootstrap/dist/css/')); // Redirect CSS bootstrap
app.use('/public', express.static('./public/')); // Use custom JS and CSS files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + './views'));

const port = process.env.PORT || 8080;

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use('/api/powerbi', powerbiRouter);
<<<<<<< HEAD:backend/server.js
app.use('/api/users', usersRoutes);
=======
app.use('/users', usersRoutes);
>>>>>>> 3d6876960f0dbfe9eea7761546f661bfcc6bd444:backend/src/server.js
app.use('/api/reports', reportRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/departments', deprtmentRoutes);




app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //res.sendFile(path.join(__dirname + '/../templates/index.html'));
});

app.get('/template', function (req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.get('/getEmbedToken', async function (req, res) {

    // Validate whether all the required configurations are provided in config.json
    // configCheckResult = utils.validateConfig();
    // if (configCheckResult) {
    //     return {
    //         "status": 400,
    //         "error": configCheckResult
    //     };
    // }
    // Get the details like Embed URL, Access token and Expiry
    let result = await embedToken.getEmbedInfo();

    // result.status specified the statusCode that will be sent along with the result object
    res.status(result.status).send(result);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
