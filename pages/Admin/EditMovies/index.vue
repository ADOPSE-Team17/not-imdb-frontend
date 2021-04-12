<template>
  <div>
    <AppBarAdmin/>
    <MovieEdit/>
  </div>
</template>

<script>
import AppBarAdmin from '@/components/AppBarAdmin'
import MovieEdit from '@/components/MovieEdit'

export default {
  components: {
    AppBarAdmin,
    MovieEdit
  }
}
</script>
