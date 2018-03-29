<template>
  <section class="banner">
    <h1 class="hi">Hi. I'm Chris.</h1>
    <img src="me.jpg" />
    <h1>I do web stuff.</h1>
  </section>
</template>

<script>
import Link from "../link.vue"
export default {
  components: {
    Link
  }
}
</script>

<style lang="less">
@import "../../styles/colors.less";
@import "../../styles/elevation.less";

.home.page .banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: @pcd4;
  }

  & > * {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  img {
    border-radius: 50%;
    filter: drop-shadow(3px 3px 3px);
    width: 12em;
  }
}
</style>
