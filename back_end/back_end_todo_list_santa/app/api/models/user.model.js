const bcrypt_salt = process.env.BCRYPT_SALT;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");

dotenv.config();
const Schema = mongoose.Schema;
//Create schema user
const User_schema = new Schema({
	last_name: {
		type: String,
		trim: true,		
		required: true,
	},
	first_name: {
		type: String,
		trim: true,		
		required: true,
	},
	login: {
		type: String,
		unique: true,
		required: true
	  },
	email: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	created:{
    default: Date.now(),
	type: Date,
	},
	updated: { 
		type: Date,
        default: null
	}
	
})


User_schema.pre('save', async function(next) {
	if (!this.isNew) {
		this.updated =new Date()
	}
	if(this.isModified('password') || this.isNew) {
		this.password = await bcrypt.hash(this.password,10);
		next();
	} else {
	  return next();
	}
  });

User_schema.methods.compare_password = async  function(pw) {
	return await bcrypt.compare(pw, this.password)
};
const User_model = mongoose.models.User || mongoose.model('User', User_schema)
module.exports = User_model
