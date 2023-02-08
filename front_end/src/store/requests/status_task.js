
export default {
    namespaced: true,
    state: {
        status_task:{},
        status_tasks:[],
    },
    
    mutations : {
        set_status_task(state,status_task) {
            state.status_task = status_task
        },
        set_status_tasks(state,status_tasks) {
          state.status_tasks = status_tasks
      }
    },
    actions:{
        get_status_task_by_slug : async({commit,rootGetters},query) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.get("/status_task" + query);
                if(response.data.success) {
                  commit("set_status_task", response.data);
                }
                  return response.data
                
              } catch (e) {
                return {
                  success : false,
                  message : e.message,
                }
              }
        },
        get_all_status_tasks : 
        async({commit,rootGetters}) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.get("/status_task");
                // console.log("response")
                // console.log(response)
                if(response.data.success) {
                    
                  commit("set_status_tasks", response.data.task_statuses);
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
