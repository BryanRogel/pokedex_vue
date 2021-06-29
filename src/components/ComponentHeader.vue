<template>
    <nav class="container">
      <section class="container-logo">
        <router-link class="link-style" :to="{ name: 'home' }">
          <img
            src="https://pokedex.bryanrogel.com/static/media/logo.084ef42c.png"
            alt="logo"
            class="logo"
          />
        </router-link>
      </section>
    </nav>
</template>

<script>
import 'animate.css'

export default {
  name: 'ComponentHeader',
}
</script>

<style scoped>
.container {
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 4px 0px;
  display: inline-block;
  width: 100%;
  z-index: 300;
  margin-bottom: 10px;
  font-weight: bold;
}

.logo {
  height: 50px;
  margin: 5px 0;
}

.link-style {
  display: flex;
  align-items: center;
  z-index: 1;
}

.container-logo {
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 3px;
  margin-left: 15px;
  font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width: 700px) {
  .container {
    flex-direction: column;
    margin-bottom: 25px;
  }
  .container-logo {
    margin-left: 0;
  }
}
</style>
