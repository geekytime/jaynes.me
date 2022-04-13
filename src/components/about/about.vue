<template>
  <div class="page about">
    <section>
      <Banner />
    </section>
    <Divider />

    <section>
      <Background />
    </section>
    <Divider />

    <section>
      <Philosophy />
    </section>
    <Divider />

    <section>
      <Reading />
    </section>
    <Divider />

    <section>
      <Technologies />
    </section>
    <Divider />

    <section>
      <Values />
    </section>

    <Footer />
  </div>
</template>

<script>
import AboutFooter from './about-footer.vue'
import Background from './background.vue'
import Banner from './banner.vue'
import Divider from '../divider.vue'
import Footer from '../footer.vue'
import Philosophy from './philosophy.vue'
import Reading from './reading.vue'
import Technologies from './technologies.vue'
import Values from './values.vue'

export default {
  components: {
    AboutFooter,
    Background,
    Banner,
    Divider,
    Footer,
    Philosophy,
    Reading,
    Technologies,
    Values
  }
}
</script>

<style lang="less">
@import '../../styles/breaks.less';
@import '../../styles/colors.less';
@import '../../styles/flow.less';

.page.about {
  text-align: center;

  h1 {
    margin: 1em;
    color: @pcd3;
  }

  & > section {
    margin: 0 auto;
    max-width: 35em;
    padding-left: 1em;
    padding-right: 1em;

    img {
      width: 100%;
    }
  }

  .break480 ({.technology {ul {.flow-col; li {flex: 0 0 100%;}}}});
}
</style>
