<script>
export default {
  name: 'Layer',
  inject: ['store'],
  props: {
    layer: Object
  },
  computed: {
    gridCellsX () {
      return this.layer.gridCellsX
    },
    gridCellsY () {
      return this.layer.gridCellsY
    },
    style () {
      const { gridCellWidth, gridCellHeight } = this.layer
      return {
        '--cell-width': `${gridCellWidth}px`,
        '--cell-height': `${gridCellHeight}px`
      }
    },
    tileset () {
      return this.store.world.getTileset(this.layer.tileset)
    }
  },
  methods: {
    cellData (x, y) {
      const index = x + y * this.gridCellsY
      return this.layer.data[index]
    }
  },
  mounted () {
    console.log(this.layer.data)
  }
}
</script>

<template>
  <div class="layer" :style="style">
    <div class="row" v-for="y in gridCellsY">
      <div class="cell" v-for="x in gridCellsX">
        <div>{{ cellData(x, y) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.layer {
  .row {
    display: flex;
    flex-direction: 'row';
    height: var(--cell-height);
    .cell {
      width: var(--cell-width);
      height: var(--cell-height);
    }
  }
}
</style>
