
export const world = ({ store, data }) => {
  console.log('world', { data })
  const getTileset = (label) => {
    return data.tilesets.find((tileset) => {
      return tileset.label === label
    })
  }

  return {
    data,
    getTileset
  }
}
