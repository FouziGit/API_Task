<template>

        <router-view></router-view>
     
</template>


<script>
import {mapState, mapActions} from "vuex"
export default {
  name: "HelloWorld",
  methods : {
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
  padding: 10px;
  width: 300px;  
  height: 20px;  

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
