import auth from "./auth";
import status_task from "./status_task";
import task from "./task";
import type_task from "./type_task";
import user from "./user";

export default {
  namespaced: true,
  actions: {
    },
  modules: {
    status_task,
    auth,
    task,
    type_task,
    user
  },
};