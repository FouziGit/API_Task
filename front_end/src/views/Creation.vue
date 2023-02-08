<template>
  <navbar></navbar>

  <div>
      
  <form @submit.prevent="submitForm">
          
  <div class="form-group">
    <label for="title">Titre</label>
    <input type="text" class="form-control" id="text" placeholder="Nom de votre tâche" required v-model="title">
  </div>
  
  <div class="form-group">
    <label for="taskType">Type de la tâche</label>
    <select class="form-control" id="taskType" required  v-model="type_task_id">
      <option value="" selected disabled hidden>Sélectionner</option>
    <option v-for="type_task in type_tasks" :value="type_task._id" :key="type_task._id">{{ type_task.name}}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="taskStatus">Statut de la tâche</label>
    <select class="form-control" id="taskStatus" required  v-model="status_task_id">
      <option value="" selected disabled hidden>Sélectionner</option>
      <option v-for="status_task in status_tasks" :value="status_task._id" :key="status_task._id">{{ status_task.name }}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="users">Utilisateurs</label>
    <select class="form-control" id="users" required  v-model="user_id">
      <option value="" selected disabled hidden>Sélectionner</option>
    <option v-for="user in users" :value="user._id" :key="user._id">{{ user.last_name }} {{ user.first_name }}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="taskDescription">Description de la tâche </label>
    <textarea class="form-control" id="taskDescription" rows="3" required v-model="task_description"></textarea>
    <br>
    <button type="submit">Envoyer</button>
  </div>
  
</form>
    </div>
  </template>

<script>
import {mapState, mapActions} from "vuex"
import Navbar from "../components/Navbar.vue"
import Swal from 'sweetalert2'
export default {
components: {Navbar},
data() {
  return {
    status_task_id: '',
    type_task_id:'',
    task_description: '',
    title:'',
    slugs: [],
    user_id:[]
  }
},
methods: {
  ...mapActions("requests/user", ["get_all_users"]),
  ...mapActions("requests/task", ["create_task"]),
  ...mapActions("requests/status_task",["get_all_status_tasks"]),
  ...mapActions("requests/type_task",["get_all_type_tasks"]),
  ...mapActions("requests/status_task",["get_status_task_by_slug"]),
  ...mapActions("requests/status_task",["get_type_task_by_slug"]),

  async submitForm() {
 
    const response = await this.create_task({ 
      title:this.title,
      description:this.task_description,
      status_task_id: this.status_task_id,
      type_task_id:this.type_task_id,
      user_id: this.user_id
    })
    
    if(response.success) {
    Swal.fire({
        title: 'Tâche crée avec succès ! ',
        text: response.message,
        icon: 'success'
    });
    this.status_task_id='',
    this.task_description='',
    this.title='',
    this.type_task_id=''
    this.user_id=''

  }
  else{
    Swal.fire({
        title: 'Aucune tâche créer ',
        text: response.message,
        icon: 'error'
    });
  }
  
  }
},
computed: {
      ...mapState("requests/status_task", ["status_tasks"]),
      ...mapState("requests/type_task", ["type_tasks"]),
      ...mapState("requests/user", ["users"])

    },

  async mounted (){
  await this.get_all_status_tasks()
  await this.get_all_type_tasks()
  await this.get_all_users()
  console.log("this.users get_all_users")
  console.log(this.users)
  console.log("this.type_tasks")
  console.log(this.type_tasks)


}
}
</script>
