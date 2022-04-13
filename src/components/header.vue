<template>
  <header>
    <nav>
      <HeaderLink name="about" />
      <HeaderLink name="projects" />
      <HeaderLink name="contact" />
    </nav>
  </header>
</template>

<script>
import HeaderLink from './header-link.vue'

export default {
  components: {
    HeaderLink
  }
}
</script>

<style lang="less">
@import '../styles/breaks.less';
@import '../styles/colors.less';
@import '../styles/elevation.less';
@import '../styles/typography.less';

header {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  height: 40px;
  background-color: @pc;
  .elevation-4;

  nav {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
  }

  .break480({nav {justify-content: center;}});
}
</style>
