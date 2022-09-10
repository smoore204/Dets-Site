<script setup>
import ChangeScaleGif from '../assets/img/ChangeScale.gif'
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Change Scale</div>
        <div class = "command">Command: D_ChangeScale</div>
        <img
          class="gif"
          :src="ChangeScaleGif"
          alt="ChangeScaleGif"
        />
        <div class = header2>Description</div>
          <div class = "description">
            Change the scale of existing leader lines. This modifies the pointer arrow size, text height, and leader line lengths.
          </div>
          <div class = header2>Input Options</div>
          <div class = "description">
            <span class = "font-semibold italic">Scale (Scale_1, Scale_2, Scale_3, Scale_4, Scale_5, Scale_6):</span> Determines the scale of the leader line drawn with “Scale_1” being the smallest and “Scale_6” being the largest.
          </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'AddWText'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Add With Text'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'ChangeStyle'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Change Style'"/>
          </router-link>
        </div>
      </div>
    </div> 
</template>

<style>
</style>