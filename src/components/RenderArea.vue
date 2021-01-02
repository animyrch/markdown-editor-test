<template>
  <div v-html="renderedHtml">
  </div>
</template>

<script>
import { replaceTags } from '../utils/customTags';

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
      let renderedHtml = this.$md.render(this.source);
      renderedHtml = replaceTags(renderedHtml);
      return renderedHtml;
    }
  }

  // `| | | \n | - | - | \n | columnOneContent  | columnTwoContent  |`

}
</script>
<style scoped>

</style>