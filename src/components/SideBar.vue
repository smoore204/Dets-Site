<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = router.options.routes.filter(d => d.link)


let CommandsOpen = true

function toggleCommandsOpen(){
  CommandsOpen.value = !CommandsOpen.value
}
</script>

<template>
  <div id = sidebar>
    <router-link
      v-for="route in routes.slice(1,4)"
      v-bind:key="route"
      :to="route.name"
      class = "sideBarItem font-semibold"
    >
      {{ route.label }}
    </router-link>
    <div class = "font-semibold sideBarItem cursor-pointer" @click="toggleCommandsOpen">Command Library 
      {{CommandsOpen ? "˄" : "˅"}}
      </div>
    <div v-if = "CommandsOpen == true">
      <router-link
          v-for="route in routes.slice(4,11)"
          v-bind:key="route"
          :to="route.name"
          class = "sideBarItem font-normal pl-2 active:text-cyan-800"
        >
          {{ route.label }}
      </router-link>
    </div>
    <router-link
      v-for="route in routes.slice(11,13)"
      v-bind:key="route"
      :to="route.name"
      class = "sideBarItem font-semibold"
    >
      {{ route.label }}
    </router-link>
  </div>
</template>
