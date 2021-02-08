<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <b-nav-item class="nav-link active" aria-current="page" to="/Panel"
            ><i class="fas fa-chart-line"></i>
            <span data-feather="home"></span>
            Dashboard
          </b-nav-item>
        </li>
        <li class="nav-item">
          <b-nav-item class="nav-link" to="/rep"
            ><i class="fas fa-sticky-note"></i>
            <span data-feather="bar-chart-2"></span>
            Reports
          </b-nav-item>
        </li>
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
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
  name: "Sidenavp",
};
</script>

<style src="../assets/sidenav.css"></style>
