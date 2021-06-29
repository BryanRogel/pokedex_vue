<template>
  <main id="app">
    <component-header />
    <router-view />
  </main>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'

export default {
  name: 'App',
  components: { ComponentHeader },
}
</script>

<style>
:root {
  --white: #ffffff;
  --black: #000000;
}

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto'),
    url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--white);
}

.marginless {
  margin: 0 !important;
}

.paddingless {
  padding: 0 !important;
}

::-webkit-scrollbar-track
{
	background-color: #ffffff;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #979797;
}

::-webkit-scrollbar-thumb
{
	background-color: #555;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  border-radius: 50px;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto 0;
  display: flex;
  border-radius: 50px;
  justify-content: center;
}

.border {
  border: 3px solid rgb(0, 0, 0);
}

/* // Colors for cards and types of pokemon */

.normal {
  background: linear-gradient(110deg, #a8a878 0%, #5c5c3e 100%);
  box-shadow: 0px 5px 20px -10px #3a1c71;
}

.card-normal {
  background-color: #a8a878;
}

.water {
  background: linear-gradient(120deg, #1cb5e0 0%, #000851 100%);
  box-shadow: 0px 5px 20px -10px #000851;
}

.card-water {
  background-color: #6890f0;
}

.electric {
  background: linear-gradient(90deg, #e8ff99 34%, #ffde00 83%);
}

.card-electric {
  background-color: #f8d030;
}

.fire {
  background: linear-gradient(0deg, #c71800 10%, #fcc245 100%);
}

.card-fire {
  background-color: #f08030;
}

.fighting {
  background: linear-gradient(120deg, #c03028 0%, #aa362f 56%, #580808 100%);
}

.card-fighting {
  background-color: #c03028;
}

.flying {
  background: linear-gradient(120deg, #a890f0 0%, #8367d6 48%, #351a87 95%);
}

.card-flying {
  background-color: #a890f0;
}

.poison {
  background: linear-gradient(120deg, #a040a0 0%, #8a298a 48%, #6b0a6b 95%);
}

.card-poison {
  background-color: #a040a0;
}

.ground {
  background: linear-gradient(120deg, #e0c068 0%, #83681c 95%);
}

.card-ground {
  background-color: #e0c068;
}

.rock {
  background: linear-gradient(120deg, #b8a038 0%, #5e4f0e 95%);
}

.card-rock {
  background-color: #b8a038;
}

.bug {
  background: linear-gradient(120deg, #a8b820 0%, #5d6706 95%);
}

.card-bug {
  background-color: #a8b820;
}

.ghost {
  background: linear-gradient(120deg, #705898 0%, #1c0541 95%);
}

.card-ghost {
  background-color: #705898;
}

.dragon {
  background: linear-gradient(120deg, #7038f8 0%, #2a0f6c 95%);
}

.card-dragon {
  background-color: #7038f8;
}

.steel {
  background: linear-gradient(120deg, #b8b8d0 0%, #424261 95%);
}

.card-steel {
  background-color: #b8b8d0;
}

.psychic {
  background: linear-gradient(140deg, #ffa7f9 0%, #ff2cc3 39%, #ffe3a7 100%);
}

.card-psychic {
  background: #f85888;
}

.dark {
  background: linear-gradient(20deg, #191919 0%, #100b32 33%, #5c0249 100%);
}

.card-dark {
  background: #705848;
}

.grass {
  background: linear-gradient(140deg, #78c850 0%, #509c2b 69%, #2a6c09 100%);
}

.card-grass {
  background: #4e8234;
}

.ice {
  background: linear-gradient(230deg, #caeaf6 0%, #a0eaf1 46%, #6fb8eb 100%);
}

.card-ice {
  background: #98d8d8;
}

.fairy {
  background: linear-gradient(
    45deg,
    #ffe6f0 0%,
    #ffc5e0 34%,
    #ffa6b9 71%,
    #ff8a95 100%
  );
}

.card-fairy {
  background: #ee99ac;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loading {
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  -ms-animation: spin 2s linear infinite;
  -o-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.screenLogo {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  z-index: 99999;
}

.animation-linear {
  background-size: 200% 200%;
  -webkit-animation: Animation 5s ease infinite;
  -moz-animation: Animation 5s ease infinite;
  animation: Animation 5s ease infinite;
}

@-webkit-keyframes Animation {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}

@-moz-keyframes Animation {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}

@keyframes Animation {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}

@media only screen and (max-width: 980px) {
  .content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
