<template>
  <div class="pizzas-form">
    <Pizzas />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Pizzas from "@/components/Pizzas.vue";

export default {
  name: "Home",
  components: {
    Pizzas,
  },
};
</script>

<style scoped>
.pizzas-form {
  height: 95vh;
}

.pizzas-form {
  display: flex;
  padding-top: 40px;
  background-color: #f5f5f5;
}
</style>
