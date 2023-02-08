require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//Allows you to define the origins authorized to access the resource.
const cors = require("cors");
//login auth
const passport = require("passport");

//Morgan is used for query details in console
const morgan  = require('morgan');

// middleware req res 
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }



  //Init db
const connection = require("./app/api/config/db.config");

//Init db
(async function db() {
  await connection();
})();

let corsOptions = {
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS"
};

app.use(express.json());



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors(corsOptions));

// Set up logger
app.use(morgan('dev'));

// define la passport.js strategy
app.use(passport.initialize());
require('./app/api/config/passport')(passport);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});



const task_routes=require('./App/Api/routes/task.routes')
const user_routes=require('./App/Api/routes/user.routes')
const task_type_routes=require('./App/Api/routes/type_task.routes')
const status_task_routes=require('./App/Api/routes/status_task.routes')



app.use('/api', task_routes);
app.use('/api', user_routes);
app.use('/api', task_type_routes);
app.use('/api', status_task_routes);
