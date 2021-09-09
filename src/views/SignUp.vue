<template>
  <body class="bg-light">
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <!--            <img class="d-block mx-auto mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72"-->
          <!--                 height="57">-->
          <h2>Sign Up</h2>
        </div>

        <div class="row g-5 d-flex justify-content-center">
          <div class="col-md-7 col-lg-8">
            <!--                <h4 class="mb-3">Billing address</h4>-->
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    required=""
                    v-model="payload.firstName"
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    required=""
                    v-model="payload.lastName"
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="email" class="form-label">Email </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    v-model="payload.email"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="password" class="form-label">Password </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder=""
                    required=""
                    v-model="payload.password"
                  />

                  <div class="invalid-feedback">Password is required.</div>
                </div>

                <div class="col-12">
                  <label for="phoneNumber" class="form-label"
                    >Phone number
                    <span class="text-muted">(Optional)</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    placeholder="+380..."
                    v-model="payload.phoneNumber"
                  />
                </div>
              </div>

              <hr class="my-4" />

              <button
                class="w-100 btn btn-primary btn-lg"
                type="submit"
                @click="validate()"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>

<script>
import SignUpService from "@/services/SignUpService";

export default {
  name: "Payload",
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
      },
    };
  },

  methods: {
    validate() {
      "use strict";
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
      this.postUser();
    },
    postUser() {
      var validated = document.querySelector(".needs-validation");
      if (validated.checkValidity()) {
        console.log("Validation succeeded");
        console.log(this.payload);
        SignUpService.postUser(this.payload)
          .then((response) => {
            console.log(response.status);
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      } else {
        console.log("Validation failed");
      }
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.g-3 {
  text-align: left;
}
</style>



