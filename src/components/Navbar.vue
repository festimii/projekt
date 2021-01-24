<template>
<header class="header">
  <b-navbar  class="Navbar" toggleable="lg" type="dark" variant="dark" style="  background-color: transparent;
">
        <b-navbar-brand to="/"><img id="logo" src="../assets/logo.svg" alt="" srcset="" /></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">HOME</b-nav-item>
            <b-nav-item to="About">ABOUT</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>ACCOUNT</em>
              </template>
              <b-dropdown-item to="Login">LogIn</b-dropdown-item>
              <b-dropdown-item href="#">Register</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </header>
</template>
<script>
export default {
    name:"Navbar",
}
</script>

<style>

</style>