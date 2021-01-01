<template>
  <v-app>
    <v-app-bar
      app
      flat
      absolute
      color="white"
    >
      <v-toolbar-title>Content</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-card
        outlined
      >
        <EditorOptions
        />
        <v-divider />
        <EditorArea
          :content="editorContent"
        />
        <v-divider />
        <RenderArea
          :source="editorContent"
        />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import EditorOptions from './components/EditorOptions';
import EditorArea from './components/EditorArea';
import RenderArea from './components/RenderArea';

export default {
  name: 'App',

  components: {
    EditorOptions,
    EditorArea,
    RenderArea
  },

  data: () => ({
    editorContent: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://exemplar.com/image.jpg)  \n\n [img="https://exemplar.com/image.jpg"]  \n\n [col-left][img="https://examplar.com/image.jpg"][/col-left][col-right][img="https://examplar.com/image.jpg"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]'
  }),
};
</script>
