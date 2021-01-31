<template>
  <div class="panel">

        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" >Dr.Festim</a>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search " aria-label="Search">
        <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
        <b-nav-item class="nav-link" @click="logout()">Sign out</b-nav-item >
        </li>
        </ul>

</header>   
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><i class="fas fa-chart-line"></i>
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
        
       
       
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-sticky-note"></i>
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
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




<main id="main" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">  
<form class="needs-validation" novalidate>
   <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Emri</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Emri"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Mbiemri</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Mbiemri"  required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
    <label for="inputAddress">Adresa</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="2121 Nazmi Ugzmajli Rr">
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Qyteti</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Qyteti" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">Kombesia</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="Kombesia" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Grupi Gjakut</label>
      <select class="form-control" id="validationCustom05" required>
      <option>Cakto Grupin</option>
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>0+</option>
      <option>0-</option>
      <option>AB+</option>
      <option>AB-</option>
      </select>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
     <legend class="col-form-label col-sm-2 pt-0">ALERXHI</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            PO
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            JO
          </label>
        </div>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
    <div class="col-sm-10">
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Pershkrimi i kontrolles</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </div>
  </div>
  <div class="col-md-6 mb-3" style="margin-left:-16px;">
      <label for="validationCustom03">Pagesa</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="" required>
      <div class="invalid-feedback">
        Please provide Money.
      </div>
    </div>
       <button id="btn1" class="btn btn-secondary" type="submit">Ruaj</button>
</form>
    </main>







  </div>

</template>

<script>
import {fb} from '../components/firebaseConfig';
export default {
    name:"panel",
    components:{},
    methods:{
        logout(){
            fb.auth().signOut().then(()=>{
                this.$router.replace('/');
            })
            .catch  ((err)=>{
                console.log;
            });
        }
    }
};


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();




</script>
<style scoped>
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
#main{
  margin-left: 17em;
  margin-top: 15px;
}
</style>