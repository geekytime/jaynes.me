<template>
  <div class="recommended-reading">
    <h1>Recommended Reading</h1>

    <Readable
      title="Continuous Discovery Habits"
      href="https://www.amazon.com/dp/B094PVB97X"
      year="2021"
      author="Teresa Torres"
    />

    <Readable
      title="Opportunity Solution Trees: Visualize Your Thinking"
      href="https://www.producttalk.org/opportunity-solution-tree/"
      year="2021"
      author="Teresa Torres"
    />

    <Readable
      title="An Introduction to the Redux-First Routing Model"
      href="https://medium.freecodecamp.org/an-introduction-to-the-redux-first-routing-model-98926ebf53cb"
      year="2017"
      author="Micheal Sargent"
    />

    <Readable
      title="Clean Code: A Handbook of Agile Software Craftsmanship"
      href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
      year="2008"
      author="Robert C Martin"
    />
  </div>
</template>

<script>
import Readable from './readable.vue'
export default {
  components: {
    Readable
  }
}
</script>
