const { response } = require('express');
const Type_task = require('../models/type_task.model');
const type_task_service = require('../services/type_task.service');

exports.create = async (req, res) => {
    try{
        const response =await  type_task_service.create(req.body)
        res.status(response.status).json({ success: response.success, type_task_id: response.type_task_id,message:response.message});
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
};

exports.get_all = async (req, res) => {
    try {
        console.log('totot')
        const response = await type_task_service.get_all();
        console.log('response get_all type task')
        console.log(response)

        res.status(response.status).json({success: response.success, message: response.message,type_tasks: response.type_tasks});
    } catch (error) {
        res.status(response.status).json({message: response.message,error: error.message
        });
    }
};

exports.get = async (req, res) => {
    try{
      const response = await type_task_service.get(req.params.id);
      res.status(response.status).json({ success: response.success, type_task: response.type_task,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
};


exports.delete = async (req, res) => {
    try{
        const response = await type_task_service.delete(req.params.id);
        res.status(response.status).json({ success: response.success,message:response.message});
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
    };
    exports.update = async (req, res) => {
      try{
          const response = await type_task_service.update(req.params.id);
          res.status(response.status).json({ success: response.success,message:response.message});
        } catch (e) {
          return res.status(400).json({ status: 400,success: false, message: e.message });
        }
    }