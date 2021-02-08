
<template>
  <div id="app">
   <LodingS />
  <router-view />
    
  </div>
</template>

<script lang="ts"> 

import LodingS from "../src/components/LodingS.vue"

export default {
  components:{ LodingS},
  };
</script>
<style>
#app {
  color: #fff;
  overflow: hidden;
}

</style>
