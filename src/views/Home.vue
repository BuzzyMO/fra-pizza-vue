<template>
  <div>
    <PizzaConstructor />
  </div>
  <div class="pizzas-form">
    <Pizzas />
  </div>
  <div>
    <span class="fs-3">Custom pizzas</span>
  <div class="pizzas-form">
    <CustomPizzas />
  </div>
  </div>
</template>

<script>
import Pizzas from "@/components/Pizzas.vue";
import PizzaConstructor from "@/components/PizzaConstructor.vue";
import CustomPizzas from "@/components/CustomPizzas.vue";

export default {
  name: "Home",
  components: {
    Pizzas,
    PizzaConstructor,
    CustomPizzas,
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
