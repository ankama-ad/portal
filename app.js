// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

let path = require('path');
const utils = require("./backend/utils.js");
const powerbiRouter = require("./backend/routes/powerbiEmbedRoutes");
const reportRoutes = require("./backend/routes/reportRoutes");
const deprtmentRoutes = require("./backend//routes/departmentRoutes");
const userRolesRoutes = require("./backend/routes/userRolesRoutes");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



let cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// let html_to_pdf = require('html-pdf-node');
// Prepare server for Bootstrap, jQuery and PowerBI files
app.use('/js', express.static('./node_modules/bootstrap/dist/js/')); // Redirect bootstrap JS
app.use('/js', express.static('./node_modules/jquery/dist/')); // Redirect JS jQuery
app.use('/js', express.static('./node_modules/powerbi-client/dist/')) // Redirect JS PowerBI
app.use('/css', express.static('./node_modules/bootstrap/dist/css/')); // Redirect CSS bootstrap
app.use('/public', express.static('./backend/public/')); // Use custom JS and CSS files
app.use(express.static(path.join(__dirname, 'backend/views')));

const port = process.env.PORT || 8080;

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use('/api/powerbi', powerbiRouter);
app.use('/api/reports', reportRoutes);
app.use('/api/departments', deprtmentRoutes);
app.use('/api/userroles', userRolesRoutes);


app.get('/', function (req, res) {     
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //res.sendFile(path.join(__dirname + '/../templates/index.html'));

});

app.get('/template', function (req, res) {    
    res.sendFile(path.join(__dirname + '/../templates/index.html'));
});

// app.get('/getEmbedToken', async function (req, res) {

//     // Validate whether all the required configurations are provided in config.json
//     // configCheckResult = utils.validateConfig();
//     // if (configCheckResult) {
//     //     return {
//     //         "status": 400,
//     //         "error": configCheckResult
//     //     };
//     // }
//     // Get the details like Embed URL, Access token and Expiry
//     let result = await embedToken.getEmbedInfo();

//     // result.status specified the statusCode that will be sent along with the result object
//     res.status(result.status).send(result);
// });

// catch 404 
app.use(function(req, res, next) {
    console.log('env', req.app.get('env'));
    res.status(404);    
    res.format({
      html: function () {
        res.render('404', { url: req.url })
      },
      json: function () {
        res.json({ error: 'Not found' })
      },
      default: function () {
        res.type('txt').send('Not found')
      }
    })
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

module.exports = app;