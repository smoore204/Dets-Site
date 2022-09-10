<script setup>
import NextButton from '../components/NextButton.vue'
import ProjectLayout from '../assets/img/ProjectLayout.png'
import github from '../assets/img/github.png'
</script>

<template>
    <div class="content">
      <div class = "inline-block w-[750px]">
        <div class = "header">Behind The Scenes</div>
        <br>
        <div class = header2>Motivation</div>
        <div class = "description">
        As a former facade engineer, I spent many late nights adding annotations to my drawing sets. It was never a very difficult task, but one that always took much longer than expected. There had to be some way to automate the process. This is when the idea for Dets was born. Whether you are very picky about the formatting of your annotations or just short on time, Dets can work for you.
        </div>
        <div class = header2>The Code</div>
        <div class = "description">
          The Dets plug-in is made with C# and RhinoCommon, a .NET SDK for Rhino &nbsp;
          <a href="https://github.com/smoore204/AnnotationHelper">
            <img class="png w-6 inline" :src="github" alt="github-link"/>
          </a>
          <br>
          This website was made with Vue and Tailwind CSS. &nbsp;
          <a href="https://github.com/smoore204/Dets-Website">
            <img class="png w-6 inline" :src="github" alt="github-link"/>
          </a>
        </div>
        <div class = header2>Project Layout</div>
          <div class = "description">
            <ol>
                <li>Dependencies: Includes required assemblies and packages. The RhinoCommon version used in the plug-in is referenced here.</li>
                <li>Properties: Includes assembly info such as the plug-in icon and guid for the project</li>
                <li>Commands: Includes all the commands of the plug-in</li>
                <li>DetsPlugin.cs: A required file thaPt defines the instance of the plug-in.</li>
                <li>Store.cs: A place where changeable variables can be stored, for instance, text-height or pointer type.</li>
                <li>Utils.cs: File where all the utility functions for the plug-in are kept.</li>
                <li>Construct 'GetObject' and define properties such as which type of objects can be selected, how many, and the command prompt.</li>
                <li>Define and add command line options to the 'GetObject'.</li>
                <li>An infinite while loop is created so that the user will always be given the choice to change command line options. It isn’t until the user does select an object/s that the loop is broken out of.</li>
              </ol>
              <br>
            <img class="png" :src="ProjectLayout" alt="ProjectLayout"/>
        </div>
        <br>
        <div class = "nextButtonContainer">
          <router-link class = "float-left" :to="{name: 'GettingStarted'}">
              <NextButton class = "button w-40" :label = "'< Prev'" :routerName = "'Getting Started'"/>
          </router-link>
          <router-link class = "float-right" :to="{name: 'AddAnnotation'}">
              <NextButton class = "button w-40" :label = "'Next >'" :routerName = "'Add Annotation'"/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style>
</style>