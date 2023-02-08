<template>
  <div>
    <nav>
      <div class="nav-right">
        <button class="btn btn-primary">Connexion</button>
      </div>
    </nav>
    <h1>Hello World!</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
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
