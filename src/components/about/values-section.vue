<template>
  <section :class="`value-${name}`">
    <div class="values">
      <div class="value">
        <div class="img-wrap">
          <img :src="imgSrc" />
        </div>
        <div class="text">
          <h2>{{name}}</h2>
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    imgSrc () {
      return `/${this.name}.jpg`
    }
  },
  props: ["name"]
}
</script>

<style lang="less">
@import "../../styles/breaks.less";
@import "../../styles/colors.less";
@import "../../styles/flow.less";

.page.about section {
  .values {
    text-align: left;
    max-width: 50em;
    margin: 0 auto;
    .flow-col;

    .value {
      .flow-row;
      align-items: center;
      padding: 2em 0em;

      .img-wrap {
        flex: 0 0 30%;
        display: flex;
        justify-content: center;

        img {
          height: 8em;
        }
      }

      h2 {
        text-transform: capitalize;
        font-variant: small-caps;
        color: @scd1;
        font-weight: 500;
      }
    }
  }

  .break480({
    .values {
      padding-left: 1em;
      padding-right: 1em;
      .value {
        display: block;

        .img-wrap {
          display: inline-block;
          float: right;
          padding: 1em;
          img {
            display: inline-block;
            height: 6em;
          }
        }
      }
    }
  });
}
</style>
