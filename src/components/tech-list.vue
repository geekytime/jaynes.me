<template>
  <div class="tech-list">
    <ul v-for="tech in techs">
      <li class="tech-icon">
        <img v-if="showIcon(tech)" :src="imgSrc(tech)" :title="tech"/>
        <span v-if="!showIcon(tech)">{{tech}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const noIcons = [
  "app-engine",
  "c#",
  "cloud-front",
  "cloud-functions",
  "flux", 
  "vuex", 
  "watch", 
  "webdriverjs", 
  "websockets"
]

const pngIcons = ["tape", "vue", "mobx"]

export default {
  methods: {
    imgSrc (tech) {
      if (pngIcons.includes(tech)){
        return `/techs/${tech}.png`
      }
      return `/techs/${tech}.svg`
    },
    showIcon (tech) {
      if (noIcons.includes(tech)){
        return false;
      }
      return true
    }
  },
  props: ["techs"]
}
</script>

<style lang="less">
@import "../styles/flow.less";

.tech-list {
  .flow-row;
  flex-wrap: wrap;

  .tech-icon {
    margin-right: 1.7em;
    margin-bottom: .5em;
    img {
      height: 1.7rem;
    }

    span {
      text-transform: capitalize;
    }
  }
}
</style>
