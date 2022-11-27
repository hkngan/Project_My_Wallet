<template>
  <div class="dashboard">
      <SideBar/>
      <div class="content">
          <router-view/>
      </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
export default {
  name: 'HomePage',
  components: {
      SideBar
  },
}
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: rgb(0, 0, 0);
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>