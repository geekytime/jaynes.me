<template>
  <div class="page about">
    <div class="background">
      <h1>My Background</h1>
      <p>
        I am a professional full-stack software developer with over 17 years of
        experience. I specialize in building web apps and back-end services, but
        I also love creating games, interactive learning experiences, and other
        educational content.
      </p>
      <p>
        I work out of my home office in Bloomington, IL.
      </p>
      <p>
        When I'm not working, you'll most likely find me reading, listening to
        music, and hanging out with my family. If I'm outside, I'm probably
        running, hiking, or playing <a href="https://en.wikipedia.org/wiki/Ultimate_%28sport%29">Ultimate</a>.
      </p>
      <img src="/family.jpg" />
    </div>

    <Divider />

    <div class="philosophy">
      <h1>My Team Philosophy</h1>
      <p>
        <i>(Presented in a style that may seem strangely familiar…)</i>
      </p>
      <p>
        My teammates and I have tried many different ways of
        developing software. Through this work, I have come to value:
      </p>
      <p>
        <b>Peer reviews</b>
        <span>over code quality metrics</span>
      </p>
      <p>
        <b>Continuous delivery</b>
        <span>over artificial deadlines</span>
      </p>
      <p>
        <b>Daily status check-ins</b>
        <span>over detailed planning sessions</span>
      </p>
      <p>
        <b>A pragmatic testing mindset</b>
        <span>over dogmatic testing processes</span>
      </p>
    </div>

    <Divider />

    <h1>My Favorite Technologies</h1>
    <div class="technology">
      <p>
        I'm always interested in trying out new tools and libraries, but I do
        have some favorites. Here are some of the tools that I am most likely to
        use on new projects right now:
      </p>
      <ul>
        <li>Javascript / ES6 / ES7</li>
        <li>React / Redux</li>
        <li>Vue / Vuex</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>Less</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Git</li>
        <li>WebSockets</li>
        <li>Yarn</li>
        <li>ESLint</li>
        <li>Tape</li>
        <li>Amazon Web Services</li>
      </ul>
    </div>

    <Divider />

    <h1>My Values</h1>
    <div class="my-values">
      <ValuesSection name="people">
        <p>
          Diversity and inclusion are very important to me. I believe that
          every person should be treated with honesty, dignity, and respect.
        </p>
      </ValuesSection>

      <ValuesSection name="education">
        <p>
          Education is the key to prosperity and success. I regularly volunteer
          as a teacher, coach, and mentor. I've learned a lot by being a
          teacher!
        </p>
      </ValuesSection>

      <ValuesSection name="technology">
        <p>
          Technology has the power to transform our lives, but we have to be
          careful not to let it take over. I hope the software I build empowers
          people, and gives them back time to be more human.
        </p>
      </ValuesSection>
    </div>

    <Divider />

    <AboutFooter />

    <Footer />
  </div>
</template>

<script>
import AboutFooter from "./about-footer.vue"
import Divider from "../divider.vue"
import Footer from "../footer.vue"
import ValuesSection from "./values-section.vue"

export default {
  components: {
    AboutFooter,
    Divider,
    Footer,
    ValuesSection
  }
}
</script>

<style lang="less">
@import "../../styles/breaks.less";
@import "../../styles/colors.less";
@import "../../styles/flow.less";

.page.about {
  text-align: center;

  h1 {
    margin: 1.25em;
    color: @pcd3;
  }

  & > .background, .philosophy, .technology, .about-footer {
    margin: 0 auto;
    max-width: 35em;
    padding-left: 1em;
    padding-right: 1em;

    img {
      width: 100%;
    }
  }

  .background ul {
    text-align: left;
    li {
      list-style-type: circle;
    }
  }

  .technology ul {
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 0 0 50%;
    }
  }

  .break480 ({
    .technology {
      ul {
        .flow-col;
        li {
          flex: 0 0 100%;
        }
      }
    }
  });
}
</style>
