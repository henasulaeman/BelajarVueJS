<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <p class="animate__animated animate__backInRight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nam, ad minima aliquam assumenda nihil harum iusto odit dignissimos aut, culpa amet esse at alias soluta inventore doloremque vel aspernatur?
      <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
      <price :value="4.23"></price>
    </p>
  </div>
</template>
<script>
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import PriceItem from "./components/PriceItem.vue";
  
  export default {
    name :"app",
    component:{
      FontAwesomeIcon,
      PriceItem
    }
  };
</script>

