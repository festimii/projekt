<template>
  <div class="panel">
      <h1>logout </h1>
        <a href="" @click="logout()">
            <span>
            Logeout
            </span>
        </a>
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
</script>

<style>

</style>