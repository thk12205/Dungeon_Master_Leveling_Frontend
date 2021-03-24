<template>
  <div class="home">
    <!-- search : pusher -->
    <div id="main-search" class="bg-gray-200 collapse">
      <div class="container position-relative">
        <!-- close button -->
        <div class="position-absolute top-0 end-0 p-2 d-inline-grid gap-auto-2">
          <span class="text-muted">close</span>
          <button
            class="btn-close p-2"
            data-bs-toggle="collapse"
            data-bs-target="#main-search"
          ></button>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto py-5">
            <!-- form -->
            <form
              method="get"
              action="#"
              class="d-block bg-white shadow p-2 mt-5 mt-lg-3 rounded d-flex"
            >
              <!-- input -->
              <input
                required=""
                type="text"
                name="keyword"
                class="form-control shadow-none border-0"
                placeholder="search..."
                aria-label="search..."
                aria-describedby="button-search"
              />
              <!-- submit button -->
              <button
                type="submit"
                class="btn btn-primary px-4 shadow-none"
                id="button-search"
              >
                <svg
                  width="18px"
                  height="18px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span class="d-none d-md-inline-block">search</span
                ><!-- hidden on mobile -->
              </button>
            </form>

            <!-- recent searches -->
            <ul class="list-inline small text-muted my-2">
              <li class="list-inline-item fw-medium">Recent:</li>
              <li class="list-inline-item">
                <a href="#!" class="link-muted">white headphone</a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="link-muted">panasonic ws-100</a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="link-muted">libratone</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <section class="py-0">
      <div
        class="embla"
        data-embla='{
            "slidesToScroll":   1,
            "loop":             true,
            "dragFree":         false,
            "autoPlay":         4000
      }'
      >
        <div class="embla__viewport">
          <div class="embla__container vh-75">
            <!-- vh-100, vh-75, vh-50, vh-25 -->

            <a
              href="#!"
              class="embla__slide d-flex flex-column align-items-center justify-content-start text-white w-100 h-100 px-5 py-7 overlay-dark overlay-opacity-5 bg-cover"
              style="background-image: url(/../../public/assets/demo.files/images/unsplash/product_various/william-bayreuther-pM4fy8F_FHo-unsplash.jpg)"
            >
              <div class="d-inline-block text-start text-shadow-lg">
                <h1 class="display-1 fw-bold mb-0">Beats Pill</h1>
                <p class="text-end">
                  <span class="text-warning">30% OFF</span> LIMITED EDITION
                </p>
              </div>
            </a>

            <a
              href="#!"
              class="embla__slide d-flex flex-column align-items-center justify-content-center text-white w-100 h-100 px-5 py-7 overlay-dark overlay-opacity-5 bg-cover"
              style="background-image: url(/../../public/assets/demo.files/images/unsplash/product_various/john-soo-ZGL0DS7Z5Mw-unsplash.jpg)"
            >
              <div class="d-inline-block text-start text-shadow-lg">
                <span class="text-warning">LIMITED EDITION</span>
                <h2 class="display-1 fw-bold mb-0">Libratone</h2>
                <p class="lead text-end">premium &bull; 18% discount</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Buttons -->
        <button
          class="embla__button embla__button--prev embla__button--over embla__button--autohide"
          type="button"
          aria-label="Carousel Prev"
        >
          <svg
            class="text-white"
            stroke="#111111"
            fill="currentColor"
            width="30px"
            height="30px"
            viewBox="137.718 -1.001 366.563 643.999"
          >
            <path
              d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
            ></path>
          </svg>
        </button>
        <button
          class="embla__button embla__button--next embla__button--over embla__button--autohide"
          type="button"
          aria-label="Carousel Next"
        >
          <svg
            class="text-white"
            stroke="#111111"
            fill="currentColor"
            width="30px"
            height="30px"
            viewBox="0 0 238.003 238.003"
          >
            <path
              d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
            ></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- info box -->
    <div class="container position-relative mt-n5 mt-sm-n6">
      <div class="bg-white rounded shadow-xs-secondary p-4 py-sm-5">
        <div class="row g-4 align-items-center">
          <div class="col-md-4">
            <div class="d-inline-grid gap-auto-3 text-gray-500">
              <svg
                width="50px"
                height="50px"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 424.98 424.98"
              >
                <path
                  d="M241.395 282.304c-1.587-1.738-3.595-3.038-5.67-4.121-4.518-2.356-9.459-3.785-14.365-5.075v38.016c7.963-.9 17.105-3.79 21.286-11.224 1.996-3.551 2.393-7.914 1.58-11.867-.441-2.142-1.352-4.108-2.831-5.729zM242.604 299.973l.042-.073-.042.073zM184.009 221.532c-1.369 1.999-2.228 4.27-2.465 6.684-.237 2.419-.104 5.11.815 7.387.875 2.17 2.708 3.772 4.6 5.062 2.123 1.444 4.458 2.572 6.836 3.528 1.995.803 4.239 1.571 6.658 2.313v-34.4c-6.111 1.304-12.788 4.088-16.444 9.426zM242.804 299.619l-.157.28.157-.28zM243.004 299.263zM234.753 92.469c32.329-27.158 53.931-88.341 40.637-91.017-17.664-3.557-56.022 12.04-74.562 14.788-26.296 3.175-54.936-28.515-71.012-10.851-13.071 14.362 9.371 66.592 44.482 89.346-104.752 51.484-251.988 309.938 4.873 328.691 355.411 25.949 177.444-280.787 55.582-330.957zm30.523 203.829c-1.093 10.076-6.433 19.188-14.415 25.374-8.428 6.532-18.999 9.57-29.502 10.421v11.133c0 2.979-1.301 5.86-3.531 7.832-3.065 2.712-7.569 3.381-11.289 1.667-3.673-1.69-6.086-5.457-6.086-9.499v-12.168c-1.801-.342-3.589-.749-5.356-1.234-9.816-2.697-18.921-7.954-25.572-15.732-3.313-3.877-6.014-8.276-7.882-13.025-.488-1.241-.923-2.505-1.304-3.783-.345-1.157-.701-2.333-.824-3.539-.207-2.023.194-4.087 1.137-5.889 1.938-3.707 6.022-5.946 10.192-5.574 4.104.364 7.701 3.212 8.993 7.124.398 1.205.668 2.44 1.115 3.632.443 1.184.978 2.335 1.607 3.431 1.242 2.158 2.798 4.148 4.59 5.875 3.694 3.559 8.399 5.872 13.304 7.248v-41.362c-9.591-2.483-19.491-5.69-27.411-11.848-3.849-2.994-7.115-6.714-9.254-11.117-2.257-4.647-3.192-9.824-3.23-14.966-.039-5.221.953-10.396 3.131-15.153 2.04-4.454 4.977-8.453 8.578-11.768 7.7-7.087 17.928-11.04 28.187-12.492v-11.557c0-2.978 1.301-5.86 3.531-7.832 3.066-2.711 7.568-3.381 11.289-1.667 3.672 1.691 6.086 5.457 6.086 9.499v11.494c1.367.172 2.73.378 4.086.624 10.074 1.823 19.927 5.983 27.294 13.246 3.49 3.44 6.347 7.539 8.356 12.009.561 1.247 1.052 2.523 1.477 3.824.396 1.213.794 2.462.983 3.728.302 2.021-.006 4.109-.871 5.958-1.772 3.788-5.746 6.2-9.927 6.021-4.108-.179-7.83-2.854-9.301-6.694-.438-1.142-.657-2.351-1.104-3.49-.451-1.153-1.035-2.253-1.708-3.292-1.308-2.02-3.003-3.752-4.938-5.179-4.19-3.094-9.272-4.706-14.35-5.607v39.582c6.035 1.445 12.075 3.021 17.857 5.301 8.739 3.446 17.02 8.73 21.79 17.062l.025.043c1.458 2.56.762 1.34.03.057 3.795 6.688 5.042 14.685 4.217 22.282zM242.493 300.169l-.156.278.156-.278z"
                ></path>
              </svg>
              <div class="my-2">
                <h2 class="h5 fw-medium mb-0 text-gray-800">Money Back</h2>
                <p class="m-0">30-days money back</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="d-inline-grid gap-auto-3 text-gray-500">
              <svg
                width="50px"
                height="50px"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 612 612"
              >
                <path
                  d="M226.764 375.35c-28.249 0-51.078 22.91-51.078 51.16 0 28.166 22.829 51.078 51.078 51.078s51.078-22.912 51.078-51.078c-.001-28.25-22.829-51.16-51.078-51.16zm0 76.699c-14.125 0-25.54-11.498-25.54-25.541 0-14.123 11.415-25.539 25.54-25.539 14.124 0 25.539 11.416 25.539 25.539-.001 14.043-11.415 25.541-25.539 25.541zm385.236-114.488v54.541c0 13.605-11.029 24.635-24.636 24.635h-26.36c-4.763-32.684-32.929-57.812-66.927-57.812-33.914 0-62.082 25.129-66.845 57.812h-133.607c-4.763-32.684-32.93-57.812-66.845-57.812s-62.082 25.129-66.844 57.812h-33.012c-13.606 0-24.635-11.029-24.635-24.635v-54.541h509.711zm-117.857 37.789c-28.249 0-51.16 22.91-51.16 51.16 0 28.166 22.912 51.078 51.16 51.078 28.166 0 51.077-22.912 51.077-51.078 0-28.25-22.911-51.16-51.077-51.16zm0 76.699c-14.125 0-25.539-11.498-25.539-25.541 0-14.123 11.414-25.539 25.539-25.539 14.042 0 25.539 11.416 25.539 25.539 0 14.043-11.497 25.541-25.539 25.541zm108.15-169.412l-96.817-95.751c-6.159-6.077-14.453-9.526-23.076-9.526h-48.86v-18.313c0-13.631-11.004-24.635-24.635-24.635h-281.998c-13.55 0-24.635 11.005-24.635 24.635v3.86l-99.972 11.522 177.146 23.068-179.446 17.826 178.814 25.423-178.814 15.504 102.278 19.29-.007 48.403h509.712v-17.985c0-8.787-3.531-17.162-9.69-23.321zm-42.209 3.202h-93.697c-2.135 0-3.86-1.724-3.86-3.859v-72.347c0-2.135 1.725-3.86 3.86-3.86h17.82c.985 0 1.971.411 2.71 1.068l75.796 72.347c2.544 2.381.819 6.651-2.629 6.651z"
                ></path>
              </svg>
              <div class="my-2">
                <h2 class="h5 fw-medium mb-0 text-gray-800">Free Shipping</h2>
                <p class="m-0">Shipping is on us</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="d-inline-grid gap-auto-3 text-gray-500">
              <svg
                width="50px"
                height="50px"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 612 612"
                enable-background="new 0 0 612 612"
              >
                <path
                  d="M339.296 19.573c-92.187 0-173.778 46.021-223.165 116.25 10.221 6.668 20.184 15.812 29.82 27.567 36.844-55.091 96.417-93.743 165.344-102.052l27.997 47.377 27.997-47.378c105.952 12.769 190.17 96.983 202.945 202.934l-47.385 28.001 47.386 28.002c-8.54 70.836-49.108 131.821-106.661 168.372 3.666 8.357 5.731 16.902 6.096 25.712.269 6.438-.395 12.521-1.73 18.296 85.669-46.032 144.06-136.501 144.06-240.377 0-150.373-122.331-272.704-272.704-272.704zm69.591 449.117c-62.865-50.523-80.444-25.688-108.968 2.832-19.914 19.921-70.308-21.678-113.821-65.193-43.516-43.521-85.107-93.907-65.195-113.824 28.526-28.521 53.354-46.11 2.817-108.958-50.52-62.871-84.198-14.603-111.829 13.03-31.9 31.889-1.681 150.726 115.769 268.194 117.466 117.452 236.302 147.651 268.183 115.774 27.628-27.634 75.91-61.308 13.044-111.855zm-191.461-133.736c0-55.88 65.42-65.835 65.42-87.641 0-10.581-8.47-15.023-16.304-15.023-14.397 0-22.434 16.083-22.434 16.083l-27.521-18.415s13.973-32.6 53.346-32.6c24.766 0 51.65 14.185 51.65 46.36 0 47.208-60.968 56.314-62.028 75.789h64.36v31.751h-104.792c-1.061-5.926-1.697-11.215-1.697-16.304zm121.965-42.755l58.434-92.305h45.301v84.047h17.991v30.691h-17.991v36.628h-36.628v-36.628h-67.106v-22.433h-.001zm67.106-8.259v-33.871c0-8.258 1.272-16.94 1.272-16.94h-.424s-3.171 9.318-7.41 15.669l-22.857 34.72v.424l29.419-.002z"
                ></path>
              </svg>
              <div class="my-2">
                <h2 class="h5 fw-medium mb-0 text-gray-800">Free Support</h2>
                <p class="m-0">24/7 available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- best deals -->
    <section>
      <div class="container">
        <div class="mb-5">
          <div class="d-inline-block text-start">
            <span class="d-inline-grid gap-auto-2 text-primary">
              <span>BEST DEALS</span>
              <svg
                class="transform-flip-x-rtl"
                height="18px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
            <h2 class="mb-0"><b>30% OFF</b> this week</h2>
          </div>
        </div>

        <!-- product list -->
        <div class="row g-1 g-md-4">
          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/1-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >Sport Speakers CX</a
                >
                <div class="d-block">
                  <del class="text-muted fw-normal">$76.99</del>
                  <span class="text-dark fw-medium">$56.99</span>
                </div>
              </div>
              <!-- badge -->
              <div
                class="position-absolute top-0 start-0 p-3 z-index-1 text-start"
              >
                <span class="badge bg-success rounded-pill fw-normal"
                  >New arrival</span
                >
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/2-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >Audiophile Pioneer SRR</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$18.99</span>
                </div>
              </div>
              <!-- badge -->
              <div
                class="position-absolute top-0 start-0 p-3 z-index-1 text-start"
              >
                <span class="badge bg-danger rounded-pill fw-normal"
                  >sold out</span
                >
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/3-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >Sport Jabra Elite 75T</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$32.99</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/4-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >Speakers Klipsch RSB-6</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$22.99</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/5-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >Senheiser CX.88T</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$78.99</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/6-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >Audio Tehnics Hi-FI</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$43.99</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/7-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >On-Ear Bluetooth 2.0</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$12.99</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div
              class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
            >
              <figure class="ratio ratio-1x1">
                <span class="d-flex justify-content-center align-items-center">
                  <img
                    class="rounded-top h-100"
                    src="/../../public/assets/demo.files/images/products/speakers/8-min.jpg"
                    alt="..."
                  />
                </span>
              </figure>
              <div class="card-body py-4">
                <a
                  href="shop-product-single.html"
                  class="text-decoration-none stretched-link text-gray-700"
                  >PC/Gaming Audio Tehnics</a
                >
                <div class="d-block">
                  <span class="text-dark fw-medium">$31.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- brands -->
    <section class="pt-0">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-inline-block text-start">
            <span class="d-inline-grid gap-auto-2 text-primary">
              <span>POPULAR BRANDS</span>
              <svg
                class="transform-flip-x-rtl"
                height="18px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
            <h2>Your favourite brands are here</h2>
          </div>
        </div>

        <div class="col-10 offset-1 col-lg-8 offset-lg-2 text-center">
          <div class="row justify-content-center">
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/amazon.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/fitbit.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/hubspot.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/layar.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/slack.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/weebly.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/kaplan.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/airbnb.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/shopify.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/stripe.svg"
                alt="..."
              />
            </div>
            <div class="col-4 col-sm-2 py-2 py-sm-3">
              <img
                src="/../../public/assets/demo.files/svg/brands/embark.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- offers -->
    <section class="bg-gray-200">
      <div class="container">
        <div class="mb-5">
          <div class="d-inline-block text-start">
            <span class="d-inline-grid gap-auto-2 text-primary">
              <span>PEOPLE LOVE</span>
              <svg
                class="transform-flip-x-rtl"
                height="18px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
            <h2 class="mb-0"><b>Popular</b> Gadgets</h2>
          </div>
        </div>

        <div class="row g-4 g-lg-5">
          <div class="col-12 col-md-4">
            <div
              class="overflow-hidden rounded ratio ratio-1x1 overlay-dark overlay-opacity-5 overlay-opacity-50-hover bg-cover"
              style="background-image:url(/../../public/assets/demo.files/images/unsplash/product_various/julian-o-hayon-oW4tZeidfkA-unsplash-min.jpg)"
            >
              <div
                class="d-flex flex-column align-items-center justify-content-start position-absolute"
                data-jarallax-element="30"
              >
                <div
                  class="d-inline-block text-start text-white text-shadow px-3 py-5"
                >
                  <a
                    href="#!"
                    class="text-decoration-none stretched-link text-white"
                  >
                    <span>limited offer</span>
                    <svg
                      class="transform-flip-x-rtl"
                      height="18px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      ></path>
                    </svg>
                  </a>
                  <h4>Smart Watches</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div
              class="overflow-hidden rounded ratio ratio-1x1 overlay-dark overlay-opacity-5 overlay-opacity-50-hover bg-cover"
              style="background-image:url(/../../public/assets/demo.files/images/unsplash/product_various/julian-o-hayon-sDU_o416hlE-unsplash-min.jpg)"
            >
              <div
                class="d-flex flex-column align-items-center justify-content-center position-absolute"
                data-jarallax-element="30"
              >
                <div
                  class="d-inline-block text-start text-white text-shadow px-3 py-5"
                >
                  <a
                    href="#!"
                    class="text-decoration-none stretched-link text-white"
                  >
                    <span>limited offer</span>
                    <svg
                      class="transform-flip-x-rtl"
                      height="18px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      ></path>
                    </svg>
                  </a>
                  <h4>Waterproof</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div
              class="overflow-hidden rounded ratio ratio-1x1 overlay-dark overlay-opacity-5 overlay-opacity-50-hover bg-cover"
              style="background-image:url(/../../public/assets/demo.files/images/unsplash/product_various/julian-o-hayon-w4znns7NTA0-unsplash-min.jpg)"
            >
              <div
                class="d-flex flex-column align-items-center justify-content-end position-absolute"
                data-jarallax-element="30"
              >
                <div
                  class="d-inline-block text-start text-white text-shadow px-3 py-5"
                >
                  <a
                    href="#!"
                    class="text-decoration-none stretched-link text-white"
                  >
                    <span>limited offer</span>
                    <svg
                      class="transform-flip-x-rtl"
                      height="18px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      ></path>
                    </svg>
                  </a>
                  <h4>Smart TV</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- svg : divier -->
    <div class="divider-point-bl bg-gray-200"></div>

    <!-- subscribe -->
    <section class="py-2">
      <div class="container">
        <div class="row g-3 py-4 align-items-center">
          <div class="col-md-6 col-lg-8 mx-auto text-center text-md-start">
            <h3 class="m-0">
              Follow our <span class="text-primary">best deals</span>
            </h3>
            <p class="m-0 text-muted">
              Join to get notified when a best deal is prepared for you!
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mx-auto">
            <form method="post" action="#subscribe_url" class="py-4 mt-1">
              <div class="input-group rounded-pill">
                <input
                  required=""
                  type="email"
                  class="form-control"
                  placeholder="email address"
                  aria-label="Email address"
                  aria-describedby="button-subscribe"
                />
                <button
                  type="submit"
                  class="btn btn-light btn-soft text-gray-700 border shadow-none"
                  id="button-subscribe"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

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
              src="/../../public/assets/demo.files/logo/logo_symbol.png"
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

    <!-- sidebar : cart -->
    <aside
      id="sidebar-nav"
      class="sidebar sidebar-xl sidebar-float end-0 bg-white shadow h-auto d-flex flex-column align-items-stretch justify-content-lg-between"
    >
      <!-- sidebar : header -->
      <div
        class="d-flex px-3 py-4 justify-content-start align-items-center border-bottom border-light"
      >
        <button
          class="btn-close text-decoration-none"
          data-sow-hide="sidebar"
          data-sow-target="#sidebar-nav"
          aria-expanded="false"
          aria-label="Sidebar Close"
        ></button>
        <span class="ps-3 fs-5">My Cart</span>
      </div>

      <div
        class="d-flex flex-column align-items-stretch justify-content-lg-between h-100 overflow-hidden"
      >
        <div class="scrollable align-self-baseline h-100 w-100">
          <!-- item -->
          <div class="clearfix p-3 border-bottom border-light">
            <div class="d-flex">
              <!-- item image -->
              <img
                class="flex-none"
                width="60"
                src="/../../public/assets/demo.files/images/products/speakers/5-min.jpg"
                alt="..."
              />

              <div class="w-100 ps-4">
                <!-- remove item -->
                <a
                  href="#!"
                  class="float-end text-muted text-decoration-none lh-1 p-2 mt-n2"
                  aria-label="remove item"
                  title="remove item"
                >
                  <svg
                    height="16px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    ></path>
                  </svg>
                </a>

                <a
                  href="#!"
                  class="text-dark position-relative text-decoration-none"
                >
                  Sport Jabra Elite 75T
                </a>

                <div class="w-100 d-flex align-items-center">
                  <!-- item quantity -->
                  <input
                    value="3"
                    type="number"
                    class="form-control form-control-sm text-center shadow-none px-2"
                    style="width:70px"
                  />

                  <!-- item price -->
                  <div class="ms-3 clearfix px-2">
                    $226.00
                    <small class="d-block text-muted">$196.00 / item</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- gift -->
            <div class="clearfix py-2 d-inline-grid gap-auto-3">
              <svg
                class="text-success"
                height="16px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"
                ></path>
              </svg>
              <a href="#!" class="link-muted fw-light small text-truncate"
                >Gift for this product</a
              >
            </div>
          </div>
          <!-- /item -->

          <!-- empty cart -->
          <!--
          <div class="text-center text-muted px-3 py-5">
            <svg height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
              <path d="M443.188,442.208L415.956,142.56c-0.768-8.256-7.68-14.56-15.968-14.56h-48V96c0-25.728-9.952-49.888-28.032-67.968C305.876,9.952,281.716,0,255.988,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.82,442.208c-1.632,17.856,4.384,35.712,16.48,48.96S114.612,512,132.564,512h246.88c17.952,0,35.168-7.584,47.264-20.832S444.788,460.064,443.188,442.208z M191.988,96c0-35.296,28.704-64,64-64c17.184,0,33.28,6.624,45.344,18.656c12.064,12.032,18.656,28.16,18.656,45.344v32h-128V96z M403.06,469.6c-6.144,6.688-14.528,10.4-23.648,10.4H132.564c-9.088,0-17.504-3.712-23.616-10.432c-6.144-6.72-9.056-15.392-8.224-24.48L126.612,160h33.376v48c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-48h128v48c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-48h33.376l25.92,285.12C412.116,454.176,409.204,462.88,403.06,469.6z"/>
            </svg>
            <p class="lead mt-3 mb-2">Your cart is empty</p>
            <p class="small px-4">Before placing an order, please add products to your cart.</p>
          </div>
          -->
        </div>

        <!-- bottom -->
        <div class="align-self-baseline w-100 border-top">
          <!-- coupon / gift card -->
          <div class="border-bottom p-3">
            <a
              href="#asideCoupon"
              data-bs-toggle="collapse"
              class="text-decoration-none m-0 text-dark d-block d-flex align-items-center"
            >
              <span class="group-switch flex-none">
                <svg
                  height="16px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M5.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                  ></path>
                  <path
                    d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
                  ></path>
                </svg>
                <svg
                  height="20px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </span>
              <span class="w-100 ps-2">Coupon / Gift Card</span>
            </a>

            <div id="asideCoupon" class="collapse w-100">
              <div class="pt-3 w-100">
                <form class="form-validate" method="post" action="#">
                  <div class="input-group">
                    <input
                      required
                      type="text"
                      name="discount_code"
                      value=""
                      class="form-control form-control-sm"
                      placeholder="Coupon / Giftcard"
                      aria-label="Coupon / Gift Card"
                    />
                    <button class="btn btn-sm btn-warning">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="p-3">
            <!-- <div class="clearfix text-success mb-2">Free Shipping</div> -->
            <div class="clearfix text-muted mb-2">
              Shipping calculated on checkout
            </div>

            <div class="clearfix">
              Discount:
              <span class="float-end fw-medium">-$10.61</span>
            </div>

            <div class="clearfix fw-medium">
              Total:
              <span class="float-end fw-medium">$161.61</span>
            </div>

            <div class="d-grid pt-3">
              <a href="shop-checkout.html" class="btn btn-primary">
                <span>Checkout</span>
                <svg
                  class="transform-flip-x-rtl"
                  height="18px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- <script>
      document.addEventListener("DOMContentLoaded", function() {
        jarallax(document.querySelectorAll(".jarallax"));
      });
    </script> -->

    <h1>Dungeon Master Leveling!!</h1>

    <div v-for="category in categories" v-bind:key="category.id">
      <h4>{{ category.name }}</h4>
      <!-- CHANGE: put button into img later -->

      <router-link :to="`/categories/${category.name}`"
        ><button>
          Link to Category Page for {{ category.name }}
        </button></router-link
      >
      <img :src="category.img_url" alt="" />
      <br />
      <h4>===========================</h4>
      <div v-for="article in articles" v-bind:key="article.id">
        <div v-if="article.category_id == category.id">
          <h4>{{ article.title }}</h4>
          <!-- CHANGE: put button into img later -->
          <router-link :to="`/articles/${article.id}`"
            ><img
              :src="article.img_url"
              style="height:300px;max-width:500px"
              alt=""
          /></router-link>
          <br />
          <!-- <a :href="article.url">
            <img
              :src="article.img_url"
              style="height:300px;max-width:500px"
              alt=""
            />
          </a>
          <br /> -->
          source: {{ article.source }} <br />
          upvotes_total: {{ article.upvotes_total }} <br />
          <!-- CHANGE: put button into img later -->
          <!-- <img
            src="https://icon-library.com/images/small-thumbs-up-icon/small-thumbs-up-icon-16.jpg"
            alt=""
          /> -->
          <div v-if="$parent.loggedIn()">
            <div v-if="!article.upvoted">
              <button v-on:click="createUpvote(article)">
                Thumbs Up (see-through)
              </button>
            </div>
            <div v-if="article.upvoted">
              <button v-on:click="destroyUpvote(article)">
                Thumbs Down (opaque)
              </button>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      categories: [],
      articles: [],
    };
  },
  created: function() {
    axios.get("/api/categories").then((response) => {
      console.log(response.data);
      this.categories = response.data;
      // loop through categories, reference articles key, =+ to array
      var i = 0;
      var j = 0;
      while (i < this.categories.length) {
        j = 0;
        while (j < this.categories[i].articles.length) {
          console.log(this.categories[i].articles[j]);
          this.articles.push(this.categories[i].articles[j]);
          j += 1;
        }
        console.log("category shifted");
        i += 1;
      }
      console.log("Categories = ");
      console.log(this.categories);
      console.log("Articles = ");
      console.log(this.articles);
    });
  },
  methods: {
    createUpvote: function(article) {
      var params = {
        article_id: article.id,
        // user_id is set in backend create function as current_user.id, derived from the session jwt
      };
      axios.post("/api/upvotes", params).then((response) => {
        console.log(response.data);
        article.upvoted = true;
        article.upvotes_total++;
      });
      // .catch((error) => {
      //   this.errors = error.response.data.errors;
      //   this.status = error.response.status;
      // });
    },
    destroyUpvote: function(article) {
      console.log("destroyUpdate ran!!!!!!!!!");
      axios.delete(`/api/upvotes/${article.id}`).then((response) => {
        console.log(response.data);
        article.upvoted = false;
        article.upvotes_total--;
      });
    },
  },
};
</script>
