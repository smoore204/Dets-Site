<script setup>
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Getting Started</div>
        <br>
        <div class = "header2">Installation</div>
        <div class = "description">
        Dets will be made available as a .rhp file on Food4Rhino for Rhino 7 can be installed with the Rhino plugin manager.
        </div>
        <div class = "header2">User Notes</div>
        <div class = "description">
        Annotations can only be added to line/curve or brep elements. If an object to be annotated consists of multiple parts, its parts must be grouped together first, otherwise each element within the object will be attributed a leader line.
        </div>
        <br>
        <div class = "nextButtonContainer">
            <router-link class = "float-left" :to="{name: '/'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Overview'"/>
            </router-link>
            <router-link class = "float-right" :to="{name: 'BehindTheScenes'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Behind The Scenes'"/>
            </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>