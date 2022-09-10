<script setup>
import MirrorGif from '../assets/img/Mirror.gif'
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Mirror</div>
        <div class = "command">Command: D_Mirror</div>
        <img
          class="gif"
          :src="MirrorGif"
          alt="MirrorGif"
        />
        <div class = header2>Description</div>
          <div class = "description">
            Switches the side of the object or group that the leader line lies on. Keeps the leader line start point snapped to the outermost left or right point of the object. If the leader line pointer is a “dot”, the leader line will switch sides, but the start point of the leader line will stay in  the same place.
          </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'ChangeStyle'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Change Style'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'AutoAlign'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Auto Align'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>