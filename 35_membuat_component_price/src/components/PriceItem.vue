<template>
    <span> {{this.prefix + Number.parseFloat(this.value).toFixed(2)}} </span>
</template>
<script>
  export default {
     props: {
        value:Number,
        prefix:{
            type: String,
            default: 'Rp'

        },
        precision:{
            type:Number,
            default:2

        }
        
    },
  }
</script>