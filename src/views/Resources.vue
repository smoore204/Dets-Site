<script setup>
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Resources</div>
        <div class = "command">This project wouldn't have been possible complete without the following resources.</div>
        <br>
        <a href="https://developer.rhino3d.com/guides/rhinocommon/your-first-plugin-windows/" 
        class = "header2 inline-block hover:text-[#2b43ff] hover:cursor-pointer">RhinoDeveloper - Your First Plugin</a>
        <div class = "description">
          Rhino provides very helpful, step-by-step instructions on how to set up your first plug-in.
        </div>
        <a href = "https://developer.rhino3d.com/api/RhinoCommon/html/R_Project_RhinoCommon.htm"
        class = "header2 inline-block hover:text-[#2b43ff] hover:cursor-pointer">RhinoCommon Documentation</a>
        <div class = "description">
          Rhino provides extensive documentation and example files for their API. It is not always the most easy to navigate, but was very crucial to the project.
        </div>
        <a href = "https://discourse.mcneel.com/c/rhino-developer/3"
         class = "header2 inline-block hover:text-[#2b43ff] hover:cursor-pointer">Rhino Developer Forums</a>
        <div class = "description">
          A place where kind strangers will answer all your RhinoCommon questions.
        </div>
        <br>
      </div>
    </div>
</template>

<style>
</style>