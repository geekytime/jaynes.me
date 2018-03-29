<template>
  <section class="projects">
    <h2 class="section-header">Recent Projects</h2>

    <ProjectList :projects="projects" />

    <div class="more">
      <Link class="button raised" to="/projects">See More Projects</Link>
    </div>
  </section>
</template>

<script>
import Link from "../link.vue"
import ProjectList from "../project-list.vue"
import projects from "../../data/projects.js"

export default {
  components: {
    Link,
    ProjectList
  },
  computed: {
    projects () {
      return this.$store.getters["projects/featured"]
    }
  }
}
</script>

<style lang="less">
@import "../../styles/breaks.less";
@import "../../styles/button.less";
@import "../../styles/colors.less";
@import "../../styles/flow.less";

.page section.projects {
  text-align: center;

  & > h2, .more .button {
    margin-top: 2em;
    margin-bottom: 2em;
  }

}
</style>
