const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');
const Task_schema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true,
	},
	description:{
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
	},
	status_task_id:{
		type: Schema.Types.ObjectId,
        ref:'status_task',
		required: true
	},
	type_task_id:{
		type: Schema.Types.ObjectId,
        ref:'type_task',
		required: true

	},
	user_id:{
		type: Schema.Types.ObjectId,
        ref: User,
		required: true

	}

});

module.exports = mongoose.model('Task', Task_schema);
