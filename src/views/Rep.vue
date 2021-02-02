<template>
  <div class="rep">
        <Topnavp /> 
        <Sidenavp />
        <main id="main" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">  
         <div class="row" style="margin-left: 19em;">
            <div class="col-md-12">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Emri</th>
                        <th>Mbiemri</th>
                        <th>Adresa</th>
                        <th>Qyteti</th>
                        <th>Kombesia</th>
                        <th>Gjaku</th>
                        <th>Alergjia</th>
                        <th>Pagesa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user.key">
                        <td>{{ user.emri }}</td>
                        <td>{{ user.mbiemri }}</td>
                        <td>{{ user.adresa }}</td>
                        <td>{{ user.qyteti }}</td>
                        <td>{{ user.kombsia }}</td>
                        <td>{{ user.gjaku }}</td>
                        <td>{{ user.alergjia }}</td>
                        <td>{{ user.pagesa }}</td>
                        <td>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        </main>
</div>
</template>
<script>
import { db } from '../components/firebaseConfig';
import Sidenavp from '../components/Sidenavp.vue';
import Topnavp from '../components/Topnavp.vue';
export default {
    name:"rep",
        components:{Topnavp,Sidenavp},
        data() {
            return {
                Users: []
            }
        },
        created() {
            db.collection('users').onSnapshot((snapshotChange) => {
                this.Users = [];
                snapshotChange.forEach((doc) => {
                    this.Users.push({
                        key: doc.id,
                        emri: doc.data().emri,
                        mbiemri: doc.data().mbiemri,
                        adresa: doc.data().adresa,
                        qyteti: doc.data().qyteti,
                        kombsia: doc.data().kombsia,
                        gjaku: doc.data().gjaku,
                        alerxhia: doc.data().alerxhia,
                        pagesa: doc.data().pagesa,

                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("users").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        
        }
    }
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
    .btn-primary {
        margin-right: 12px;
    }
</style>
