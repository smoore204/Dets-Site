<script setup>
  import AddAnnotation from '../assets/img/AddAnnotation.gif'
  import NextButton from '../components/NextButton.vue'
  </script>
  
  <template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Add Annotation</div>
        <div class = "command">Command: D_AddAnnotation</div>
        <img
          class="gif"
          :src="AddAnnotation"
          alt="AddAnnotationimage"
        />
        <div class = header2>Description</div>
          <div class = "description">
          Add a leader line to an object or group of objects. Leaders will automatically snap to the right-most or left-most point on the object or group of objects. By default, all leader lines will be drawn at a 45 degree angle, with a solid triangle arrow type, and default text of “text”.  If text was previously assigned to the object with the ‘AddWithText’ command, this text will be remembered and automatically applied.
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
          <router-link class = "float-left" :to="{name: 'GettingStarted'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Getting Started'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'AddWText'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Add With Text'"/>
          </router-link>
        </div>
      </div>
    </div>  
  </template>
  
  <style>
  </style>