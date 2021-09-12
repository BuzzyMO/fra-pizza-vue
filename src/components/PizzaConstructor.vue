<template>
  <button
    class="w-100 btn btn-primary btn-lg"
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#myModal"
  >
    PizzaConstructor
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Constructor</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li
              class="list-group-item d-flex bd-highlight lh-sm"
              v-for="ingredient in ingredients"
              v-bind:key="ingredient.id"
            >
              <input
                class="form-check-input me-1 bd-highlight"
                type="checkbox"
                :value="ingredient"
                aria-label="..."
                v-model="selectedIngredients"
              />
              <div class="flex-grow-1 bd-highlight">
                <h6 class="my-0 align-items-left">
                  {{ ingredient.name }}
                </h6>
              </div>
              <span class="text-muted"> ${{ ingredient.cost }} </span>
            </li>
            <li class="list-group-item d-flex bd-highlight">
              <span class="flex-grow-1 bd-highlight"> Total(USD): </span>
              <strong class="bd-highlight">${{ currentPrice() }}</strong>
            </li>
          </ul>
          <!-- <Ingredients /> -->
        </div>
        <div class="modal-footer">
          <!-- <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button> -->
          <form class="needs-validation" novalidate>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Pizza description"
                required=""
                v-model="pizzaDescription"
              />
            </div>
            
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Pizza name"
                required=""
                v-model="pizzaName"
              />
              <button
                type="button"
                class="btn btn-secondary"
                @click="createPizza()"
              >
                Save
              </button>
            </div>
          </form>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientService from "../services/IngredientService";
import PizzaService from "@/services/PizzaService";
import Validation from "@/utils/Validation";

export default {
  data() {
    return {
      ingredients: [],
      selectedIngredients: [],
      pizzaName: "",
      pizzaDescription: "",
      //   pizzaIngredients: {
      //       pizza: "",
      //       ingredients: this.selectedIngredients,
      //   },
    };
  },
  methods: {
    getIngredients() {
      IngredientService.getIngredients().then((response) => {
        this.ingredients = response.data;
      });
    },

    createPizza() {
      Validation.validate();
      var idIngredients = this.selectedIngredients.map((a) => a.id);
      var validated = document.querySelector(".needs-validation");
      if (validated.checkValidity()) {
        var pizzaIngredients = {
          pizza: {
            name: this.pizzaName,
            description: this.pizzaDescription,
          },
          ingredients: idIngredients,
        };
        console.log(JSON.stringify(pizzaIngredients));
        PizzaService.createPizza(pizzaIngredients);
      } else {
        console.log("Validation failed");
      }
    },

    currentPrice() {
      var costIngredients = this.selectedIngredients.map((a) => a.cost);
      return costIngredients.reduce(function (a, b) {
        return a + b;
      }, 0);
    },
  },
  created() {
    this.getIngredients();
  },
};
</script>

<style scoped>
.modal-body {
  text-align: left;
}
</style>