const user_service= require("../services/user.service")

exports.create =  async(req, res) => {
    try{
      // console.log(req.body)
      const response =await  user_service.create(req.body)
      res.status(response.status).json({ success: response.success, user_id: response.user_id,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
  };

  exports.update = async (req, res) => {
    try{
      const response = await user_service.update(req.body,req.params.id);
      res.status(response.status).json({ success: response.success,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
  };

  exports.delete = async (req, res) => {
    try{
      const response = await user_service.delete(req.params.id);
      res.status(response.status).json({ success: response.success,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
  };
  
  exports.login = async (req, res) => {
    try{
      const response = await user_service.login(req.body);
      console.log(response)
      res.status(response.status).json({ success: response.success, user_id: response.user_id,first_name:response.first_name,last_name:response.last_name,token:response.token,message:response.message});
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }
  };

  exports.get_all = async (req, res) => {
    try{
     
      const response = await user_service.get_all()
      res.status(response.status).json({success: response.success,users: response.users,message:response.message})
    } catch (e) {
      return res.status(400).json({ status: 400,success: false, message: e.message });
    }

};
exports.get = async (req, res) => {
  try{
    const response = await user_service.get(req.params.id);
    res.status(response.status).json({ success: response.success, user: response.user,message:response.message});
  } catch (e) {
    return res.status(400).json({ status: 400,success: false, message: e.message });
  }
}