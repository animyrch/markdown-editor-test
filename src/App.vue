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
          :options="editorOptions"
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
      @on-cancel="onCloseModal"
      @on-click-item="onClickItem"
      @on-upload-success="onUploadSuccess"
      @on-upload-fail="onUploadFail"
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

  data () {
    return {
      editorContent: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://picsum.photos/200)  \n\n [img="https://picsum.photos/200"]  \n\n [col-left][img="https://picsum.photos/200"][/col-left][col-right][img="https://picsum.photos/200"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]',
      openAddToEditorModal: false,
      addToEditorExamples: null,
      editorOptions: [
          { 
            title: 'Image',
            id: this.$CONSTANTS.EDITOR_MODAL_TYPES.IMAGE,
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL,
            examples: [
              {
                src: 'https://images.unsplash.com/photo-1609528107558-a923db1c54dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1609534356473-d92a626e780b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
              },
              {
                src: 'https://images.unsplash.com/photo-1609608934835-80cfd2eaf62a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1441&q=80'
              }
            ]
          },
          { title: 'Video' },
          { title: 'Description' },
          { title: 'Quote' },
          { title: 'Footnote' },
          { title: 'Link' },
          { title: 'Button' },
          { title: 'File' },
          { 
            title: '2 columns', 
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '[col-left]content[/col-left][col-right]content[/col-right]'
          },
          {
            title: 'Table' , 
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '[table]content[/table]'
          },
          { 
            title: 'Table row', 
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '[row]content[/row]'
          }
        ]
    };
  },

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
    onCloseModal () {
      this.openAddToEditorModal = false;
    },
    onClickItem (item) {
      this.addImageToEditor(item.src);
    },
    onUploadSuccess (remoteUrl) {
      this.editorOptions[0].examples.push({
        src: remoteUrl
      });
      this.addImageToEditor(remoteUrl);
    },
    onUploadFail (err) {
      console.log(err);
    },
    addImageToEditor (url) {
      const opening = this.$CONSTANTS.CUSTOM_TAGS.IMAGE_OPENING;
      const closing = this.$CONSTANTS.CUSTOM_TAGS.SELF_CLOSING;
      const insertion = opening + url + closing;
      this.addToEditor(insertion);
    },
    addToEditor (insertion) {
      this.editorContent += '\n' + insertion;
    },
  }
};
</script>
