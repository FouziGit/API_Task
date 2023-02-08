<template> 
  <nav class=" navbar-light bg-light">
    <ul class="ul1">
      <li><router-link  to="/"> <button id="inscription-button" class="btn inscription-button"> Accueil  </button> </router-link></li>
      <li><router-link  to="/informations"  id="inscription-button" class="btn inscription-button"> Informations </router-link></li>
      <li><router-link  to="/tasklist"  id="inscription-button" class="btn inscription-button"> Liste de tâches </router-link></li>
      <li><router-link  to="/createtask"  id="create-task-button" class="btn create-task-button" v-if="loggedIn"> Créer une tâche </router-link></li>
      <li><router-link  to="/contact"  id="inscription-button" class="btn inscription-button"> Contact </router-link></li>
      <li><router-link  to="/register"  id="inscription-button" class="btn inscription-button"> Inscription </router-link></li>
    </ul>
    <ul class="ul2">
      <li v-if="!loggedIn"> <router-link  to="/login"  id="login-button" class="btn login"> Login </router-link></li>
    </ul>
  </nav>
</template> 
<script>

export default {
  data() {
    return {
      loggedIn: true
    };
  },
  created() {
  }
};
</script>
<style>
   nav{
    height: 10vh;
    width: 100%;
  }
  .ul1, .ul2 {
    padding: 0;
    list-style-type: none;
    display: flex;
  }
  .ul1 {
    width: 100%;
  }
  </style>