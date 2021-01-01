<template>
  <div v-html="renderedHtml">
  </div>
</template>

<script>
export default {
  name: 'RenderArea',

  props: {
    source: {
      type: String,
      required: true
    }
  },

  computed: {
    renderedHtml () {
      return this.$md.render(this.source);
    }
  }

  // `| | | \n | - | - | \n | columnOneContent  | columnTwoContent  |`

}
</script>
<style scoped>

</style>