<template>
    <navbar></navbar>
  
    <div>
        
    <form @submit.prevent="submitForm">
            
    <div class="form-group">
      <label for="taskName">E-mail</label>
      <input type="email" class="form-control" id="email" placeholder="Entrez votre e-mail" required v-model = "email">
    </div>
    <div class="form-group">
      <label for="taskName">Titre</label>
      <input type="text" class="form-control" id="text" placeholder="Titre" required v-model ="title">
    </div>
    <div class="form-group">
      <label for="taskDescription">Ecrivez nous ! </label>
      <textarea class="form-control" id="taskDescription" rows="7" required v-model ="message"></textarea>
      <br>
      <button type="submit">Envoyer</button>
    </div>
  </form>
      </div>
    </template>
  
    <script>
      import Navbar from "../components/Navbar.vue"
      import Swal from 'sweetalert2'
      export default {
      components: {Navbar},
      data() {
        return {
          title: '',
          email: '',
          message: '',
        }
      },
      methods: {
        submitForm() {
           this.title='',
           this.email='',
           this.message=''

            
          Swal.fire({
              title: 'Merci pour votre message',
              text: 'Nous reviendrons rapidement vers vous !',
              icon: 'success'
          });
        
        }
      }
    }
    </script>
  