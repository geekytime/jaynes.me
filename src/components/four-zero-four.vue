<template lang="html">
  <div class="four-zero-four">
    <h1>Uh oh! We weren't expecting this.</h1>
    <img src="/uh-oh.jpg" />
    <h3>The {{currentPage}} page couldn't be found.</h3>
    <h4>Don't panic! You have options!</h4>
    <p>
      <a href="https://github.com/geekytime/jaynes.me/issues/new">Report a dead link</a>
      <Link to="/contact">Contact me with feedback</Link>
      <Link to="/home">Go to the homepage</Link>
    </p>
  </div>
</template>

<script>
import { Link } from "vuex-router"
export default {
  components: {
    Link
  },
  computed: {
    currentPage () {
      return this.$store.state.router.location.pathname
    }
  }
}
</script>

<style lang="less">
@import "../styles/flow.less";

.four-zero-four {
  padding: 1em;
  text-align: center;
  .flow-col;

  img {
    height: 50vh;
    padding: 1em;
  }

  p {
    display: flex;
    flex-wrap: wrap;
    a {
      padding-left: 1em;
      padding-right: 1em;
      flex: 1 1 33%;
    }
  }
}
</style>
