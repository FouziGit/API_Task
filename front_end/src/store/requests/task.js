export default {
    namespaced: true,
    state: {
        task:{},
        tasks:[]

    },
    
    mutations : {
        set_task(state,task) {
            state.task = task
        },
        set_tasks(state,tasks) {
            state.tasks = tasks
        }
    },
    actions:{
        create_task : async({commit,rootGetters},data) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.post("/task", data);
                
                console.log(response)
                if(response.data.success) {
                  commit("set_task", response.data);
                }
                  return response.data
                
              } catch (e) {
                return {
                  success : false,
                  message : e.message,
                }
              }
        },
        get_all_tasks : 
        async({commit,rootGetters}) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.get("/task");
                if(response.data.success) {
                    
                  commit("set_tasks", response.data.tasks);
                }
                  return response.data
                
              } catch (e) {
                return {
                  success : false,
                  message : e.message,
                }
              }
            },
        delete_task : 
        async({commit,rootGetters},id) => {
          try{
            const instance = rootGetters["requests/auth/get_axios"]
            const response = await instance.delete("/task/"+id);
            if(response.data.success) {
              commit("set_task", response.data);
            }
            return response.data

          } catch(e) {
            return {
              success : false,
              message : e.message,
            }
          }
          
        }
        

    }
}  
