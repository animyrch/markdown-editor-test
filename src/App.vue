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
          @on-print-example="onPrintExample"
          @on-open-modal="onOpenModal"
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
    <AddToEditorModal
      :examples="addToEditorExamples"
      :visible="openAddToEditorModal"
      @on-cancel="openAddToEditorModal = false"
      @on-click-item="onClickItem"
    />
  </v-app>
</template>

<script>
import './assets/main.css';
import EditorOptions from './components/EditorOptions';
import EditorArea from './components/EditorArea';
import RenderArea from './components/RenderArea';
import AddToEditorModal from './components/common/AddToEditorModal';

export default {
  name: 'App',

  components: {
    EditorOptions,
    EditorArea,
    RenderArea,
    AddToEditorModal
  },

  data: () => ({
    editorContent: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://picsum.photos/200)  \n\n [img="https://picsum.photos/200"]  \n\n [col-left][img="https://picsum.photos/200"][/col-left][col-right][img="https://picsum.photos/200"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]',
    openAddToEditorModal: false,
    addToEditorExamples: null
  }),

  methods: {
    onContentChange (newContent) {
      this.editorContent = newContent;
    },
    onPrintExample (example) {
      this.addToEditor(example);
    },
    onOpenModal (option) {
      this.addToEditorType = option.id;
      this.addToEditorExamples = option.examples;
      this.openAddToEditorModal = true;
    },
    onClickItem (item) {
      const opening = this.$CONSTANTS.CUSTOM_TAGS.IMAGE_OPENING;
      const closing = this.$CONSTANTS.CUSTOM_TAGS.SELF_CLOSING;
      const insertion = opening + item.src + closing;
      this.addToEditor(insertion);
    },
    addToEditor (insertion) {
      this.editorContent += '\n' + insertion;
    }
  }
};
</script>
