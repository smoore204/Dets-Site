<script setup>
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Next Steps</div>
        <br>
            <div class = header2>Testing and Feedback</div>
          <div class = "description">
            Dets is still very much in its early stages and has yet to undergo thorough testing. The next step in this process is to collect feedback from users [you] and then update and release the first version of the plug-in to the public on Food4Rhino. Please use the "Contact" tab to send any feedback or questions you might have.
          </div>
          <div class = header2>Machine Learning Application</div>
          <div class = "description">
            Another potential next step for this project would be to crowd-source data regarding labels and objects/annotation positions from future users and use this data to train a machine learning model to be able to predict annotation text without user input and desired formatting styles.
          </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'Move'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Move'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'Contact'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Contact'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>