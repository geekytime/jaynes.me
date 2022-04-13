<template>
  <div class="readable">
    <a class="title" :href="href" target="_blank">{{ title }}</a>
    <div>
      <span class="year">{{ year }}</span
      ><span> - </span>
      <span class="author">{{ author }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'href', 'year', 'author']
}
</script>

<style lang="less">
@import '../../styles/colors.less';

.readable {
  margin-bottom: 1.5em;

  .title {
    text-transform: capitalize;
    font-variant: small-caps;
    font-size: 1.1em;
    color: @scd1;
  }
}
</style>
