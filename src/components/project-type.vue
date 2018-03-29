<template>
  <div v-if="this.type === `statefarm`" class="type" :class="type">
    <h2>StateFarm</h2>
    <img src="/job-icons/statefarm.svg" />
  </div>
  <div v-else-if="this.type === `qaline`" class="type" :class="type">
    <h2>QA Line</h2>
    <img src="/job-icons/qaline.png" />
  </div>
  <div v-else-if="this.type === `yola`" class="type" :class="type">
    <h2>Yola</h2>
    <img src="/job-icons/yola.svg" />
  </div>
  <div v-else-if="this.type === `opensource`" class="type" :class="type">
    <h2>Open Source</h2>
    <img src="/job-icons/opensource.svg" />
  </div>
  <div v-else-if="this.type === `personal`" class="type" :class="type">
    <h2>Personal</h2>
    <img src="/job-icons/personal.svg" />
  </div>

</template>

<script>
export default {
  computed: {
  },
  props: ["type"]
}
</script>

<style lang="less" scoped>
@import "../styles/breaks.less";
@import "../styles/colors.less";
@import "../styles/flow.less";

.type {
  .flow-row;
  align-items: flex-start;

  h2 {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: @scl1;
  }
  img {
    height: 2rem;
  }

  .break480({
    padding: 1em 0em;
    flex-direction: row-reverse;
    h2 {
      font-size: 1.2rem;
    }

    img {
      height: 1.4rem;
      margin-right: 1em;
    }

  });

  .break600({
    h2 {
      font-size: 1rem;
    }

    img {
      height: 1.4rem;
      margin-right: 1em;
    }
  });

}
</style>
