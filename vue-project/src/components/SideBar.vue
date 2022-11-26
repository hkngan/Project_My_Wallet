<template>
  <div class="sidebar">
    <div class="title">
      <p>MyWallet</p> 
    </div>
      
    <div class="menu-items">
      <router-link to="/profile" active-class="active" exact class="side-btn">
        <div class="link-container">
          PROFILE
        </div>
      </router-link>
      <router-link to="/reports" active-class="active" exact class="side-btn">
        <div class="link-container">
          EXPENSE
        </div>
      </router-link>
      <router-link to="/add_ex" active-class="active" exact class="side-btn">
        <div class="link-container">
          ADD EXPENSE
        </div>
      </router-link>
      <button class="btn btn-link" style="color: white;" v-if="isUserLoggedIn == true" flat dark @click="logout()">LOGOUT</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  methods: {
    logout() {
      this.$store.dispatch('isUserLoggedIn', null);
      this.$store.dispatch('user', null);
      this.$store.dispatch('token', '');
      this.$router.push({ name: 'Login' });
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.isUserLoggedIn;
    },
  }
}
</script>
<style scoped>
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}
.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: 6px;
}
.menu-items > * {
    margin-top: 15px;
}
.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}
.side-btn:focus {
    outline: none;
}
.side-btn.active {
    position: relative;
    background-color: white;
    color: rgb(0, 0, 0);
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
    top: -30px;
}
.side-btn.active::after {
    bottom: -30px;
}
.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}
.side-btn.active .link-container::before {
    top: -60px;
}
.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}
.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
}
</style>