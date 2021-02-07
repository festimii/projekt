

<template>
  <div class="home">
    <Navbar />

      <Landing />
    
      <Account />
      <Register />
    
  </div>
</template>




<script lang="ts">
import Landing from "../components/Landing.vue";
import Navbar from "../components/Navbar.vue";
import Account from '../components/Account.vue';
import Register from '../components/Register.vue';

export default {
  components: { Navbar,Account,Register,Landing}
};
</script>




<style>
html {
    overflow: scroll;
    overflow-x: hidden;
}
/* Override UGG site */
::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
.container {
  display: grid;
  grid-template-columns: 50fr 50fr;
  height: 100vh;
}
.left {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.right {
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
}
</style>