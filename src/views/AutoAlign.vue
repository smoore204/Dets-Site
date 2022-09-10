<script setup>
import AutoAlignGif from '../assets/img/AutoAlign.gif'
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Auto Align</div>
        <div class = "command">Command: D_AutoAlign</div>
        <img
          class="gif"
          :src="AutoAlignGif"
          alt="AutoAlignGif"
        />
        <div class = header2>Description</div>
          <div class = "description">
            Automatically aligns text of selected annotations to the left or right and attempts to remove any overlaps present. It should be observed that for objects that are spaced too close together, it may be impossible to prevent the overlapping of some annotations. See the notes below for a description of how overlap prevention works. 
          </div>
          <div class = header2>Input Options</div>
          <div class = "description">
            <span class = "font-semibold italic">Offset Distance:</span> This is the distance away from the outermost left or right point of the detail that leader text will be aligned to.
          </div>
          <div class = header2>Techinical Notes</div>
          <div class = "description">
            The AutoAlign command works in the following steps:  
            <ol>
                <li>Identifies leader lines that have overlapping text.</li>
                <li> Of the objects that the overlapping leader lines point to, it finds the objects with minimum and maximum bounding box “Y” values. </li>
                <li>These leader lines are then moved either upward or downward half the distance of the leader line text height. </li>
                <li>A check is then done to test whether this newly moved leader line still intersects the object. If so, the leader lines’ points are updated. Otherwise, the leader line is not moved. </li>
                <li>These steps are repeated until there is no more overlapping text. However, since it can be impossible to prevent overlaps in some scenarios, the process is only allowed to be repeated for a finite amount of iterations, after which, the process stops and the final location of the leader lines is frozen.</li>
            </ol>
        </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'Mirror'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Mirror'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'Move'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Move'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>