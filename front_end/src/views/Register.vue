<template>
    <navbar></navbar>

    <form @submit.prevent="submitForm">
      
    <div>
        <label for="last_name">Nom :</label>
        <input type="text" id="name" v-model="last_name" name="user_last_name" required>
    </div>
    <div>
        <label for="mail">e-mail&nbsp;:</label>
        <input type="email" id="mail" v-model="email" name="user_mail" required>
    </div>
    <div>
        <label for="first_name">Prenom :</label>
        <input type="text" id="first_name" v-model="first_name" name="user_first_name" required>
    </div>
    <div>
        <label for="login">Login :</label>
        <input type="text" id="login" v-model="login" name="user_login" required>
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" name="user_password" required>
    </div>
    <div>
        <button type="submit" > Inscription </button>
    </div>
</form>

    
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue"
  import Swal from 'sweetalert2'
  import {mapState, mapActions} from "vuex"
  export default {
    name: "Register",
    components: {
    Navbar
  },
    data(){
        return {
            first_name:"",
            last_name:"",
            login:"",
            password:"",
            email:""
        }


    },

    methods : {
      ...mapActions("requests/auth", ["register"]),
      async submitForm() {
        const response = await this.register({
            first_name: this.first_name,
            last_name:this.last_name,
            login:this.login,
            password:this.password,
            email:this.email
          })
          if (response.success) {            
            this.first_name='',
            this.last_name='',
            this.login='',
            this.password='',
            this.email=''
            Swal.fire({
            title: 'Bravo ! ',
            icon: 'success',
            text: 'Vous êtes désormais inscris'

          })
          }
      }
    },
    computed:{
      ...mapState("requests/auth", ["user"])
  
    },
    async mounted(){
    }
    
  }
  </script>
  
  <style>
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: blue;
    color: white;
  }
  </style>
  