const API = 'https://pokeapi.co/api/v2/pokemon/id'
const SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/id'

const sprite ='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/id.png'

function SetIdNumber(id) {
  switch (id.toString().length) {
    case 1:
      return "00" + id;
    case 2:
      return "0" + id;
    case 3:
      return id;
    default:
      return id;
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

function getImage() {
  let id = Math.round(getRandom(1, 898))
  let url = API.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      sprite.replace('id', `${SetIdNumber(id)}`),
      response.types[0].type.name,
      id
    ])
}

function filterLanguageEn(element) {
  return element.language.name === 'en'
}

function getSpecies(id) {
  let url = SPECIES.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.color.name,
      response.flavor_text_entries.find(filterLanguageEn)
    ])
}

function getAssets(id) {
  let url = API.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      response.id,
      response.abilities,
      response.height,
      response.weight,
      response.types,
      sprite.replace('id', `${SetIdNumber(response.id)}`),
    ])
}

export default { getImage, getAssets, getSpecies }
