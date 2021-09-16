
<template>
  <body>
    <span class="fs-3">Pizzerias</span>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">City</th>
          <th scope="col">Street</th>
          <th scope="col">Building</th>
          <th scope="col">Latitude</th>
          <th scope="col">Longitude</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="city"
              placeholder="city"
              required=""
              v-model="pizzeria.city"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="street"
              placeholder="street"
              required=""
              v-model="pizzeria.street"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="building"
              placeholder="building"
              required=""
              v-model="pizzeria.building"
            />
          </td>
          <td>auto</td>
          <td>auto</td>
          <td>
            <button class="w-50 btn btn-primary" type="button" @click="createPizzeria()">Create+</button>
          </td>
        </tr>
        <tr v-for="p in pizzerias" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="city"
              required=""
              :value="p.city"
              v-on:input="p.city = $event.target.value"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="street"
              required=""
              :value="p.street"
              v-on:input="p.street = $event.target.value"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="building"
              required=""
              :value="p.building"
              v-on:input="p.building = $event.target.value"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="latitude"
              required=""
              :value="p.latitude"
              v-on:input="p.latitude = $event.target.value"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="longitude"
              required=""
              :value="p.longitude"
              v-on:input="p.longitude = $event.target.value"
            />
          </td>
          <td>
            <button class="btn btn-outline-primary" type="button" @click="updatePizzeria(p.city, p.street, p.building, p.latitude, p.longitude)">Edit</button>
            <button class="btn btn-primary" type="button" @click="deleteIngredient(p.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script>
import PizzeriaService from "@/services/PizzeriaService";

export default {
  data() {
    return {
      pizzeria: {
        city: "",
        street: "",
        building: "",
      },

      pizzerias: [],
    };
  },

  methods: {
    getPizzerias() {
      PizzeriaService.getPizzerias().then((response) => {
        this.pizzerias = response.data;
      });
    },

    createPizzeria() {
      console.log('create: ' + JSON.stringify(this.pizzeria));
      PizzeriaService.createPizzeria(this.pizzeria);
    },

    updatePizzeria(id, city, street, building, latitude, longitude) {
        var updPizzeria = {
            city: city,
            street: street,
            building: building,
            latitude: latitude,
            longitude: longitude,
        }
      console.log('update: ' + id + ' json: ' + updPizzeria);
      PizzeriaService.updatePizzeria(id, updPizzeria);
    },

    deletePizzeria(id) {
      console.log('delete: ' + id);
      PizzeriaService.deletePizzeria(id);
    }
  },
  created() {
    this.getPizzerias();
  },
};
</script>