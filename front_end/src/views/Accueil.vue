<template> 
    <div>
        <navbar></navbar>
        <div class="container">
            <h1 class="text-center">Fouzi ToDoList</h1>
            <form class="mt-3">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Rechercher un utilisateur">
                </div>
            </form>
        </div>
    </div> 
</template> 

<style> 
   nav{
    height: 10vh;
    width: 100%;
   }
   .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
   }
   .text-center {
        text-align: center;
   }
</style>

<script>
    import Navbar from "../components/Navbar.vue"

    export default {
        components: {
            Navbar
        }
    }
</script>