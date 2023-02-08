export default {
    namespaced: true,
    state: {
        user:{},
        users:[],
    },

    mutations : {
        set_users(state,users) {
            console.log("ttzest")
            state.users = users
            console.log("aaaaaa")
            console.log(state.users)

        }
    },

    actions:{
        get_all_users : 
        async({commit,rootGetters}) => {
            try {
                const instance = rootGetters["requests/auth/get_axios"]
                const response = await instance.get("/user");
                console.log("response get_all_users")
                console.log(response)
                if(response.data.success) {
                
                  

                  commit("set_users", response.data.users);
                  console.log("this.users")

                  console.log(state.users)
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