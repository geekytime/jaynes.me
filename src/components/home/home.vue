<template>
  <div class="page home">
    <Banner />
    <Divider />
    <Skills />
    <Divider />
    <Projects />
    <Divider />
    <HomeFooter />
    <Footer />
  </div>
</template>

<script>
import Banner from "./banner.vue"
import Divider from "../divider.vue"
import Footer from "../footer.vue"
import HomeFooter from "./home-footer.vue"
import Skills from "./skills.vue"
import Posts from "./posts.vue"
import Projects from "./projects.vue"

export default {
  components: {
    Banner,
    Divider,
    Footer,
    HomeFooter,
    Skills,
    Posts,
    Projects
  }
}
</script>

<style lang="less">

.page.home {

}
</style>
