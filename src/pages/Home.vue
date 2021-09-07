<template>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <link
      href="https://getbootstrap.com/docs/5.1/examples/carousel/carousel.css"
      rel="stylesheet"
    />
    <!--  <title>{{title}}</title>-->
  </head>
  <body>
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
              <a href="#" class="nav-link px-2 link-secondary">Overview</a>
            </li>
            <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" class="btn btn-primary">Sign-up</button>
          </div>

          <!--                        <div class="dropdown text-end">-->
          <!--                            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">-->
          <!--                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">-->
          <!--                            </a>-->
          <!--                            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">-->
          <!--                                <li><a class="dropdown-item" href="#">New project...</a></li>-->
          <!--                                <li><a class="dropdown-item" href="#">Settings</a></li>-->
          <!--                                <li><a class="dropdown-item" href="#">Profile</a></li>-->
          <!--                                <li><hr class="dropdown-divider"></li>-->
          <!--                                <li><a class="dropdown-item" href="#">Sign out</a></li>-->
          <!--                            </ul>-->
          <!--                        </div>-->
        </div>
      </div>
      <!--    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">-->
      <!--        <div class="container-fluid">-->
      <!--            <a class="navbar-brand" href="#">Carousel</a>-->
      <!--            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">-->
      <!--                <span class="navbar-toggler-icon"></span>-->
      <!--            </button>-->
      <!--            <div class="collapse navbar-collapse" id="navbarCollapse">-->
      <!--                <ul class="navbar-nav me-auto mb-2 mb-md-0">-->
      <!--                    <li class="nav-item">-->
      <!--                        <a class="nav-link active" aria-current="page" href="#">Home</a>-->
      <!--                    </li>-->
      <!--                    <li class="nav-item">-->
      <!--                        <a class="nav-link" href="#">Link</a>-->
      <!--                    </li>-->
      <!--                    <li class="nav-item">-->
      <!--                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
      <!--                    </li>-->
      <!--                </ul>-->
      <!--                <form class="d-flex">-->
      <!--                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
      <!--                    <button class="btn btn-outline-success" type="submit">Search</button>-->
      <!--                </form>-->
      <!--            </div>-->
      <!--        </div>-->
      <!--    </nav>-->
    </header>
    <main>
      <!-- Marketing messaging and featurettes
  ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
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

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
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

            <h2>Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
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

            <h2>Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </main>
  </body>
</template>

<script lang="ts">
// import ArticlesList from 'src/components/ArticlesList.vue'
// import PopularTags from 'src/components/PopularTags.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage',
  // components: {
    // ArticlesList,
    // PopularTags,
  // },
})
</script>