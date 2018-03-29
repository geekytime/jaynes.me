<template>
  <div class="projects-footer">
    <h2>Have a question about a project?</h2>
    <p>
      Get in touch! I love talking about software.
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
@import "../../styles/colors.less";

.projects-footer {
  margin-bottom: 3em;
  h2, h3 {
    margin: 1em;
    color: @pcd3;
    font-weight: 500;
  }

  .button {
    display: inline-block;
    margin: 2em 2em;
  }
}
</style>
