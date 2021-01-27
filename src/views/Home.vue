

<template>
  <div class="home">
    <Navbar />

    <div
      class="container"
      style="
        margin-left: 0px;
        padding-left: 0px;
        margin-right: 0px;
        padding-right: 0px;
      "
    >
    
      <div class="left">
        <img src="../assets/name.svg" alt="" srcset="" />
      </div>
    
    </div>
    
      <Account />
      <Register />
    
  </div>
</template>




<script lang="ts">

import Navbar from "../components/Navbar.vue";
import Account from '../components/Account.vue';
import Register from '../components/Register.vue';

export default {
  components: { Navbar,Account,Register}
};
</script>




<style>
.home {
  background: #360033;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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