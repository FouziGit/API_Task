const status_task_service = require('../services/status_task.service');

exports.create=async (req, res) => {
    try{
        const response =await  status_task_service.create(req.body)
        res.status(response.status).json({ success: response.success, task_status_id: response.task_status_id,message:response.message});
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
};

exports.get_all = async (req, res) => {
    try{
        const response = await status_task_service.get_all(req.query)
        res.status(response.status).json({success: response.success,task_statuses: response.task_statuses,message:response.message})
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
};

exports.get = async (req, res) => {
    try{
      const response = await status_task_service.get(req.params.id);
      res.status(response.status).json({ success: response.success, status_task: response.status_task,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
};


exports.update = async (req, res) => {
    try{
      const response = await status_task_service.update(req.body, req.params.id);
      res.status(response.status).json({ success: response.success,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
  };


exports.delete = async (req, res) => {
    try{
        const response = await status_task_service.delete(req.params.id);
        res.status(response.status).json({ success: response.success,message:response.message});
      } catch (e) {
        return res.status(400).json({ status: 400,success: false, message: e.message });
      }
    
    };
