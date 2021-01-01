<template>
  <div>
    <v-textarea
      rows="24"
      name="markdown-input-area"
      :value="defaultContent"
      :hint="editorHint"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'EditorArea',

  data: () => ({
    defaultContentElements: [
      '# Header 1',
      '',
      '## Header 2',
      '',
      '### Header 3',
      '',
      'Lorem Ipsum sit amet',
      '',
      '**bold** *italic* _underline_',
      '',
      '[col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]',
      '',
      'This is a [link](https://exemplar.com/image.jpg)',
      '',
      '[img="https://exemplar.com/image.jpg"]',
      '',
      '[col-left][img="https://examplar.com/image.jpg"][/col-left][col-right][img="https://examplar.com/image.jpg"][/col-right]',
      '',
      '[table]',
      '[row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right]',
      '[row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row]',
      '[row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row]',
      '[/table]'
    ],
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