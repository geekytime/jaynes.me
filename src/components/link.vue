<template>
  <Link :to="to" :replace="replace">
    <slot></slot>
  </Link>
</template>

<script>
import { Link } from "vuex-router"
export default {
  components: {
    Link
  },
  props: ["replace", "to"]
}
</script>

<style lang="less">
</style>
