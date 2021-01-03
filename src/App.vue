<template>
  <v-app>
    <v-app-bar
      app
      flat
      absolute
      color="white"
    >
      <v-sheet
        class="pa-4"
      >
        <v-toolbar-title>Content</v-toolbar-title>
      </v-sheet>
    </v-app-bar>
    <v-main>
      <v-sheet
        class="px-8 py-4"
      >
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
      </v-sheet>
    </v-main>
    <ModalAddToEditor
      v-if="addToEditorModalContents.type"
      :contents="addToEditorModalContents"
      :visible="openAddToEditorModal"
      :uploadHandler="onFileInput"
      @on-cancel="onCloseModal"
      @on-click-item="onClickItem"
    />
  </v-app>
</template>

<script>
import './assets/main.css';
import EditorOptions from './components/EditorOptions';
import EditorArea from './components/EditorArea';
import RenderArea from './components/RenderArea';
import ModalAddToEditor from './components/ModalAddToEditor';

export default {
  name: 'App',

  components: {
    EditorOptions,
    EditorArea,
    RenderArea,
    ModalAddToEditor
  },

  data () {
    return {
      editorContent: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://example.com)  \n\n [img="https://picsum.photos/200"]  \n\n [col-left][img="https://picsum.photos/200"][/col-left][col-right][img="https://picsum.photos/200"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]',
      openAddToEditorModal: false,
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
          { 
            title: 'Video',
            id: this.$CONSTANTS.EDITOR_MODAL_TYPES.VIDEO,
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL,
            examples: [
              {
                src: 'https://assets.mixkit.co/videos/preview/mixkit-christmas-tree-in-a-close-shot-of-its-branches-and-39737-large.mp4'
              },
              {
                src: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4'
              }
            ]
          },
          //{ title: 'Description' },
          { 
            title: 'Quote',
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '\n> Blockquote'
          },
          { 
            title: 'Footnote',
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '^[Footnote]'
          },
          { 
            title: 'Link',
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: 'This is a [link](https://example.com)  '
          },
          //{ title: 'Button' },
          //{ title: 'File' },
          { 
            title: '2 columns', 
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '[col-left]content[/col-left][col-right]content[/col-right]'
          },
          {
            title: 'Table',
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '[table]content[/table]'
          },
          { 
            title: 'Table row', 
            actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
            content: '[row]content[/row]'
          }
        ],
      addToEditorModalContents: {
        type: null,
        title: null,
        uploadInstruction: null,
        uploadHint: null,
        selectInstruction: null,
        examples: []
      }
    };
  },

  methods: {
    onContentChange (newContent) {
      this.editorContent = newContent;
    },
    onPrintExample (example) {
      this.insertAtCursor(example);
    },
    onOpenModal (option) {
      this.addToEditorModalContents.type = option.id;
      this.setModalContents(option);
      this.openAddToEditorModal = true;
    },
    setModalContents (option) {
      this.addToEditorModalContents.type = option.id;
      this.addToEditorModalContents.examples = option.examples;
      switch (this.addToEditorModalContents.type) {
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.IMAGE:
          this.addToEditorModalContents.title = 'Image';
          this.addToEditorModalContents.uploadInstruction = 'Upload a new image';
          this.addToEditorModalContents.uploadHint = 'Click and select your image';
          this.addToEditorModalContents.selectInstruction = 'Or select an existing image';
          break;
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.VIDEO:
          this.addToEditorModalContents.title = 'Video';
          this.addToEditorModalContents.uploadInstruction = 'Upload a new video';
          this.addToEditorModalContents.uploadHint = 'Click and select your video';
          this.addToEditorModalContents.selectInstruction = 'Or select an existing video';
          break;
        default:
          break;
      }
    },
    onCloseModal () {
      this.openAddToEditorModal = false;
    },
    onClickItem (item) {
      switch (this.addToEditorModalContents.type) {
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.IMAGE:
          this.addImageToEditor(item.src);
          break;
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.VIDEO:
          this.addVideoToEditor(item.src);
          break;
        default:
          break;
      }
    },
    addImageToEditor (url) {
      const opening = this.$CONSTANTS.CUSTOM_TAGS.IMAGE_OPENING;
      const closing = this.$CONSTANTS.CUSTOM_TAGS.SELF_CLOSING;
      const insertion = opening + url + closing;
      this.insertAtCursor(insertion);
    },
    addVideoToEditor (url) {
      const opening = this.$CONSTANTS.CUSTOM_TAGS.VIDEO_OPENING;
      const closing = this.$CONSTANTS.CUSTOM_TAGS.SELF_CLOSING;
      const insertion = opening + url + closing;
      this.insertAtCursor(insertion);
    },
    onFileInput (file) {
      switch (this.addToEditorModalContents.type) {
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.IMAGE:
          this.onImageInput(file);
          break;
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.VIDEO:
          this.onVideoInput(file);
          break;
        default:
          break;
      }
    },
    onImageInput (imageFile) {
      // as proposed in the instructions
      this.$serverConnect.uploadNewImage(imageFile)
        .then(this.onUploadSuccess, this.onUploadFail)
        .catch(err => this.onUploadFail(err));

      // below is how I would prefer to do the same. (not using callbacks. we would also need to add 'async' modifier to this method)
   /* try {
        const remoteUrl = await this.$serverConnect.uploadNewImage(imageFile);
        this.onUploadSuccess(remoteUrl);
      } catch (err) {
        this.onUploadFail(err);
      } */
    },
    onVideoInput (videoFile) {
      this.$serverConnect.uploadNewVideo(videoFile)
        .then(this.onUploadSuccess, this.onUploadFail)
        .catch(err => this.onUploadFail(err));
    },
    onUploadSuccess (remoteUrl) {
      switch (this.addToEditorModalContents.type) {
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.IMAGE:
          this.editorOptions[0].examples.push({
            src: remoteUrl
          });
          break;
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.VIDEO:
          this.editorOptions[1].examples.push({
            src: remoteUrl
          });
          break;
        default:
          break;
      }
    },
    onUploadFail (err) {
      console.log(err);
    },
    insertAtCursor(insertion) {
      // https://stackoverflow.com/questions/11076975/how-to-insert-text-into-the-textarea-at-the-current-cursor-position
      const editorArea = document.getElementById('markdown-input-area');
      //IE support
      if (document.selection) {
          editorArea.focus();
          const sel = document.selection.createRange();
          sel.text = insertion;
      }
      //MOZILLA and others
      else if (editorArea.selectionStart || editorArea.selectionStart == '0') {
          const startPos = editorArea.selectionStart;
          const endPos = editorArea.selectionEnd;
          this.editorContent = this.editorContent.substring(0, startPos)
              + insertion
              + this.editorContent.substring(endPos, this.editorContent.length);
      } else {
          this.editorContent += insertion;
      }
    }
  }
};
/* <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> */
</script>


