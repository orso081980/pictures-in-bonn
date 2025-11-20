<script setup>
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const gallery = ref(null);
const slots = useSlots();
const children = slots.default() ? slots.default()[0].children : false;
const childrenType = children ? children[0].type : false;

let lightbox;

onMounted(() => {
  if (!lightbox && childrenType) {
    lightbox = new PhotoSwipeLightbox({
      gallery: gallery.value,
      children: "a",
      pswpModule: () => import("photoswipe"),
      padding: { top: 20, bottom: 40, left: 100, right: 100 }
    });
    lightbox.init();
  }
});

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});
</script>

<template>
  <div ref="gallery">
    <slot />
  </div>
</template>

<style>
/* PhotoSwipe image constraints */
.pswp__zoom-wrap {
  width: 100% !important;
  height: 100% !important;
  max-height: 70vh !important;
}

.pswp__img {
  max-height: 70vh !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
}
</style>
