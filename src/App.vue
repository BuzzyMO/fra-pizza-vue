<template>
  <header class="p-1 mb-3 border-bottom fixed-top bg-white">
    <div class="container">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-2 mb-lg-0
            text-dark text-decoration-none
          "
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>

        <ul
          class="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
        >
          <li>
            <router-link to="/" class="nav-link px-2 link-secondary"
              >Home</router-link
            >
          </li>
          <!-- <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li> -->
          <!-- <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li> -->
          <!-- <li><a href="#" class="nav-link px-2 link-dark">Products</a></li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Cart</a
            >
            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                v-for="pizza in cartPizzas"
                v-bind:key="pizza.id"
              >
                {{ pizza.name }}
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="/order" class="dropdown-item text-center"
                  >Order</router-link
                >
              </li>
            </ul>
          </li>
          <div v-if="isLogged && isAdmin">
            <li>
              <router-link
                to="/admin/ingredients"
                class="nav-link px-2 link-secondary text-danger"
                >Ingredients</router-link
              >
            </li>
          </div>
        </ul>

        <div class="col-md-3 text-end" id="auth" v-if="!isLogged">
          <router-link
            to="/login"
            type="button"
            class="btn btn-outline-primary me-2"
          >
            Login
          </router-link>
          <router-link
            to="/registration"
            type="button"
            class="btn btn-primary me-2"
          >
            Sign-up
          </router-link>
        </div>
        <div class="" id="logged" v-if="isLogged">
          <button type="button" class="btn btn-primary" @click="logout()">
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
  <router-view />
  <footer class="mt-5 mb-3 text-muted">© 2021 FraPizza</footer>
</template>

<script>
import AuthService from "@/services/AuthService";
import $store from "@/store";
import { VueCookieNext } from "vue-cookie-next";

export default {
  data() {
    return {
      isLogged: false,
      isAdmin: false,
      cartPizzas: [],
    };
  },

  methods: {
    logout() {
      console.log("111");
      AuthService.logout();
      this.$router.push("/");
    },
    checkAuthorities() {
      AuthService.readUserAuthorities().then((response) => {
        let values = response.data.filter((a) => a.value === "ROLE_ADMIN");
        console.log(values);
        if (values.length > 0) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      });
    },
  },

  created() {
    this.cartPizzas = $store.getters.pizzas;

    var sessionCookie = VueCookieNext.isCookieAvailable("vertx-web.session");
    if (sessionCookie) {
      this.isLogged = true;
      this.checkAuthorities();
    } else {
      this.isLogged = false;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  padding-top: 40px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
