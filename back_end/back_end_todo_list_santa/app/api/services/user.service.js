const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.jwt_secret;
const expiration_seconds = 60 * 60 * 24 * 7; // one week


module.exports = {
    update: async function(data,id) {
        try{
            let user= await User.updateOne(
                {_id:id},
                {$set: data}
            )
            if(!user.n === 0){
                return {
                    status:404,
                    success:false,
                    message:'user not found '
                }
            }
            if(user.matchedCount){
                if(user.modifiedCount > 0){
                    return {
                        status:200,
                        success:true,
                        message:'user updated successfully'
                    }
                }else{
                    return {
                        status:200,
                        success:true,
                        message:'user updated without change any value'
                    }
                }
            }else{
                return {
                    status:404,
                    success:false,
                    message:'user updated failed'
                }
            }
        } catch(e) {
            return {
                status:400,
                success:false,
                message:'update user failed: '+e.message,
            }
        }
    },
    get_all: async function() {
        try{
          

                return await User.find({}).then((users) => {
                if(!users){
                    return {
                        status:404,
                        success:false,
                        users:users,
                        message: "no users found"
                    }
                }
                return {
                    status:200,
                    success:true,
                    users:users,
                    message: "users found"
                }
              }).catch((e) => {
                return {
                    status:404,
                    success:false,
                    users:null,
                    message: "users not found: "+e.message
                }
              });
        } catch(e) {
            return {
                status:400,
                success:false,
                users:null,
                message: "users not found: "+e.message
            }
        }
    },
    get: async function(id) {
        try{

            return await User.findById(id).then((user) => {
                if(!user){
                    return {
                        status:404,
                        success:false,
                        user:user,
                        message: "no user found"
                    }
                }
                return {
                    status:200,
                    success:true,
                    user:user,
                    message: "user found"
                }
              }).catch((e) => {
                return {
                    status:404,
                    success:false,
                    user:null,
                    message: "user not found: "+e.message
                }
              });
        } catch(e) {
            return {
                status:400,
                success:false,
                message: "user not found: "+e.message
            }
        }
    },
create: async  function(data) {
    try{
       let user = new User(data);
        await user.save();      
        return {
            status:201,
            success:true,
            user_id:user._id,
            message: 'user added successfully'
        }
    } catch (e) {
        return {
            status:404,
            success:false,
            user_id:null,
            message: "register failed: "+e.message
        }
    }
},
    login: async function(data) {
        try{
            const user = await User.findOne({ email: data.email })
            console.log(data)
            console.log(user)

            if (!user) {
                return {
                    status:404,
                    success:false,
                    user_id:null,
                    token: null,
                    message: "Authentication failed. User not found."
                }
            }
           
            return  (async function(){
                if(await user.compare_password(data.password)){
                    const id =user.id;
                    const token = jwt.sign({id},jwt_secret , {expiresIn: expiration_seconds});
                    
                    return {
                        status:200,
                        success:true,
                        token: token,
                        user_id:user._id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        message: 'Authentication successfull'
                    }
                }else{
                    return {
                        status:401,
                        success:false,
                        user_id:null,
                        token: null,
                        message:"login failed",
                    }
                }
            })();
        } catch (e) {
            
            return {
                status:401,
                success:false,
                user_id:null,
                token: null,
                message:"login failed: "+e.message,
            }
        }
    },
    delete: async function(id) {
        try{

            let user = await User.findById( id )
            
            console.log("use")
            console.log(user)

            if(!user){
                return {
                    status:404,
                    success:false,
                    message:'user not found '
                }
            }
            
            let deleted_user= await User.deleteOne({_id:id})

            if(deleted_user.acknowledged){
                if(deleted_user.deletedCount > 0){
                    return {
                        status:200,
                        success:true,
                        message:'user deleted successfull'
                    }
                }else{
                    return {
                        status:200,
                        success:true,
                        message:'user not deleted'
                    }
                }
            }else{
                return {
                    status:404,
                    success:false,
                    message:'user deleted failed'
                }
            }
        } catch (e) {
            return {
                status:400,
                success:false,
                message: 'User not deleted :'+e.message,
            }
        }   




}}
