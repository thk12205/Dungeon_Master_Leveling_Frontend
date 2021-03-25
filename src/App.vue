<template>
  <div id="app">
    <!-- Navbar -->
    <nav
      class="py-3 navbar navbar-expand-lg navbar-light bg-white shadow navbar-autohide"
    >
      <div class="container">
        <!-- brand / logo -->
        <a class="navbar-brand" href="index.html">
          <img
            src="../demo.files/logo/logo_dark.png"
            width="136"
            height="40"
            alt="..."
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMainContent"
          aria-controls="navbarMainContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMainContent">
          <!-- mobile close -->
          <div
            class="d-flex d-lg-none pb-3 justify-content-between align-items-center"
          >
            <img
              src="../demo.files/logo/logo_dark.png"
              width="136"
              height="40"
              alt="..."
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMainContent"
              aria-controls="navbarMainContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                height="28px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link px-3" href="/">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link px-3" href="/about/">About</a>
            </li>

            <li class="nav-item dropdown dropdown-hover">
              <a
                class="nav-link px-3 dropdown-toggle"
                href="#"
                id="navbarLanding"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>

              <ul
                class="dropdown-menu dropdown-animate shadow-lg p-3"
                aria-labelledby="navbarLanding"
              >
                <li v-if="loggedIn()">
                  <a class="dropdown-item" href="/profile/">My Profile</a>
                </li>
                <li v-if="!loggedIn()">
                  <a class="dropdown-item" href="/login/">Login</a>
                </li>
                <li v-if="!loggedIn()" class="dropdown-divider"></li>
                <li v-if="!loggedIn()">
                  <a class="dropdown-item" href="/signup/">Sign Up</a>
                </li>
                <li v-if="loggedIn()" class="dropdown-divider"></li>
                <li v-if="loggedIn()">
                  <a class="dropdown-item" href="/logout/">Logout</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown dropdown-hover">
              <a
                class="nav-link px-3 dropdown-toggle"
                href="#"
                id="navbarBlog"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>

              <ul
                class="dropdown-menu dropdown-animate shadow-lg p-3 dropdown-menu-pos"
                aria-labelledby="navbarBlog"
              >
                <li>
                  <a class="dropdown-item" href="../categories/STR"
                    >STR - Monsters, Combat, Challenges
                  </a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="../categories/DEX"
                    >DEX - Improvization and Organization</a
                  >
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="../categories/CON"
                    >CON - World Building and Plot</a
                  >
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="../categories/INT"
                    >INT - Rules, Gold, and Balance</a
                  >
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="../categories/WIS"
                    >WIS - Player and Table Management</a
                  >
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="../categories/CHA"
                    >CHA - Characters: The Good, The Bad, The Ugly</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link px-3" href="../articles/new/"
                >Submit Article</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br />
    <!-- /Navbar -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="overlay overlay-opacity-75 py-4">
        <div class="container">
          <div class="row">
            <div class="col order-2 order-lg-1">
              <p class="small m-0 d-none d-md-block">
                Copyright &copy; Company LLC. All rights reserved.
              </p>
            </div>
            <div class="col-12 col-md-3 order-1 order-lg-2 text-end">
              <a
                href="#!"
                class="text-gray-500 d-inline-grid gap-auto-3 text-white text-decoration-none"
                data-scrollto='{"offsetTop":0}'
              >
                <span class="w-100">Top</span
                ><!-- Go to top -->
                <svg
                  class="transform-flip-x-rtl"
                  height="18px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container pb-4">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 py-5 small">
            <h4 class="h5 mb-4 fw-normal">Contact Us</h4>
            <p>
              Atropos is a responsive multipurpose template, created to help you
              build new projects in no time! Clean, fast, simple!
            </p>

            <div class="d-flex align-items-start my-3">
              <svg
                class="me-3 flex-none my-1"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <ul class="list-unstyled p-0 m-0 w-100">
                <li>PO Box 21132</li>
                <li>Here Weare St, Melbourne</li>
                <li>Vivas 2355 Australia</li>
              </ul>
            </div>

            <div class="d-flex align-items-start my-3">
              <svg
                class="me-3 flex-none my-1"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <ul class="list-unstyled p-0 m-0 w-100">
                <li>
                  Phone:
                  <a href="tel:18005652390" class="text-white text-dashed"
                    >1-800-565-2390</a
                  >
                </li>
                <li>
                  Email:
                  <a
                    href="mail:myemail@gmail.com"
                    class="text-white text-dashed"
                    >myemail@gmail.com</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="col overlay overlay-opacity-75 rounded-bottom overflow-hidden py-4 d-none d-lg-flex flex-column align-items-center justify-content-center"
          >
            <img
              width="200"
              class=""
              src="../demo.files/logo/logo_symbol.png"
              alt="..."
            />
            <h4 class="fw-normal">ATROPOS TEMPLATE</h4>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 py-5">
            <div class="row">
              <div class="col-6 px-4 text-start">
                <h4 class="h5 mb-4 fw-normal text-gray-500">Company</h4>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">Careers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">Customers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">Return Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 px-4 text-end">
                <h4 class="h5 mb-4 fw-normal text-gray-500">Resources</h4>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">My Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="#">Terms &amp; Privacy</a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- social icons -->
            <div class="clearfix d-inline-grid gap-auto-1 mt-4">
              <!-- social : facebook -->
              <a
                href="#!"
                rel="noopener"
                class="transition-top-hover lh-1 btn btn-secondary btn-sm rounded-circle p-2 text-white"
                title="facebook"
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path>
                </svg>
              </a>
              <!-- social : twitter -->
              <a
                href="#!"
                rel="noopener"
                class="transition-top-hover lh-1 btn btn-secondary btn-sm rounded-circle p-2 text-white"
                title="twitter"
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
              </a>
              <!-- social : instagram -->
              <a
                href="#!"
                rel="noopener"
                class="transition-top-hover lh-1 btn btn-secondary btn-sm rounded-circle p-2 text-white"
                title="instagram"
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <!-- social : linkedin -->
              <a
                href="#!"
                rel="noopener"
                class="transition-top-hover lh-1 btn btn-secondary btn-sm rounded-circle p-2 text-white"
                title="linkedin"
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <!-- icon : mail -->
              <a
                href="#!"
                rel="noopener"
                class="transition-top-hover lh-1 btn btn-secondary btn-sm rounded-circle p-2 text-white"
                title="mail"
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- /Footer -->
  </div>
</template>

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
</style>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    loggedIn: function() {
      return localStorage.jwt;
    },
    getUserID: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
