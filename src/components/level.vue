<script>
import Layer from './layer.vue'

export default {
  name: 'Level',
  inject: ['store'],
  components: {
    Layer
  },
  props: {
    level: Object
  },
  mounted () {
    console.log(this.level.sortedLayers.value)
  }
}
</script>

<template>
  <div class="level">
    <Layer v-for="layer in level.sortedLayers.value" :layer="layer" />
  </div>
</template>

<style lang="less">
</style>
