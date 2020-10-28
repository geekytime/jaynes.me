import { computed } from 'vue'

export const level = ({ store, data }) => {
  console.log('level', { data })

  const sortedLayers = computed(() => {
    return [...data.layers].reverse()
  })

  return {
    data,
    sortedLayers
  }
}
