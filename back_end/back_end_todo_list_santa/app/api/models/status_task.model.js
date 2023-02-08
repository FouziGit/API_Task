const mongoose = require('mongoose');


const statusTaskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true,
        immutable: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    }
});
statusTaskSchema.pre('save', async function (next) {
	if (!this.isNew) {
		this.updatedAt =new Date()
	}
  next();
});
statusTaskSchema.pre(["findOneAndUpdate", "updateOne","update"], async function (next) {
  
	this.set({ updatedAt: new Date() })
	next();
});
const Status_task = mongoose.model('Status_task', statusTaskSchema);

module.exports = Status_task;
