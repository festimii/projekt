<template>
  <div class="account">
<b-modal
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >  
  <div class="modal-body">
    <div class="form-title text-center">
        <h4>Login</h4>
    </div>
    <div class="d-flex flex-column text-center">
        <form>
            <div class="form-group">
                <input
                    type="email"
                    class="form-control"
                    id="email1"
                    v-model="email"
                    placeholder="Your email address..."
                    />
            </div>
            <div class="form-group">
                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password1"
                    placeholder="Your password..."
                    />
            </div>
            <button
                @click="login"
                type="button"
                class="btn btn-info btn-block btn-round"
                >
            Login
            </button>
        </form>
        <div class="text-center text-muted delimiter">
            or use a social network
        </div>
        <div class="d-flex justify-content-center social-buttons">
            <button
                type="button"
                class="btn btn-secondary btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
                >
            <i class="fab fa-twitter"></i>
            </button>
            <button
                type="button"
                class="btn btn-secondary btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
                >
            <i class="fab fa-facebook"></i>
            </button>
            <button
                type="button"
                class="btn btn-secondary btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Linkedin"
                >
            <i class="fab fa-linkedin"></i>
            </button>
        </div>
    </div>
  </div>
</b-modal>
</div>
</template>



<script>

import {fb} from "./firebaseConfig";


export default {
  name: "Account",


  data() {
    return {
      email:"",
      password: "",
    };
  },

  methods: {
    login() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password).then((userCredential) => {
          this.$router.replace('panel');
          var user = userCredential.user;
          console.log(user); // mos e fshi dej build
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = alert(error.message);
        });
    },
  },
};
</script>

<style  src="../assets/account.scss" lang="scss">
</style>