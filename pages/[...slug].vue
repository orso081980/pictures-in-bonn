<template>
  <div>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else-if="pending">Loading...</div>
    <div v-else>Content not found</div>
  </div>
</template>

<script setup>
const route = useRoute()
const path = route.path.replace(/^\//, '') // Remove leading slash

// Query by id which is 'content:filename.md'
const { data, pending } = await useAsyncData(`content-${path}`, async () => {
  try {
    const results = await queryCollection('content').all()
    
    // Try different variations to find the content
    let item = results?.find(item => item.id === `content:${path}.md`)
    if (!item) {
      item = results?.find(item => item.id === `content/${path}.md`)
    }
    if (!item) {
      // Try with stem match
      item = results?.find(item => item.stem === path)
    }
    if (!item) {
      // Try path match
      item = results?.find(item => item.path === `/${path}`)
    }
    
    // Special handling for galleries and stories with numbered files
    if (!item && path.startsWith('galleries/')) {
      const galleryName = path.replace('galleries/', '')
      item = results?.find(item => 
        item.id.includes(`galleries`) && 
        item.id.includes(`.${galleryName}.md`)
      )
    }
    if (!item && path.startsWith('stories/')) {
      const storyName = path.replace('stories/', '')
      item = results?.find(item => 
        item.id.includes(`stories`) && 
        item.id.includes(`.${storyName}.md`)
      )
    }
    
    return item || null
  } catch (error) {
    console.error('Error fetching content:', error)
    return null
  }
})
</script>