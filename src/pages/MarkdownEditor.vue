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
    <Snackbar
      :visible="showSnackbar"
      :text="snackbarMessage"
      @on-cancel="showSnackbar = false"
    />
  </v-app>
</template>

<script>
import EditorOptions from '../components/EditorOptions';
import EditorArea from '../components/EditorArea';
import RenderArea from '../components/RenderArea';
import ModalAddToEditor from '../components/ModalAddToEditor';
import Snackbar from '../components/generic/Snackbar';
import editorOptions from '../utils/editorOptions';

export default {
  name: 'MarkdownEditor',

  components: {
    EditorOptions,
    EditorArea,
    RenderArea,
    ModalAddToEditor,
    Snackbar
  },

  data () {
    return {
      editorContent: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://example.com)  \n\n [img="https://picsum.photos/200"]  \n\n [col-left][img="https://picsum.photos/200"][/col-left][col-right][img="https://picsum.photos/200"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]',
      openAddToEditorModal: false,
      showSnackbar: false,
      snackbarMessage: '',
      editorOptions,
      addToEditorModalContents: {
        type: null,
        title: null,
        uploadInstruction: null,
        uploadHint: null,
        selectInstruction: null,
        storedItems: []
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
      this.addToEditorModalContents.storedItems = option.storedItems;
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
          this.editorOptions.image.storedItems.push({
            src: remoteUrl
          });
          break;
        case this.$CONSTANTS.EDITOR_MODAL_TYPES.VIDEO:
          this.editorOptions.video.storedItems.push({
            src: remoteUrl
          });
          break;
        default:
          break;
      }
      this.snackbarMessage = 'Upload complete';
      this.showSnackbar = true;
    },
    onUploadFail (err) {
      this.snackbarMessage = err.message;
      this.showSnackbar = true;
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
      this.snackbarMessage = 'New element inserted';
      this.showSnackbar = true;
    }
  }
};
</script>


