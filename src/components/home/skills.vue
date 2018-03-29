<template>
  <section class="skills">
    <h2>Ways I Can Help</h2>
    <div class="list">
      <div class="skill">
        <img src="/planning-icon.svg" />
        <h3>Planning</h3>
        <p>
          I can help you organize your ideas, identify your technical needs, and
          plot a course to transform your <i>Big Idea</i> into a <i>Great User
          Experience.</i> I will help you plan even if you want to do the work
          yourself.
        </p>
      </div>
      <div class="skill">
        <img src="/coding-icon.svg" />
        <h3>Coding</h3>
        <p>
          I will make sure your site works across devices, using the latest technology
          available. I strive to write clean, elegant code that <i>really
          works</i> and is easy to maintain.
        </p>
      </div>
      <div class="skill">
        <img src="/teaching-icon.svg" />
        <h3>Teaching</h3>
        <p>
          I can create written training, screencasts, assessments, and
          custom interactive experiences. Programming is my
          specialty, but I can help with most any topic. I am also an
          experienced one-on-one mentor.
        </p>
      </div>
    </div>

    <div>
      <Link to="/about" class="button">Learn More About Me</Link>
    </div>
  </section>
</template>

<script>
import Link from "../link.vue"
export default {
  components: {
    Link
  }
}
</script>

<style lang="less">
@import "../../styles/breaks.less";
@import "../../styles/colors.less";
@import "../../styles/flow.less";
@import "../../styles/typography.less";

.home.page .skills {
  text-align: center;
  .flow-col;
  width: 100%;

  h2 {
    color: @scd2;
    font-weight: 600;
    margin-bottom: 1em;
  }

  .list {
    width: 100%;
    .flow-row(wrap; center);
    align-items: flex-start;

    .skill {
      padding: 2em;
      flex: none;
      overflow: hidden;
      max-width: 400px;
      .flow-col;

      h3 {
        color: @pcd3;
        font-weight: 500;
        padding-top: .5em;
      }

      p {
        font-size: 1.1em;
        i {
          color: @scd3;
        }
        max-width: 20em;
      }
    }
  }
}
</style>
