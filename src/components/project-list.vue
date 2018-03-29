<template>
  <ul class="project-list">
    <Project v-for="project in projects" :project="project" :key="project.id" />
  </ul>
</template>

<script>
import Project from "./project.vue"

export default {
  components: {
    Project
  },
  props: ["projects"]
}
</script>

<style lang="less">
@import "../styles/breaks.less";
@import "../styles/colors.less";
@import "../styles/flow.less";

.project-list {
  .flow-col;
  margin: 0 auto;
  width: 100%;
  max-width: 760px;
  text-align: left;

  h2.section-header {
    margin-bottom: 1.5em;
    color: @scd2;
    font-weight: 600;
  }

  .project-item {
    width: 100%;
    padding: 1em 0em;
    border-bottom: 1px solid @scl3;

    &:first-child {
      border-top: 1px solid @scl3;
    }
  }

  .more {
    margin-top: 3em;
    margin-bottom: 2em;
  }

  .break480({
    .project-item {
      padding: 1.5em 0em;
    }
  });

  .break(0px, 840px, {
    padding-left: 1em;
    padding-right: 1em;
  });
}
</style>
