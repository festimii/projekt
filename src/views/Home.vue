

<template>
  <div class="home">
     <section>
       <div :style="image" class="image"></div>
    </section>
  </div>
</template>




<script lang="ts">
export default {
   data() {
            return {
                image: {backgroundImage: "url(https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)"}
            };
        }
}
</script>




<style>
    .image {
        height: 100vh;
        background-repeat: no-repeat;
    }
</style>