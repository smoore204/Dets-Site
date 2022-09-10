<script setup>
import changeStyleGif from '../assets/img/ChangeStyle.gif'
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Change Style</div>
        <div class = "command">Command: D_ChangeStyle</div>
        <img
          class="gif"
          :src="changeStyleGif"
          alt="changeStyleGif"
        />
        <div class = header2>Description</div>
          <div class = "description">
            Change the style of existing leader lines, including arrow type, text height, and leader line angle. 
          </div>
          <div class = header2>Input Options</div>
          <div class = "description">
            <span class = "font-semibold italic">Pointer (OpenArrow, Solid Triangle, None, Dot):</span> If “Dot” is selected, the leader line will point to the center of an object or object group. Otherwise, the leader line will point to the edge.
          </div>
          <div class = "description">
            <span class = "font-semibold italic">Text Height:</span> Use the command line to enter in a value between 0.1 and 100 to change the text height of the leader line.
          </div>
          <div class = "description">
            <span class = "font-semibold italic">LeaderAngle (Zero, Thirty, FortyFive, Sixty):</span> Choose between 4 different preset angles.
          </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'ChangeScale'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Change Scale'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'Mirror'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Mirror'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>