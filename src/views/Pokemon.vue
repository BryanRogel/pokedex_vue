<template>
  <section class="container-pokemon">
    <div class="screenLogo" v-if="isLoading">
      <img
        class="loading"
        src="https://pokedex.bryanrogel.com/static/media/loading.67d3cdb8.svg"
        style="height: 140px; margin: 10px"
        alt="loading"
      />
    </div>
    <component-pokemon
      v-if="!isLoading"
      :pokemon="pokemon"
      :species="species"
    />
  </section>
</template>

<script>
import ComponentPokemon from '@/components/ComponentPokemon'
import services from '@/services'

export default {
  name: 'Pokemon',
  components: { ComponentPokemon },

  data() {
    return {
      isLoading: false,
      pokemon: [],
      species: [],
      title: 'Pokémon | ',
      type: '',
      pokemonName: '',
    }
  },

  created() {
    this.isLoading = true
    this.pokemonName = this.$route.params.id.toLowerCase()

    services
      .getAssets(this.pokemonName)
      .then((character) => {
        this.pokemon = character
        document.title = this.pokemon[0]
      })
      .finally(() => {
        services
          .getSpecies(this.pokemon[1])
          .then((character) => {
            this.species = character
          })
          .finally(() => (this.isLoading = false))
      })
  },

  updated() {
    this.pokemon.length === 0
      ? this.goToError404()
      : console.log('Se realizó la consulta')
  },

  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },

    goToError404() {
      this.$router.push({ name: 'error' })
    },
  },
}
</script>

<style scoped>
.container-pokemon {
  color: var(--white);
  background-color: white;
  width: 100%;
}

body {
  background-color: var(--white);
}

@media only screen and (max-width: 1035px) {
  .container-pokemon {
    height: 100%;
    min-height: 45rem;
    margin-bottom: 50px;
  }
}
</style>
