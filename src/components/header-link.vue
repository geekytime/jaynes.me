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
  text-decoration: none;
  color: @scd3;

  &:visited {
    color: @scd3;
  }

  &:hover {
    background-color: @pcl1;
    text-decoration: none;
  }

  &:active {
    background-color: @pcl2;
    text-decoration: none;
  }

  &.current {
    border-color: @pcd3;
  }
}
</style>
