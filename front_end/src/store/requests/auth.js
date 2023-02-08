import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    validateStatus: function (status) {
        return status >= 200 && status < 509;
      },
  });
export default {
    namespaced: true,
    state: {
        user:{},

    },
    getters: {
    get_axios(state) {
      // console.log("state.user")
      // console.log(state.user.token)
      if (state.user.token) {
        instance.defaults.headers.common["Authorization"] =`Bearer ${state.user.token}` 
      }
      return instance
    }
    },
    mutations : {
      set_user: function (state, user) {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: user.token, id: user.user_id,first_name: user.first_name, last_name: user.last_name })
        );
        state.user=user
  
      },
    },
    actions:{
        register : async({commit},data) => {
            try {

                const response = await instance.post("/user", data);
                console.log(response)
                if(response.data.success) {
                  commit("set_user", response.data);
                }
                  return response.data
                
              } catch (e) {
                return {
                  success : false,
                  message : e.message,
                }
              }
        },
        login : async({commit},data) => {
          try {
              const response = await instance.post("/login", data);
              if(response.data.success) {
                console.log(response)
                commit("set_user", response.data);
              }
                return response.data
              
            } catch (e) {
              return {
                success : false,
                message : e.message,
              }
            }
      },
        

    }
}  
