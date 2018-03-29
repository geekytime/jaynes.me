<template>
  <div class="home-footer">
    <h1>I'm Available</h1>
    <p>
      I'm currently interested in both full-time offers and freelance work.
    </p>
    <p>
      If you have something you'd like to discuss, please contact me. I'd love
      to learn about what you're working on, and I'd be happy to answer any
      questions you might have.
    </p>
    <Link class="button" to="/contact">Get In Touch</Link>
  </div>
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
@import "../../styles/flow.less";

.home-footer {
  .flow-col;
  text-align: center;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    color: @pcd4;
  }

  p {
    max-width: 36em;
  }

  .button {
    margin: 2em;
  }
}
</style>
