<template>
  <div class="panel">
    <Topnavp />
    <Sidenavp />
    <main id="main" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <DocForm></DocForm>
    </main>
  </div>
</template>
<script>
import Sidenavp from "../components/Sidenavp.vue";
import Topnavp from "../components/Topnavp.vue";
import DocForm from "../components/DocForm.vue";
import { fb } from "../components/firebaseConfig";
export default {
  name: "panel",
  components: { DocForm, Topnavp, Sidenavp },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log;
        });
    },
  },
};
</script>
<style scoped>
body {
  font-family: "Lora", serif;
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}
.form-control-dark {
  background-color: white;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}
.form-control-dark:focus {
  background-color: white;
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
.w-100 {
  width: 100% !important;
}
.flex-md-nowrap {
  flex-wrap: nowrap !important;
}
.bg-dark {
  background-color: #212529 !important;
}
.p-0 {
  padding: 0 !important;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}
.d-md-block {
  display: block !important;
}
.bg-light {
  background-color: #f8f9fa !important;
}
.col-lg-2 {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
.col-md-3 {
  flex: 0 0 auto;
  width: 25%;
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
}
.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}
.flex-column {
  flex-direction: column !important;
}
#main {
  margin-left: 17em;
  margin-top: 15px;
}
</style>
