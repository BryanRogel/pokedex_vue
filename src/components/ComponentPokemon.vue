<template>
  <article
    class="content border paddingless animation-linear animate__animated animate__fadeIn"
    :class="pokemon[5][0].type.name"
  >
    <section class="pkemon-container">
      <div class="pkemon-container-title">
        <h1 class="title">
          {{ pokemon[0] }}
        </h1>
        <h1 id="id" class="title"># {{ pokemon[1] }}</h1>
      </div>
      <section class="d-flex">
        <div v-for="type in pokemon[5]" :key="type.type.name">
          <p class="pokemon-card-type" :class="`card-` + type.type.name">
            {{ type.type.name }}
          </p>
        </div>
      </section>
      <div class="pkemon-container-info">
        <figure class="pokemon animate__animated animate__fadeIn">
          <img class="pokemon-img" :src="pokemon[6]" alt="" />
        </figure>

        <div class="info">
          <p class="desc">
            {{ oneDescription(species[1].flavor_text) }}
          </p>
          <div class="division">
            <div>
              <h4 class="title-stylee">Height:</h4>
              <p class="p-style">{{ calcHeight(pokemon[3]) + ` cm` }}</p>
            </div>
            <div>
              <h4 class="title-stylee">Weight:</h4>
              <p class="p-style">{{ calcWeight(pokemon[4]) + ` kg` }}</p>
            </div>
            <div>
              <h4 class="title-stylee">Skills:</h4>
              <div v-for="skill in pokemon[2]" :key="skill.ability.name">
                <p class="p-style no-select">
                  {{ capitalize(skill.ability.name) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import 'animate.css'

export default {
  name: 'ComponentPokemon',

  props: {
    pokemon: {
      type: Array,
      default: () => [],
    },
    species: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {}
  },

  computed: {},
  methods: {
    calcHeight(value) {
      return value * 10
    },
    calcWeight(value) {
      return value / 10
    },
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    oneDescription(descriptionData) {
      descriptionData && descriptionData && descriptionData.length > 0
      return descriptionData.replace(/\n/g, ' ').replace(/\f/g, ' ')
    },
  },
}
</script>

<style scoped>
.pkemon-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pokemon-card-type {
  font-family: 'Roboto', sans-serif;
  border: 2px solid black;
  float: right;
  top: 0px;
  right: 1em;
  transform: translateY(-50%);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4em 0.5em;
  line-height: 1;
  border-radius: 21px;
  margin: -10px 10px !important;
}

.pkemon-container-title {
  width: 80%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  color: var(--white);
  margin-bottom: 32px;
  margin-top: 32px;
  gap: 10px;
}

.title {
  margin: 0;
  padding: 0;
  font-size: 2rem;
}

.d-flex {
  display: flex;
  margin-bottom: 10px;
}

#id {
  color: var(--white);
}

.pkemon-container-info {
  width: 80%;
  display: flex;
  margin-top: 0;
  align-items: center;
  justify-content: space-around;
}

.info {
  width: 40%;
  color: var(--background);
  padding: 20px 35px;
  font-family: 'Roboto', sans-serif;
}

.desc {
  text-align: justify;
  font-size: 1.2rem;
  margin-top: -20px;
  margin-bottom: 0px;
  height: 100%;
  color: var(--white);
  font-family: 'Roboto', sans-serif;
}

.division {
  color: var(--white);
  border-radius: 10px;
  display: grid;
  padding: 25px 25px 0;
  grid-template-columns: 1fr 1fr;
}

.title-stylee {
  text-align: justify;
  font-size: 18px;
  margin: 5px;
}

.p-style {
  margin: 8px;
  font-size: 20px;
}

.select {
  font-size: 15px;
  background: transparent;
  border: none;
}

.select:focus {
  outline: none;
}

.no-select {
  font-size: 17px;
}

.title-stylee-abilities {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: -16px;
  gap: 10px;
}

.pokemon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
}

.pokemon-img {
  border-radius: 20px;
}

/* --- --- -- RESPONSIVE DESIGN -- --- --- */

@media only screen and (max-width: 1035px) {
  .pkemon-container-info {
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 2rem;
  }
  .info {
    width: 80%;
    margin-top: -30px;
  }
  .desc {
    margin-top: 0;
  }
  .title-stylee {
    margin-left: 60px;
  }
  .p-style {
    margin-left: 60px;
  }
}

@media only screen and (max-width: 800px) {
  .info {
    width: 90%;
    margin-top: -30px;
  }
  .pkemon-container-info {
    width: 100%;
  }
  .pkemon-container-title {
    width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  .title-stylee {
    margin-left: 0;
  }
  .p-style {
    margin-left: 0;
  }
}
</style>
