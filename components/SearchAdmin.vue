<template>
<div>
  <v-text-field
    :placeholder="placeholder"
    prepend-icon="mdi-magnify"
    rounded
    filled
    dense
  >
  </v-text-field>
</div>
</template>

<script>
export default {
   props:{
     placeholder:{
        type:String,
        required:true
     }
   } 
}
</script>

<style>

</style>
