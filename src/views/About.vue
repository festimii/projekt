

<template>
  <div class="about">
    <Navbar />
     <section>
      <div :style="image" class="image"></div>
    </section>
    
  </div>
  
</template>


<script lang="ts">
export default {
   data() {
            return {
                image: {backgroundImage: "url(https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)"}
            };
        }
}
</script>




<style>
</style>