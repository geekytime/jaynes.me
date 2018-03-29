<template>
  <li class="project-item" :class="project.id">
    <div class="headline">
      <h1>{{project.name}}</h1>
      <ProjectType :type="project.type" />
    </div>
    <TechList :techs="project.techs"/>
    <div class="description">
      {{project.description}}
    </div>
    <div class="actions">
      <a class="button flat"
        v-for="link in project.links"
        :href="link.to" :key="link.to">
        {{link.text}}
      </a>
    </div>
  </li>
</template>

<script>
import Link from "./link.vue"
import ProjectType from "./project-type.vue"
import TechList from "./tech-list.vue"
export default {
  components: {
    Link,
    ProjectType,
    TechList
  },
  computed: {

  },
  props: ["project"]
}
</script>

<style lang="less">
@import "../styles/breaks.less";
@import "../styles/colors.less";
@import "../styles/flow.less";

.project-item {
  width: 100%;

  .headline {
    .flow-row;
    justify-content: space-between;
    margin-bottom: 1em;

    h1 {
      color: @pcd3;
      line-height: 1;
    }
  }

  .tech-list {
    padding: 1em 0em;
  }

  .description {
    color: @scd3;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 2em;

    &:empty {
      padding-top: 1em;
    }
  }

  .break480({
    .headline {
      .flow-col;
      align-items: flex-start;

      .type {
        margin-top: .5em;
        margin-bottom: .5em;
      }
    }
  });

  .break600({
    .headline {
      h1 {
        font-size: 1.1rem;
      }
    }
  });

  .break840({
    .headline {
      h1 {
        font-size: 1.6rem;
      }
    }
  });
}
</style>
