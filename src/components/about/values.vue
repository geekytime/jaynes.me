<template>
  <div class="my-values">
    <h1>My Values</h1>
    <ValuesSection name="people">
      <p>
        Diversity and inclusion are very important to me. I believe that every
        person should be treated with honesty, dignity, and respect.
      </p>
    </ValuesSection>

    <ValuesSection name="education">
      <p>
        Education is the key to prosperity and success. I regularly volunteer as
        a teacher, coach, and mentor. I've learned a lot by being a teacher!
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
</template>

<script>
import ValuesSection from './values-section.vue'

export default {
  components: {
    ValuesSection
  }
}
</script>
