<template>
  <div
    class="slidev-layout"
    style="
      background-image: url(&quot;/images/background.png&quot;);
      background-position: bottom;
      background-repeat: no-repeat;
    "
  >
    <LayoutHeader :logoHeader="logoHeader" />
    <div class="my-auto">
      <slot />
    </div>
    <LayoutFooter :website="website" :handle="handle" />
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutFooter from "../components/LayoutFooter.vue";

const props = defineProps({
  logoHeader: {
    type: String,
  },
  website: {
    type: String,
  },
  handle: {
    type: String,
  },
});
</script>
