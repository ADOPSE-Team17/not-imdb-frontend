<template>
  <div class="container">
        <AppBar/>
        <!-- The nuxt element is where the whole app takes place -->
        <Nuxt />
  </div>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  components: {
    AppBar,
  },
  
}
</script>
