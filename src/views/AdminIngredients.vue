<template>
  <body>
    <span class="fs-3">Ingredients</span>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Cost $</th>
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
              id="name"
              placeholder="name"
              required=""
              v-model="ingredient.name"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="cost"
              placeholder="cost"
              required=""
              v-model="ingredient.cost"
            />
          </td>
          <td>
            <button class="w-50 btn btn-primary" type="button" @click="createIngredient()">Create+</button>
          </td>
        </tr>
        <tr v-for="ingr in ingredients" v-bind:key="ingr.id">
          <td>{{ ingr.id }}</td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="name"
              required=""
              :value="ingr.name"
              v-on:input="ingr.name = $event.target.value"
            />
          </td>
          <td>
            <input
              type="text"
              class="text-center form-control input-group-text"
              id="cost"
              required=""
              :value="ingr.cost"
              v-on:input="ingr.cost = $event.target.value"
            />
          </td>
          <td>
            <button class="btn btn-outline-primary" type="button" @click="updateIngredient(ingr.id, ingr.name, ingr.cost)">Edit</button>
            <button class="btn btn-primary" type="button" @click="deleteIngredient(ingr.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script>
import IngredientsService from "@/services/IngredientService";

export default {
  data() {
    return {
      ingredient: {
        name: "",
        cost: "",
      },

      ingredients: [],
    };
  },

  methods: {
    getIngredients() {
      IngredientsService.getIngredients().then((response) => {
        this.ingredients = response.data;
      });
    },

    createIngredient() {
      IngredientsService.createIngredient(this.ingredient);
    },

    updateIngredient(id, name, cost) {
      IngredientsService.updateIngredient(id, {name:name,cost:cost});
    },

    deleteIngredient(id) {
      IngredientsService.deleteIngredient(id);
    }
  },
  created() {
    this.getIngredients();
  },
};
</script>

