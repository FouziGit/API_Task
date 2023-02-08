const Status_task = require("../models/status_task.model");

module.exports = {
    update: async function(data, id) {
        try{

            let task_status= await Status_task.updateOne(
                {_id:id},
                {$set: data}
            )
            if(!task_status.matchedCount === 0){
                return {
                    status:404,
                    success:false,
                    message:'task_status not found '
                }
            }
            (task_status)
            if(task_status.matchedCount){
                if(task_status.modifiedCount > 0){
                    return {
                        status:200,
                        success:true,
                        message:'task_status updated successfully'
                    }
                }else{
                    return {
                        status:200,
                        success:true,
                        message:'task_status updated without change any value'
                    }
                }
            }else{
                return {
                    status:404,
                    success:false,
                    message:'task_status updated failed'
                }
            }
        }
        catch(e) {
            return {
                status: 400,
                success: false,
                message: 'update task_status failed: ' + e.message,
            }
        }
    },
    get_all: async function(query) {
        try {
            return await Status_task.find(query).then((task_statuses) => {
                if (task_statuses.length==0) {
                    return {
                        status: 404,
                        success: false,
                        task_statuses: task_statuses,
                        message: "no task_statuses found"
                    }
                }
                return {
                    status: 200,
                    success: true,
                    task_statuses: task_statuses,
                    message: "task_statuses found"
                }
            }).catch((e) => {
                return {
                    status: 404,
                    success: false,
                    task_statuses: null,
                    message: "task_statuses not found: " + e.message
                }
            });
        } catch (e) {
            return {
                status: 400,
                success: false,
                task_statuses: null,
                message: "task_statuses not found: " + e.message
            }
        }
    },
    get: async function(id) {
        try {

                return await Status_task.findById(id).then((task_status) => {
                    if(!task_status){
                        return {
                            status:404,
                            success:false,
                            task_status:task_status,
                            message: "no task_status found"
                        }
                    }
                    return {
                        status:200,
                        success:true,
                        task_status:task_status,
                        message: "task_status found"
                    }
                  }).catch((e) => {
                    return {
                        status:404,
                        success:false,
                        task_status:null,
                        message: "task_status not found: "+e.message
                    }
                  });
            } catch(e) {
                return {
                    status:400,
                    success:false,
                    message: "task_status not found: "+e.message
                }
            }
        },
    create: async  function(data) {
        try{
           let task_status = new Status_task(data);
            await task_status.save();
            return {
                status:201,
                success:true,
                task_status_id:task_status._id,
                message: 'task_status added successfully'
            }
        } catch (e) {
            return {
                status:404,
                success:false,
                task_status_id:null,
                message: 'create task_status failed: '+e.message,
            }
        }
    },
    delete: async function(id) {
        try {
            let task_status = await Status_task.findByIdAndRemove({_id:id});
            if (!task_status) {
                return {
                    status: 404,
                    success: false,
                    message: 'task status not found'
                }
            }
            return {
                status: 200,
                success: true,
                message: 'task_status deleted successfully'
            }
        } catch (e) {
            return {
                status: 400,
                success: false,
                message: 'delete task_status failed: ' + e.message,
            }
        }
    }
};
