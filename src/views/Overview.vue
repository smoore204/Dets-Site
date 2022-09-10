<script setup>
import OverviewImage from '../assets/img/Overview.gif'
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Welcome To Dets!</div>
        <div class = "text-left text-[#2b43ff] font-bold italic mb-10 text-xl">Detailing. Made. Easier! </div>
        <img
          class="gif"
          :src="OverviewImage"
          alt="OverviewImage"
        />
          <div class = "description">
            Dets is a Rhino plugin designed to make the annotation process easier. It contains commands to enable users to quickly add annotations, modify the style of existing leader lines, and automatically rearrange leader lines for cleaner formatting. With preset styles and scale options, users can easily maintain consistency and clarity between their drawings.
          </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-right" :to="{name: 'GettingStarted'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Getting Started'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>