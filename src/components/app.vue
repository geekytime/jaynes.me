<template>
  <div class="app">
    <Header></Header>
    <Pages>
      <Page name="home">
        <About />
      </Page>
      <Page name="about">
        <About />
      </Page>
      <Page name="projects">
        <Projects />
      </Page>
      <Page name="blog">
        <Blog />
      </Page>
      <Page name="contact">
        <Contact />
      </Page>
      <Page name="four-zero-four">
        <FourZeroFour />
      </Page>
    </Pages>
  </div>
</template>

<script>
import About from './about/about.vue'
import Blog from './blog.vue'
import Contact from './contact/contact.vue'
import FourZeroFour from './four-zero-four.vue'
import Header from './header.vue'
import Home from './home/home.vue'
import { Page } from 'vuex-router'
import { Pages } from 'vuex-router'
import Projects from './projects/projects.vue'

export default {
  components: {
    About,
    Blog,
    Contact,
    FourZeroFour,
    Header,
    Home,
    Page,
    Pages,
    Projects
  },
  computed: {
    currentPage () {
      return this.$store.getters['router/currentPage']
    }
  },
  watch: {
    currentPage (newVal) {
      const firstLetter = newVal.charAt(0).toUpperCase()
      const restLetters = newVal.slice(1)
      document.title = `Chris Jaynes - ${firstLetter}${restLetters}`
    }
  }
}
</script>

<style lang="less">
@import '../styles/breaks.less';
@import '../styles/colors.less';
@import '../styles/reset.less';
@import '../styles/typography.less';

html,
body {
  height: 100%;
  background-color: @pcl5;
}

.app {
  height: 100%;
  padding-top: 40px;
}
</style>
