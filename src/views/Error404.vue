<template>
  <section class="main-content">
    <img
      class="error-img"
      src="https://pokedex.bryanrogel.com/static/media/error404.8ba0dceb.png"
      alt="error"
    />
    <article class="main__error">
      <div>
        <h1 class="main__error-title">THERE'S TOO MANY MEN...</h1>
        <h5 class="main__error-title">POKÉMON NOT FOUND!</h5>
      </div>
    </article>
  </section>
</template>

<script>

export default {
  name: 'Error404',
}
</script>
<style scoped>
.main-content {
  margin-top: 20px;
  text-align: center;
}
.main__error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-family: 'Roboto', sans-serif;
  margin: auto;
  gap: 100px;
  width: 100%;
  text-align: center;
}

.main__error-title {
  font-size: 2rem;
  color: var(--black);
}

.error-img {
  border-radius: 50%;
  height: 300px;
  width: 300px;
}

@media only screen and (max-width: 1035px) {
  .main__error {
    flex-direction: column;
    gap: 0;
  }

  .main__error-title {
    text-align: center;
  }
}
</style>
