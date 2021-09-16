
<template>
  <div class="container marketing">
    <div class="row">
      <div class="col-lg-4 card" style="width: 18rem;" v-for="o in orders" v-bind:key="o.id">
        <ul class="text-start list-group list-group-flush">
          <li class="list-group-item">ID: {{ o.order_id }}</li>
          <li class="list-group-item">Ordered at: {{ o.ordered_at }}</li>
          <li class="list-group-item">Pizza name: {{ o.pizza_name }}</li>
          <li class="list-group-item">Pizzeria: {{ o.pizzeria_from }}</li>
          <li class="list-group-item">City: {{ o.city }}</li>
          <li class="list-group-item">Street: {{ o.street }}</li>
          <li class="list-group-item">Building: {{ o.building }}</li>
          <li class="list-group-item">Apartment: {{ o.apartment }}</li>
          <li class="list-group-item">Distance: {{ o.distance_m }}m</li>
          <li class="list-group-item">Expection delivery time: {{ o.exp_time }}min</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import OrderService from '@/services/OrderService';

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    readUserOrders() {
      OrderService.readUserOrders().then((response) => {
        this.orders = response.data;
      });
    },
  },
  created() {
      this.readUserOrders();
  },
};
</script>