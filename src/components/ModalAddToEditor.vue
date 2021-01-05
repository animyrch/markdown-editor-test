<template>
  <Modal
    :visible="visible"
    @on-cancel="isVisible = false"
  >
    <template v-slot:title>
      {{ contents.title }}
    </template>
    <template v-slot:body>
      <v-list>
        <v-card-subtitle>
          {{ contents.uploadInstruction }}
        </v-card-subtitle>
        <v-list-item>
          <v-file-input
            :label="contents.uploadHint"
            filled
            :prepend-icon="$CONSTANTS.EDITOR_MODAL_TYPES.FILE ? 'mdi-file' : 'mdi-camera'"
            v-model='selectedFile'
            @change="uploadHandler"
          ></v-file-input>
        </v-list-item>
        <v-card-subtitle>
            {{ contents.selectInstruction }}
        </v-card-subtitle>
        <v-row
          justify="center"
        >
          <SelectionAreaVideo
            v-if="contents.type === $CONSTANTS.EDITOR_MODAL_TYPES.VIDEO"
            :storedItems="contents.storedItems"
            @on-click-item="onClickItem"
          />
          <SelectionAreaImage
            v-if="contents.type === $CONSTANTS.EDITOR_MODAL_TYPES.IMAGE"
            :storedItems="contents.storedItems"
            @on-click-item="onClickItem"
          />
          <SelectionAreaFile
            v-if="contents.type === $CONSTANTS.EDITOR_MODAL_TYPES.FILE"
            :storedItems="contents.storedItems"
            @on-click-item="onClickItem"
          />
        </v-row>
      </v-list>
    </template>
  </Modal>
</template>

<script>
import Modal from './generic/Modal';
import SelectionAreaVideo from './SelectionAreaVideo';
import SelectionAreaImage from './SelectionAreaImage';
import SelectionAreaFile from './SelectionAreaFile';

export default {
  name: 'ModalAddToEditor',

  components: {
    Modal,
    SelectionAreaVideo,
    SelectionAreaImage,
    SelectionAreaFile
  },

  props: {
    contents: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    uploadHandler: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      selectedFile: null
    };
  },

  computed: {
    isVisible: {
      get () {
        return this.visible;
      },
      set (val) {
        this.selectedFile = null;
        this.$emit('on-cancel', val);
      }
    }
  },

  methods: {
    onClickItem (item) {
      this.$emit('on-click-item', item);
    }
  }
}
</script>
