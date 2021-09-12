<template>
  <link
    href="https://getbootstrap.com/docs/5.1/examples/carousel/carousel.css"
    rel="stylesheet"
  />
  <div class="container marketing">
    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4" v-for="pizza in pizzas" v-bind:key="pizza.id">
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 140x140"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
        </svg>

        <h2>{{ pizza.name }}</h2>
        <p>{{ pizza.description }}.</p>
        <button class="btn btn-secondary" @click="toCart({id: pizza.id, name:pizza.name })">Add to cart +</button>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import PizzaService from "../services/PizzaService";
import $store from "../store";

export default {
  name: "Pizzas",
  data() {
    return {
      pizzas: [],
    };
  },
  methods: {
    getPizzas() {
      PizzaService.getPizzas().then((response) => {
        this.pizzas = response.data;
      });
    },
    toCart(pizza) {
      $store.dispatch("addItem", pizza);
    },
  },
  created() {
    this.getPizzas();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
