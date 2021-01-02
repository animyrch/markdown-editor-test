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
          @on-content-changed="onContentChange"
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
import './assets/main.css';
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
    editorContent: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://picsum.photos/200)  \n\n [img="https://picsum.photos/200"]  \n\n [col-left][img="https://picsum.photos/200"][/col-left][col-right][img="https://picsum.photos/200"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]'
  }),

  methods: {
    onContentChange (newContent) {
      this.editorContent = newContent;
    }
  }
};
</script>
