<template>
  <div class="page projects">
    <h1>Notable Projects</h1>
    <ProjectList :projects="projects" />
    <Divider />
    <ProjectsFooter />
    <Footer />
  </div>
</template>

<script>
import Divider from "../divider.vue"
import Footer from "../footer.vue"
import Link from "../link.vue"
import ProjectList from "../project-list.vue"
import ProjectsFooter from "./projects-footer.vue"
import projects from "../../data/projects.js"

export default {
  components: {
    Divider,
    Footer,
    Link,
    ProjectList,
    ProjectsFooter
  },
  data () {
    return {
      projects
    }
  },
  methods: {
    showProject: function () {
      const currentRoute = this.$store.state.router.currentRoute
      if (currentRoute.params && currentRoute.params.name){
        const className = `.${currentRoute.params.name}`
        const projectEl = this.$el.querySelector(className)
        setTimeout(() => {
          projectEl.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
          })
        }, 625)
      }
    }
  },
  mounted () {
    this.showProject()
  }
}
</script>

<style lang="less">
@import "../../styles/button.less";
@import "../../styles/colors.less";
@import "../../styles/flow.less";

.page.projects {
  text-align: center;

  & > h1 {
    margin: 1em;
    color: @scd2;
  }
}
</style>
