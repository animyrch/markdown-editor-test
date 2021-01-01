<template>
  <div>
    <v-textarea
      rows="24"
      name="markdown-input-area"
      :value="content"
      :hint="editorHint"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'EditorArea',

  props: {
    content: {
      type: String
    }
  },

  data: () => ({
    editorHint: '**Bold** *Italic* _Underline_ List with bullets # H1 ## H2 ### H3 #### H4 ##### H5 ###### H6'
  }),

  computed: {
    defaultContent () {
      return this.defaultContentElements.join('\n');
    }
  }
}
</script>
<style scoped>

</style>