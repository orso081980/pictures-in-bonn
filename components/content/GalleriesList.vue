<script setup lang="ts">
import { withTrailingSlash } from "ufo";

const props = defineProps({
  path: {
    type: String,
    default: "galleries",
  },
});

const { data: _galleries } = await useAsyncData(
  "galleries",
  async () => {
    const results = await queryCollection('content').all()
    return results?.filter(item => item.id.includes('galleries/') && !item.id.endsWith('galleries.md'))?.map((item: any) => ({
      ...item,
      _path: item.path,
      // normalize cover from common frontmatter locations so child components receive it
      cover: item.cover ?? item.data?.cover ?? item.meta?.cover ?? item.frontmatter?.cover,
      // try to find images array either directly or in minimark masonry-gallery node
      images: item.images ?? item.data?.images ?? item.meta?.images ?? item.data?.value?.find((v: any)=>Array.isArray(v)&&v[0]==='masonry-gallery')?.[1]?.images
    })) || []
  }
);

const galleries = computed(() => _galleries.value || [])

</script>

<template>
  <div v-if="galleries?.length" class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <GalleryListItem
        v-for="(gallery, index) in galleries"
        :key="index"
        :gallery="gallery"
      />
    </div>
    <div v-else>
      <p class="">
        No galleries found.
      </p>
    </div>
</template>
