<template>
<header class="header">
  <b-navbar  class="Navbar" toggleable="lg" type="dark" variant="dark" style="  background-color: transparent;
">
        <b-navbar-brand to="/"><img id="logo" src="../assets/logo.svg" alt="" srcset="" /> Dr.Festim</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">HOME</b-nav-item>
            <b-nav-item to="/">ABOUT</b-nav-item>
           
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>ACCOUNT</em>
              </template>
              <b-dropdown-item v-b-modal.loginModal> Login </b-dropdown-item>
              <b-dropdown-item v-b-modal.registerModal> Register</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    
      </header>
</template>

<script lang="ts">
import Register from './Register.vue';
import Account from './Account.vue';
export default {
    name:"Navbar",
    components:{Account , Register}
}
</script>

<style>

</style>