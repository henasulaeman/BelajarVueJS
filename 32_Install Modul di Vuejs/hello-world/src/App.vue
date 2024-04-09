<template>

<div id="app" class="container=mt">
  <h1>IDShop</h1>
  <p class="animated fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti, debitis et sunt nemo perferendis recusandae, placeat voluptatum odit ab similique autem iste earum quos eaque dolores, aperiam provident culpa.</p>
  <font-awesome-icon icon="shopping-cart"></font-awesome-icon >
</div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
