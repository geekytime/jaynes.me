<template>
  <section class="banner">
    <h1 class="hi">Hi! I'm Chris.</h1>
    <img src="me.jpg" />
    <h2>I'm a software engineer.</h2>
  </section>
</template>

<script>
import Link from '../link.vue'
export default {
  components: {
    Link
  }
}
</script>

<style lang="less">
@import '../../styles/colors.less';
@import '../../styles/elevation.less';

.about.page .banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: @pcd3;
  }

  h2 {
    color: @pcd3;
  }

  img {
    border-radius: 50%;
    filter: drop-shadow(3px 3px 3px);
    // width: 12em;
    max-width: 240px;
    margin-bottom: 2em;
  }
}
</style>
