<template>
  <div class="favorite-technologies">
    <h1>My Favorite Technologies</h1>
    <p>
      I'm always interested in trying out new tools and libraries, but I do have
      some favorites. Here are some of the tools that I am most likely to use on
      new projects right now:
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
</template>

<style lang="less">
.favorite-technologies {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 0 0 50%;
    }
  }
}
</style>
