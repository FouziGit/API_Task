<template>
    <navbar></navbar>

    <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form @submit.prevent="submitForm">

          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg"  required v-model="email" name="user_mail" />
            <label class="form-label" for="form1Example13">Adresse email</label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" required v-model="password" name="user_password" />
            <label class="form-label" for="form1Example23" >Mot de passe</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Se souvenir de moi </label>
            </div>
            <a href="#!">Mot de passe oublié ?</a>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">Se connecter</button>

          <div class="divider d-flex align-items-center my-4">
          </div>

        </form>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import { mapActions } from "vuex";
import Navbar from "../components/Navbar.vue"
import Swal from 'sweetalert2'
export default {
components: {Navbar},
data() {
    return{
    email:'',
    password:''
    }
},

methods: {
    submitForm: async function () { 
      const response = await this.login({
        email:this.email,
        password:this.password
      });

      if(response.success) {
    Swal.fire({
        title: 'Connexion réussie ! ',
        text: response.message,
        icon: 'success'
      
        });
        this.$router.push('/tasklist')
    
      
}
else{
    Swal.fire({
        title: 'Connexion échouée ',
        text: response.message,
        icon: 'error'
    });
  }
},
...mapActions("requests/auth", ["login"]),

}
}

</script>