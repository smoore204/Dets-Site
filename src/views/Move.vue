<script setup>
import MoveGif from '../assets/img/Move.gif'
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Move</div>
        <div class = "command">Command: D_Move</div>
        <img
          class="gif"
          :src="MoveGif"
          alt="MoveGif"
        />
        <div class = header2>Description</div>
          <div class = "description">
            Move leader lines while dynamically keeping the start point of the leader snapped to the closest point on the object. 
          </div>
          <div class = header2>Input Options</div>
          <div class = "description">
            <span class = "font-semibold italic">Fix End:</span> When set to 'True', the horizontal position of the leader line end point is fixed, enabling only vertical movement. When the value is set to 'False', movement isn’t restricted and the end of the leader line is free to follow the cursor.
          </div>
          <div class = header2>Technical Notes</div>
          <div class = "description">
            The move command works by overriding the RhinoCommon 'GetPoint' class with a custom OnDynamicDraw method that finds the point on an object closest to the user’s mouse and draws a leader line between the mouse’s current position and this closest point.
          </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'AutoAlign'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Auto Align'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'NextSteps'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Next Steps'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>