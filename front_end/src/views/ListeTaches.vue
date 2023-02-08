<template>
  <navbar></navbar>

  <div>
    <h1>Liste des tâches</h1>
    <table class="table">
<thead>
  <tr>
    <th scope="col">Titre</th>
    <th scope="col">Statut</th>
    <th scope="col">Type</th>
    <th scope="col">Description</th>
    <th scope="col">Utilisateurs</th>
    <th scope="col">Action</th>


  </tr>
</thead>
<tbody>
  <tr v-for="task in tasks" :key="task">
    <td>{{ task.title }}</td>
    <td>{{ task.status_task_id.name }}</td>
    <td>{{ task.type_task_id.name }}</td>
    <td>{{ task.description }}</td>
    <td>{{ task.user_id.first_name}} {{ task.user_id.last_name }}</td>
    <td>
      <button type="submit" @click="Delete(task._id)" name="send" value="delete"> Supprimer </button>
    </td>
    <td>
      <button type="submit" @click="Update(task)" name="send" value="update"> Modifier</button>
    </td>

  </tr>
</tbody>
</table>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Swal from 'sweetalert2';
import { mapState, mapActions } from "vuex"; 
export default {
  components: {Navbar},
  data() {
    return {
    }
  },
  
  methods : {
    ...mapActions("requests/task", ["get_all_tasks"]),
    ...mapActions("requests/task", ["delete_task"]),
    async Delete(id) {
      const user = localStorage.getItem("user");
      if (!user) {
        Swal.fire({
          title: "Vous devez vous connecter pour supprimer une tâche",
          text: "Cliquez sur OK pour vous connecter",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK"
        }).then((result) => {
          this.$router.push('/login')       
        });
        return;
      }
      Swal.fire({
        title: 'Etes vous sûr de vouloir supprimer cette tâche ?',
        text: "Vous ne pourrez pas annuler cette action !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer !'
      }).then(async (response) => {
        if (response.value) {
         
        const response= await this.delete_task(id);

        console.log(response)
        if(response.success) {
          this.get_all_tasks()
              Swal.fire({
                title : 'Tâche supprimé avec succès ! ',
                text : response.message,
                icon : 'success'
        });
      
      }
        
        else{
          
              Swal.fire({
                title : 'Erreur !',
                text : error.message,
                icon : 'error'
            });
         
        }
      };
    })
  }},
  computed: {
    ...mapState("requests/task", ["tasks"]),
  },

  async mounted(){
  
    await this.get_all_tasks()
  }
}
</script>