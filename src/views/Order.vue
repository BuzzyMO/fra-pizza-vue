<template>
  <body class="bg-light">
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <h2>Order</h2>
        </div>

        <div class="row g-5 d-flex justify-content-center">
          <div class="col-md-7 col-lg-8">
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="city" class="form-label">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    placeholder=""
                    required=""
                    v-model="order.delivery.city"
                  />
                  <div class="invalid-feedback">City is required.</div>
                </div>

                <div class="col-sm-6">
                  <label for="street" class="form-label">Street</label>
                  <input
                    type="text"
                    class="form-control"
                    id="street"
                    placeholder=""
                    required=""
                    v-model="order.delivery.street"
                  />
                  <div class="invalid-feedback">Street is required.</div>
                </div>

                <div class="col-sm-6">
                  <label for="building" class="form-label">Building</label>
                  <input
                    type="text"
                    class="form-control"
                    id="building"
                    placeholder=""
                    required=""
                    v-model="order.delivery.building"
                  />
                  <div class="invalid-feedback">Building is required.</div>
                </div>

                <div class="col-sm-6">
                  <label for="appartment" class="form-label"
                    >Appartment
                    <span class="text-muted">(Optional)</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="appartment"
                    placeholder=""
                    v-model="order.delivery.appartment"
                  />
                </div>
              </div>

              <hr class="my-4" />

              <button
                class="w-100 btn btn-primary btn-lg"
                type="button"
                @click="createOrder()"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>

<script>
import Validation from "@/utils/Validation";
import OrderService from "@/services/OrderService";
import $store from "@/store";

export default {
  data() {
    return {
      order: {
        delivery: {
            city: "",
            street: "",
            building: "",
            appartment: "",
        },
        pizzas: [],
      },
    };
  },

  methods: {
    createOrder() {
      Validation.validate();
      var validated = document.querySelector(".needs-validation");
      if (validated.checkValidity()) {
        console.log("Validation succeeded");
        console.log(JSON.stringify(this.order));
        OrderService.createOrder(JSON.stringify(this.order))
          .then(() => this.$router.push("/"));
      } else {
        console.log("Validation failed");
      }
    },
  },
  created() {
    this.order.pizzas = $store.getters.pizzas.map((a) => a.id);
  }
};
</script>

<style scoped>
body {
  height: 100vh;
}
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