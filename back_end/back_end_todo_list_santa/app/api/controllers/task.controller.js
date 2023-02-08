const task_service = require('../services/task.service');

exports.create = async (req, res) => {
    try{
        const response =await  task_service.create(req.body)
        res.status(response.status).json({ success: response.success, task_id: response.task_id,message:response.message});
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
};

exports.get_all = async (req, res) => {
    try{
     
        const response = await task_service.get_all()
        res.status(response.status).json({success: response.success,tasks: response.tasks,message:response.message})
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
};

exports.get = async (req, res) => {
    try{
      const response = await task_service.get(req.params.id);
      res.status(response.status).json({ success: response.success, task: response.task,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
};


exports.update = async (req, res) => {
    try{
      const response = await task_service.update(req.body, req.params.id);
      res.status(response.status).json({ success: response.success,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
  };


exports.delete = async (req, res) => {
    try{
        console.log('response')
        console.log(req.params)
        const response = await task_service.delete(req.params.id);
        res.status(response.status).json({ success: response.success,message:response.message});
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
    
    };
