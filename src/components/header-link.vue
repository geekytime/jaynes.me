<template>
  <Link :to="to" class="header-link" :class="getClass">
    {{name}}
  </Link>
</template>

<script>
import Link from "./link.vue";
export default {
  components: {
    Link
  },
  computed: {
    getClass () {
      if (this.$store.getters["router/currentPage"] === this.name){
        return `${this.name} current`
      }
      return this.name
    },
    to () {
      return `/${this.name}`
    }
  },
  props: ["name"]
}
</script>

<style lang="less">
@import "../styles/colors.less";

.header-link {
  display: flex;
  align-items: center;
  padding: 0 1em;
  border-bottom: 3px solid transparent;
  transition: border-color 300ms ease, background-color 200ms ease;
  text-transform: capitalize;

  &:hover {
    background-color: @pcl1;
  }

  &:active {
    background-color: @pcl2;
  }

  &.current {
    border-color: @pcd3;
  }
}
</style>
