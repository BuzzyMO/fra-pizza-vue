<template>
  <div v-if="isLogged">
    <PizzaConstructor />
  </div>
  <div class="pizzas-form">
    <Pizzas />
  </div>
  <div v-if="isLogged">
    <span class="fs-3">Custom pizzas</span>
    <div class="pizzas-form">
      <CustomPizzas />
      <UserOrders />
    </div>
  </div>
</template>

<script>
import Pizzas from "@/components/Pizzas.vue";
import PizzaConstructor from "@/components/PizzaConstructor.vue";
import CustomPizzas from "@/components/CustomPizzas.vue";
import UserOrders from '@/components/UserOrders.vue';
import { VueCookieNext } from "vue-cookie-next";

export default {
  name: "Home",
  data() {
    return {
      isLogged: false,
    };
  },
  components: {
    Pizzas,
    PizzaConstructor,
    CustomPizzas,
    UserOrders,
  },
  created() {
    var sessionCookie = VueCookieNext.isCookieAvailable("vertx-web.session");
    if (sessionCookie) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  },
};
</script>

<style scoped>
.pizzas-form {
  height: 100%;
}

.pizzas-form {
  display: flex;
  padding-top: 40px;
  background-color: #f5f5f5;
}

/* .custom-pizza-form */
</style>
