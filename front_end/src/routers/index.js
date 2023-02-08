import Register from "../views/Register.vue"
import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue"
import Contact from "../views/Contact.vue"
import Informations from "../views/Informations.vue"
import ListeTaches from "../views/ListeTaches.vue"
import Creation from "../views/Creation.vue"
import Login from "../views/Login.vue"
import Delete from "../views/ListeTaches.vue"






const routes = [
{path: '/tasklist', component:Delete},
{path: '/register', component: Register,},
{path: '/', component: Accueil},
{path: '/contact', component: Contact},
{path: '/informations', component: Informations},
{path: '/tasklist', component: ListeTaches},
{path: '/createtask', component: Creation},
{path: '/login', component: Login}





  ]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });




  export default router;
