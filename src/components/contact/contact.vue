<template>
  <div class="contact page">
    <div class="content">
      <div class="row">
        <h1 class="email">Email Me</h1>
        <a href="/contact" @click="doEmail">
          <Email />
        </a>
      </div>

      <div class="row">
        <h1 class="online">Find Me Online</h1>
        <div class="online-icons">
          <a href="https://github.com/geekytime">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/chris-jaynes/">
            <LinkedIn />
          </a>
        </div>
      </div>

      <div class="row">
        <h1 class="hire-me">My Resume</h1>
        <a href="/resume">
          <Resume />
        </a>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Email from './icons/email.vue'
import Footer from '../footer.vue'
import Github from './icons/github.vue'
import Link from '../link.vue'
import LinkedIn from './icons/linkedin.vue'
import Resume from './icons/resume.vue'
import StackOverflow from './icons/stack-overflow.vue'

const resumeUrl =
  'https://docs.google.com/document/d/e/2PACX-1vQJqHmH_e6tStMnLS_LR9VKgYmMWTn43S7nVuTqEvkjt2mE4sLFHphx7Zgo0NKfda-VohMf4jaljz-8/pub'

export default {
  components: {
    Email,
    Footer,
    Github,
    Link,
    LinkedIn,
    Resume,
    StackOverflow
  },
  methods: {
    doEmail (event) {
      const link = document.createElement('a')
      const email = 'em.senyaj@sirhc'
        .split('')
        .reverse()
        .join('')
      link.href = `mailto:${email}`
      link.target = '_blank'
      link.click()
      event.preventDefault()
    }
  }
}
</script>

<style lang="less">
@import '../../styles/breaks.less';
@import '../../styles/colors.less';
@import '../../styles/flow.less';

.page.contact {
  .flow-col;
  height: 100%;

  .content {
    flex: 10 0 auto;
  }

  footer {
    align-self: stretch;
    flex: 0 0 auto;
  }

  .size-icons(@icon-height: 4.5em) {
    .icon {
      margin: 1em;
      width: @icon-height;
      height: @icon-height;

      svg {
        width: @icon-height;
        height: @icon-height;
      }
    }
  }

  .content {
    .flow-col();

    & > * {
      margin: 1.5em;
    }

    .row {
      .flow-col;
      .size-icons(4.5em);
    }

    .online-icons {
      .flow-row;
      flex-wrap: wrap;
      justify-content: center;

      .icon {
        flex: 0 0 33%;
      }
    }

    h1 {
      color: @pcd3;
    }
  }

  .break480({.content .row {.size-icons(2.5em) ;}});

  .break600({.content .row {.size-icons(3em) ;}});

  .size-icons(20vh);
}
</style>
