<template>
  <article class="content animate__animated animate__fadeIn">
    <figure
      v-if="pokemon.url"
      class="
        pokemon-figure
        animation-linear
        border
        animate__animated animate__fadeIn
      "
      :class="pokemon.type"
      :content="pokemon.name"
    >
      <div class="pokemon-img">
        <img :src="pokemon.url" alt="" @click="search(pokemon.name)" />
        <h1 class="marginless">
          {{ pokemon.name.toUpperCase() + ` #` + pokemon.id }}
        </h1>
      </div>
    </figure>
    <div class="pokemon-init">
      <h3 class="pokemon-init-title marginless">Who's That Pokémon?</h3>
      <p class="pokemon-init-text">
        Search your favorite Pokémon by name or ID
      </p>
      <div class="border pokemon-init-bar" :class="`card-` + pokemon.type">
        <input
          v-model="value"
          class="search-text"
          type="text"
          v-on:keyup.enter="search(value)"
          placeholder="Search Pokémon"
        />
        <button @click="search(value)" class="search-enter">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import 'animate.css'

export default {
  name: 'ComponentMain',
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
  },
    data() {
    return {
      value: '',
    }
  },
  methods: {
    search(id = this.value) {
      this.$router.push({ name: 'pokemon', params: { id } })
    },
  },
}
</script>

<style scoped>
.pokemon-init-title {
  font-size: 38px;
  color: var(--black);
}

.pokemon-init-text {
  width: 80%;
  line-height: 30px;
  margin-top: 0px;
  color: var(--black);
}

.pokemon-init {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

.pokemon-init-bar {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 50px;
  height: 50px;
}

.search-text {
  width: 90%;
  height: 40px;
  margin-left: 15px;
  border-radius: 30px;
  color: var(--white);
  border: none;
  outline: none;
  font-size: 15px;
  caret-color: var(--yellow);
  background-color: unset;
}

::placeholder {
  color: var(--white);
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
}

.search-enter {
  width: 50px;
  height: 45px;
  border-radius: 0 50px 50px 0;
  margin-left: -30px;
  color: var(--white);
  background-color: unset;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 15px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.7s ease-in-out;
}

.search-enter:hover {
  color: var(--black);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.7s ease-in-out;
}

.pokemon-figure {
  width: 350px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  flex-direction: column;
}

.pokemon-img {
  cursor: pointer;
  filter: brightness(0%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.7s ease-in-out;
  font-family: 'Roboto', sans-serif;
  color: transparent;
  text-align: center;
}

.pokemon-img:hover {
  filter: none;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.7s ease-in-out;
  color: var(--white);
}

.fa-search {
  font-size: 16px;
}

@media only screen and (max-width: 980px) {
  h3 {
    width: 95%;
    text-align: center;
  }
  .pokemon-init-text {
    width: 100%;
  }
  .pokemon-init {
    width: 90%;
  }
  .pokemon-figure {
    width: 220px;
    height: 280px;
  }
}

@media only screen and (max-width: 350px) {
  .pokemon-init {
    width: 75%;
  }
}
</style>
