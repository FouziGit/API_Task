
export default {
    namespaced: true,
    state: {
        type_task:{},
        type_tasks:[]

    },
    
    mutations : {
        set_type_task(state,type_task) {
            state.type_task = type_task
        },
        set_type_tasks(state,type_tasks) {
          state.type_tasks = type_tasks
      }
    },
    actions:{
        get_type_task_by_slug : async({commit,rootGetters},query) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.get("/type_task" + query);
                if(response.data.success) {
                  commit("set_type_task", response.data);
                }
                  return response.data
                
              } catch (e) {
                return {
                  success : false,
                  message : e.message,
                }
              }
        },
        get_all_type_tasks : 
        async({commit,rootGetters}) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.get("/type_task");
                console.log("response get_all_type_tasks")
                console.log(response)
                if(response.data.success) {
                 
                  commit("set_type_tasks", response.data.type_tasks);
                }
                  return response.data
                
              } catch (e) {
                return {
                  success : false,
                  message : e.message,
                }
              }
            }
            

    }
}  
