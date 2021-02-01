<template>
   <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" >Dr.Festim</a>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search " aria-label="Search">
        <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
        <b-nav-item class="nav-link" @click="logout()">Sign out</b-nav-item >
        </li>
        </ul>
</header>   
</template>

<script>

import {fb} from '../components/firebaseConfig';
export default {
    name:'Topnavp',
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

}
</script>

<style>

</style>