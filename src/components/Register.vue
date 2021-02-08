<template>
  <div class="register">
    <b-modal
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-body">
        <div class="form-title text-center">
          <h4>Register</h4>
        </div>
        <div class="d-flex flex-column text-center">
          <form>
            <div class="form-group ">
              <input
                v-model="username"
                type="name"
                class="form-control is-invalid"
                id="name"
                placeholder="Your name..."
              />
            </div>
            <div class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Your email address..."
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Your password..."
                required
              />
            </div>
            <button
              @click="register"
              type="button"
              class="btn btn-info btn-block btn-round"
            >
              Submite
            </button>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { fb } from "./firebaseConfig";

export default {
  name: "Register",

  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          this.$router.replace("panel");
          const user = userCredential.user;
          userCredential.user.updateProfile({
            displayName: this.username,
          });
          console.log(user); // mos e fshi dej build
        })

        .then(() => {})
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = alert(error.message);
          // ..
        });
    },
  },
};
</script>

<style src="../assets/register.scss" lang="scss"></style>
