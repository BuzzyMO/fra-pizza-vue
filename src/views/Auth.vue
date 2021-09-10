<template>
  <div class="text-center main-form">
    <div class="form-signin">
      <form class="needs-validation" novalidate="">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required=""
            v-model="credentials.email"
          />
          <div class="invalid-feedback">Valid email is required.</div>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required=""
            v-model="credentials.password"
          />
          <div class="invalid-feedback">Password is required.</div>
          <label for="floatingPassword">Password</label>
        </div>

        <div>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            @click="validate()"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import Validation from "@/utils/Validation";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    validate() {
      Validation.validate();
      this.login();
    },
    login() {
      var validated = document.querySelector(".needs-validation");
      if (validated.checkValidity()) {
        console.log("Validation succeeded");
        AuthService.login(JSON.stringify(this.credentials));
      } else {
        console.log("Validation failed");
      }
    },
  },
};
</script>

<style scoped>
.main-form {
  height: 100vh;
}

.main-form {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>