<script setup>
defineOptions({
  name: 'AppFooter',
})
</script>

<template>
  <CFooter class="px-4">
    <div class="justify-content-center align-items-center">
      <span class="ms-1">&copy; {{ new Date().getFullYear() }} Copyright: AnthonyTheDreamer.</span>
    </div>
  </CFooter>
</template>