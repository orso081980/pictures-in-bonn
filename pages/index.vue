<template>
  <div>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else-if="pending">Loading...</div>
    <div v-else>Content not found</div>
  </div>
</template>

<script setup>
// Query for index.md specifically by id
const { data, pending } = await useAsyncData('index', async () => {
  const results = await queryCollection('content').all()
  // The ID format is 'content/index.md' based on the console output
  const item = results?.find(item => item.id === 'content/index.md')
  return item || null
})
</script>