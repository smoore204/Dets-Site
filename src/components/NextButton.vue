<script setup>
defineProps({
  label: {
    required: true,
    type: String,
    default: ''
  },
  routerName: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <button>
    <div class = "font-bold">
      {{ label }}
    </div>
    {{routerName}}
    </button>
</template>