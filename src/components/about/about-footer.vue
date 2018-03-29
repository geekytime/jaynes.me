<template>
  <div class="about-footer">
    <h1>Giving Back</h1>
    <p>
      Do you have a project that aligns with my values, but are worried about
      the cost? I do volunteer work for worthy causes as time allows. Send me a
      note, and let me know what you're working on. I may be able to help.
    </p>

    <Link class="button" to="/contact">Contact Me</Link>
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
@import "../../styles/button.less";
.about-footer {
  padding-bottom: 2em;

  .button {
    margin: 2em;
  }
}
</style>
