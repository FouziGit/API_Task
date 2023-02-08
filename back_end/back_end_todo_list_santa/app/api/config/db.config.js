//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
const mongoDB_URL = process.env.mongoDB_URL ;

//module to export connection mongodb
module.exports = async function connection() {
    try {
        mongoose.set('strictQuery', false);
        console.log(" to mongodb");

      return await mongoose.connect(
        mongoDB_URL,
      
        (error) => {
          // console.log("mongodb error");
          // console.log(error);

          if (error) return new Error("Failed to connect to database");
          console.log("connected to mongodb");
        }
      );
    } catch (error) {
      console.log(error);
    }
        
  };