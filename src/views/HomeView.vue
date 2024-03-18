<script  lang="ts">
</script>

<template>

  <div class="app-container">
    <!-- Navigation Bar -->
    <header class="navbar">
      <nav class="">
        <div class="logo">BeautyConn</div>
        <ul class="nav-links">
          <li><a href="#" >Nail Services</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Makeup</a></li>
        </ul>
        <div class="auth-links">
          <button>Register</button>
          <button>Log In</button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section  style="background-image:url(https://avatars.dzeninfra.ru/get-zen_doc/3853921/pub_62da728774984a236480e135_62da754b77825969562cd897/scale_1200); "  class="hero-section">
      <h1 class="text-black">Discover beauty services with BeautyConnect</h1>
      <p class="text-black">Find your perfect beauty service among our wide selection!</p>

    </section>
    <div class="d-flex justify-content-center">

    <div class="container-service ">

      <form class="search-form mt-0 py-3 px-4">
        <input type="text" placeholder="Location" />
        <select>
          <option value="">Service type</option>
          <!-- Add options for service types -->
        </select>
        <select>
          <option value="">Service time</option>
          <!-- Add options for service times -->
        </select>
        <button>Switch account type</button>
      </form>
    </div>
    </div>
    <h1 class="ms-3 mt-4">Popular services</h1>
    <!-- Popular Services Grid -->
    <section class="service-grid ">
      <div class="service-item  ">
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/3853921/pub_62da728774984a236480e135_62da754b77825969562cd897/scale_1200" alt="Nails" />
        <span class="card ms-3 ">Nails</span>
      </div>
      <div class="service-item">
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/3853921/pub_62da728774984a236480e135_62da754b77825969562cd897/scale_1200" alt="Hair Removal" />
        <span class="card ms-3 ">Hair Removal</span>
      </div>
      <div class="service-item">
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/3853921/pub_62da728774984a236480e135_62da754b77825969562cd897/scale_1200" alt="Hairdressing" />
        <span class="card ms-3 ">Hairdressing</span>
      </div>
      <div class="service-item">
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/3853921/pub_62da728774984a236480e135_62da754b77825969562cd897/scale_1200" alt="Makeup" />
        <span class="card ms-3 ">Makeup</span>
      </div>
      <div class="service-item">
        <img src="../assets/das.png" alt="Cosmetology" />
<!--        <span class="card ms-3 ">Cosmetology</span>-->
      </div>
    </section>

    <!-- Top Rated Services -->
    <section class="top-rated-services">
      <div class="service-rating card">
        <img src="data:image/jpeg;base64,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" alt="Service 1" />
        <span>Pamper Spa Retreat</span>
        <span>from $50/session</span>
      </div>
      <!-- Add more service rating items -->
    </section>

    <!-- Newsletter Signup -->

    <!-- Footer -->
    <footer class="footer">
      <p>BeautyConnect</p>
      <p>Your go-to beauty destination since 1991</p>
      <!-- Add more footer content -->
    </footer>
  </div>

</template>

<style scoped>
/* Стили для компонентов */

/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.app-container{
  background-color: #161616;
  color: #fafafa;
}
/* Navigation Bar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.auth-links button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Hero Section Styles */
.hero-section {
  background-color: #666;
  color: #fff;
  text-align: center;
  padding: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.search-form {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-form input,
.search-form select,
.search-form button {
  margin: 0 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

/* Popular Services Grid Styles */
.service-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 40px;
}

.service-item {
  text-align: center;


}

.service-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.service-item span {
  display: block;
  margin-top: -30px;
  width: fit-content;
;

}

/* Top Rated Services Styles */
.top-rated-services {
  display: flex;
  justify-content: space-around;
  padding: 40px;
}

.service-rating {
  text-align: center;
}

.service-rating img {
  width: 100%;
  height: auto;
}

.service-rating span {
  display: block;
  margin-top: 10px;
}

/* Newsletter Signup Styles */
.newsletter-signup {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 40px;
}

.newsletter-signup input {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
}

.newsletter-signup button {
  padding: 8px 16px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Footer Styles */
.footer {
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
}
.container-service{
  background-color: #323232;
  border-radius: 40px;
  margin-top: -2.5rem;

  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

</style>
