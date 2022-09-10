<script setup>
  import Navbar from './components/Navbar.vue'
  import SideBar from './components/SideBar.vue'
</script>

<template>
  <Navbar />
  <SideBar />
  <div id="routing-container" class="absolute w-full">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

</style>
