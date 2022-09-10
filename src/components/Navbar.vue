<script setup>
import { useRouter } from 'vue-router'
import NextButton from './NextButton.vue'
import logo from '../assets/img/logo.png'
const router = useRouter()
const routes = router.options.routes.filter(d => d.link)
</script>

<template>
  <nav id="navbar" class="absolute top-0 bg-white w-full p-3 px-10">
    <div class="flex-1 flex items-center justify-between">
      <router-link :to = "routes[1].name">
        <img :src="logo" class = "png w-[75px] h-fit ml-3 mt-2"/>
      </router-link>
      
    <div>
      <router-link :to="routes[0].name">
        <NextButton class = "button border-none w-fit" :label = "'Contact'"/>
      </router-link>
      <a href="https://github.com/smoore204/Dets/blob/main/Dets.zip?raw=true" download="Dets.zip">
        <NextButton class = "button border-none" :label = "'Download 🡥'"/>
      </a>
    </div>
    </div>
  </nav>
</template>

<style scoped>
#navbar {
  height: var(--navbar-height);
}
</style>
