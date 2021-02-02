<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <b-nav-item class="nav-link active" aria-current="page" to="/Panel"><i class="fas fa-chart-line"></i>
              <span data-feather="home"></span>
              Dashboard
            </b-nav-item>
          </li>
          <li class="nav-item">
             <b-nav-item class="nav-link" to="/rep"><i class="fas fa-sticky-note"></i>
              <span data-feather="bar-chart-2"></span>
              Reports
             </b-nav-item>
          </li>
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="link-secondary" to="/panel" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" to="/panel">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    name:'Sidenavp'

}
</script>

<style >
body {
  font-size: .875rem;
}
#sidebarMenu{
  margin-left: 1em;
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
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
}
.form-control-dark {
    background-color: white;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
}
.form-control-dark:focus {
  background-color: white;
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
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
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
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
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
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
    padding-right: calc(var(--bs-gutter-x)/ 2);
    padding-left: calc(var(--bs-gutter-x)/ 2);
    margin-top: var(--bs-gutter-y);
}
.sidebar .nav-link {
    font-weight: 500;
    color: #333;
}
.flex-column {
    flex-direction: column !important;
}

</style>

