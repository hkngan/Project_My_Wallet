<template>
  <nav class="navbar navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">MYWALLET</router-link>
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link class="nav-link" v-if="!$store.state.isUserLoggedIn" flat dark to="/signup">Sign up now
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="!$store.state.isUserLoggedIn" flat dark to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="$store.state.isUserLoggedIn" flat dark to="/add_ex">Add</router-link>
        </li>
        <li class="nav-item">
          <button class="btn btn-light" v-if="$store.state.isUserLoggedIn" flat dark @click="logout()">Logout</button>
        </li>
      </ul>
    </div>

  </nav>

</template>

<script>
export default {
  name: 'HeaderPage',
  methods: {
    logout(){
            localStorage.clear();
            this.$store.dispatch('user', null);
            this.$store.dispatch('token', '');
            this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped>
.nav-link{
  color: white
}
nav.navbar {
  background-color: black;
}
</style>