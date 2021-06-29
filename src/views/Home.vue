<template>
  <section>
    <div class="search">
      <div class="screenLogo" v-if="isLoading">
        <img
          class="loading"
          src="https://pokedex.bryanrogel.com/static/media/loading.67d3cdb8.svg"
          style="height: 140px; margin: 10px"
          alt="loading"
        />
      </div>
      <component-main v-if="!isLoading" :pokemon="pokemon" />
    </div>
  </section>
</template>

<script>
import ComponentMain from '@/components/ComponentMain'
import services from '@/services'

export default {
  name: 'Home',
  components: { ComponentMain },
  data() {
    return {
      isLoading: true,
      pokemon: { name: '', url: '', type: '', id: '' },
    }
  },
  created() {
    this.isLoading = true
    document.title = 'Pokémon'
    services
      .getImage()
      .then((character) => {
        try {
          this.pokemon.name = character[0]
          this.pokemon.url = character[1]
          this.pokemon.type = character[2]
          this.pokemon.id = character[3]
        } catch (error) {
          console.log(error)
        }
      })
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style scoped>
body {
  background-color: var(--white);
}

.search {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 1000px) {
  .search {
    height: 90vh;
    margin-top: 40px;
    margin-bottom: 60px;
  }
}

@media only screen and (max-width: 980px) {
  .search {
    height: auto;
  }
}
</style>
