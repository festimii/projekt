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
                v-model="name"
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
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
           this.$router.replace('panel');
          var user = userCredential.user;
          console.log(user); // mos e fshi dej build
        
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage =  alert(error.message);
          // ..
        });
    },
  },
};

</script>

<style lang="scss">
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 400px;
  }
  .modal-dialog .modal-content {
    padding: 1rem;
  }
}
.modal-header .close {
  margin-top: -1.5rem;
}

.form-title {
  margin: -2rem 0rem 2rem;
}

.btn-round {
  border-radius: 3rem;
}

.delimiter {
  padding: 1rem;
}

.social-buttons .btn {
  margin: 0 0.5rem 1rem;
}

.signup-section {
  padding: 0.3rem 0rem;
}
</style>
ssss