<script setup>
import AddWithText from '../assets/img/AddWithText.gif'
import NextButton from '../components/NextButton.vue'



</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Add Annotation With Text</div>
        <div class = "command">Command: D_AddWithText</div>
        <img
          class="gif"
          :src="AddWithText"
          alt="AddWithTextGif"
        />
        <div class = header2>Description</div>
          <div class = "description">
            This command behaves similarly to the add annotation command but enables the user to add text descriptions. After selecting objects to be annotated, each of the selected objects will be highlighted sequentially and the user prompted to type in the command line the object’s annotation text. Input text is stored and saved to an object’s user string.
          </div>
          <div class = header2>Input Options</div>
          <div class = "description">
            <span class = "font-semibold italic">Side (Left, Right):</span> Determines if the leader line will be oriented to the right or left of the object. 
          </div>
          <div class = "description">
            <span class = "font-semibold italic">Scale (Scale_1, Scale_2, Scale_3, Scale_4, Scale_5, Scale_6):</span> Determines the scale of the leader line drawn with “Scale_1” being the smallest and “Scale_6” being the largest.
          </div>
      <br>
      <div class = "nextButtonContainer">
        <router-link class = "float-left" :to="{name: 'AddAnnotation'}">
            <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Add Annotation'"/>
        </router-link>
        <router-link class = "float-right" :to="{name: 'ChangeScale'}">
            <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Change Scale'"/>
        </router-link>
      </div>
    </div>
    </div>  
</template>

<style>
</style>