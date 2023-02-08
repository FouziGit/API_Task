const Task = require("../models/task.model");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    update: async function(data,id) {
        try{
            let task= await Task.updateOne(
                {_id:id},
                {$set: data}
            )
            if(!task.n === 0){
                return {
                    status:404,
                    success:false,
                    message:'task not found '
                }
            }
            if(task.matchedCount){
                if(task.modifiedCount > 0){
                    return {
                        status:200,
                        success:true,
                        message:'task updated successfully'
                    }
                }else{
                    return {
                        status:200,
                        success:true,
                        message:'task updated without change any value'
                    }
                }
            }else{
                return {
                    status:404,
                    success:false,
                    message:'task updated failed'
                }
            }
        } catch(e) {
            return {
                status:400,
                success:false,
                message:'update task failed: '+e.message,
            }
        }
    },
    get: async function(id) {
        try{
            return await Task.findById(id).then((task) => {
                if(!task){
                    return {
                        status:404,
                        success:false,
                        task:task,
                        message: "no task found"
                    }
                }
                return {
                    status:200,
                    success:true,
                    task:task,
                    message: "task found"
                }
            }).catch((e) => {
                return {
                    status:404,
                    success:false,
                    task:null,
                    message: "task not found: "+e.message
                }
            });
        } catch(e) {
            return {
                status:400,
                success:false,
                task:null,
                message: "task not found: "+e.message
            }
        }
    },
    create: async  function(data) {
        try{
           let task = new Task(data);
            await task.save();
            return {
                status:201,
                success:true,
                task_id:task._id,
                message: 'task added successfully'
            }
        } catch (e) {
            return {
                status:404,
                success:false,
                task_id:null,
                message: 'create task failed: '+e.message,
            }
        }
        
    },
    get_all: async function() {
        try {
            return await Task.find({}).populate({path:'status_task_id',model:'Status_task'}).populate({path:'type_task_id',model:'Type_task'}).populate({path:'user_id',model:'User'}).then((tasks) => {
                
                if (!tasks) {
                    return {
                        status: 404,
                        success: false,
                        tasks: tasks,
                        message: "no tasks found"
                    }
                }
                return {
                    status: 200,
                    success: true,
                    tasks: tasks,
                    message: "tasks found"
                }
            }).catch((e) => {
                return {
                    status: 404,
                    success: false,
                    tasks: null,
                    message: "tasks not found: " + e.message
                }
            });
        } catch (e) {
            return {
                status: 400,
                success: false,
                tasks: null,
                message: "tasks not found: " + e.message
            }
        }
        
    },
      
    delete: async function(id) {
        try {
            console.log('toto')
            let task = await Task.findByIdAndRemove({_id:id});
            if (!task) {
                return {
                    status: 404,
                    success: false,
                    message: 'task  not found'
                }
            }
            return {
                status: 200,
                success: true,
                message: 'task deleted successfully'
            }
        } catch (e) {
            return {
                status: 400,
                success: false,
                message: 'delete task failed: ' + e.message,
            }
        }
    }
    
    
};