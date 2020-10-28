<script>
import Level from './components/level.vue'

export default {
  name: 'App',
  inject: ['store'],
  components: {
    Level
  }
}
</script>

<template>
  <div class="App">
    <Level :level="store.levels.home" />
  </div>
</template>

<style lang="less">

</style>
