const Type_task = require("../models/type_task.model");


module.exports = {
    update: async function(data,id) {
        try{
            let type_task= await Type_task.updateOne(
                {_id:id},
                {$set: data}
            )
            if(!type_task.n === 0){
                return {
                    status:404,
                    success:false,
                    message:'type_task not found '
                }
            }
            if(type_task.matchedCount){
                if(type_task.modifiedCount > 0){
                    return {
                        status:200,
                        success:true,
                        message:'type_task updated successfully'
                    }
                }else{
                    return {
                        status:200,
                        success:true,
                        message:'type_task updated without change any value'
                    }
                }
            }else{
                return {
                    status:404,
                    success:false,
                    message:'type_task updated failed'
                }
            }
        } catch(e) {
            return {
                status:400,
                success:false,
                message:'update type_task failed: '+e.message,
            }
        }
    },
    get_all: async function(query) {
        try{
            console.log('get_all service type task')
                return await Type_task.find({}).then((type_tasks) => {
                if(type_tasks.length==0){
                    return {
                        status:404,
                        success:false,
                        type_tasks:type_tasks,
                        message: "no type_task found"
                    }
                }
                console.log(type_tasks)
                return {
                    status:200,
                    success:true,
                    type_tasks:type_tasks,
                    message: "type_tasks found"
                }
              }).catch((e) => {
                return {
                    status:404,
                    success:false,
                    type_tasks:null,
                    message: "type_tasks not found: "+e.message
                }
              });
        } catch(e) {
            return {
                status:400,
                success:false,
                type_tasks:null,
                message: "type_tasks not found: "+e.message
            }
        }
    },
    get: async function(id) {
        try{

            return await Type_task.findById(id).then((type_task) => {
                if(!type_task){
                    return {
                        status:404,
                        success:false,
                        type_task:type_task,
                        message: "no type_task found"
                    }
                }
                return {
                    status:200,
                    success:true,
                    type_task:type_task,
                    message: "type_task found"
                }
              }).catch((e) => {
                return {
                    status:404,
                    success:false,
                    type_task:null,
                    message: "type_task not found: "+e.message
                }
              });
        } catch(e) {
            return {
                status:400,
                success:false,
                message: "type_task not found: "+e.message
            }
        }
    },
create: async  function(data) {
    try{
       let type_task = new Type_task(data);
        await type_task.save();
        return {
            status:201,
            success:true,
            type_task_id:type_task._id,
            message: 'type_task added successfully'
        }
    } catch (e) {
        return {
            status:404,
            success:false,
            type_task_id:null,
            message: "register failed: "+e.message
        }
    }
},
    delete: async function(id) {
        try{
            let type_task= await Type_task.deleteOne({_id:id})
            if(!type_task.n === 0){
                return {
                    status:404,
                    success:false,
                    message:'type_task not found '
                }
            }
            if(type_task.acknowledged){
                if(type_task.deletedCount > 0){
                    return {
                        status:200,
                        success:true,
                        message:'type_task deleted successfull'
                    }
                }else{
                    return {
                        status:200,
                        success:true,
                        message:'type_task not deleted'
                    }
                }
            }else{
                return {
                    status:404,
                    success:false,
                    message:'type_task deleted failed'
                }
            }
        } catch (e) {
            return {
                status:400,
                success:false,
                message: 'type_task not deleted :'+e.message,
            }
        }   


}}
