<script setup lang="ts">
import { withTrailingSlash } from "ufo";

const props = defineProps({
  path: {
    type: String,
    default: "stories",
  },
});

const { data: _stories } = await useAsyncData(
  "stories",
  async () => {
    const results = await queryCollection('content').all();
    // Find all stories (files in the stories/ folder)
    const storyItems = results?.filter(item => 
      item.id.includes('stories/') && 
      !item.id.endsWith('stories.md') // Exclude the main stories.md file
    ) || [];
    
    // small helper to extract images from minimark masonry-gallery payloads
    const parseMasonryImages = (item: any) => {
      const nodes = item.data?.value
      if (!Array.isArray(nodes)) return undefined
      const mg = nodes.find((v: any) => Array.isArray(v) && v[0] === 'masonry-gallery')?.[1]
      if (!mg) return undefined
      if (mg.images) return mg.images
      if (mg[':images']) {
        try { return JSON.parse(mg[':images']) } catch { /* ignore */ }
      }
      return undefined
    }

    // concise mapping: spread the item, add _path and normalized cover/images
    return storyItems.map((item: any) => ({
      ...item,
      _path: item.path,
      cover: item.cover ?? item.data?.cover ?? item.meta?.cover ?? item.frontmatter?.cover,
      images: item.images ?? item.data?.images ?? item.meta?.images ?? parseMasonryImages(item)
    }))
  }
);

const stories = computed(() => _stories.value || []);
</script>

<template>
  <div
    v-if="stories?.length"
    class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <StoryListItem v-for="story in stories" :key="story._path" :story="story" />
    
  </div>
  <div v-else>
    <p class="">No Stories found.</p>
  </div>
</template>
