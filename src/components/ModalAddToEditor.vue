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
            prepend-icon="mdi-camera"
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
          <template v-for="(item, index) in contents.storedItems">
            <v-col
              :cols="contents.type === $CONSTANTS.EDITOR_MODAL_TYPES.IMAGE ? 6 : 12"
              :key="index"
            >
              <v-img
                v-if="contents.type === $CONSTANTS.EDITOR_MODAL_TYPES.IMAGE"
                aspect-ratio="1"
                :src="item.src"
                @click="onClickItem(item)"
              ></v-img>
              <div
                v-if="contents.type === $CONSTANTS.EDITOR_MODAL_TYPES.VIDEO"
              >
                <v-row>
                  <v-col
                    cols='8'
                  >
                    <video
                      controls
                    >
                      <source
                        :src="item.src"
                        type="video/mp4"
                      >
                        Sorry, your browser doesn\'t support embedded videos
                    </video>
                  </v-col>
                  <v-col
                    cols="4"
                    align-self="center"
                  >
                    <v-btn
                      @click="onClickItem(item)"
                    >
                      Select
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-list>
    </template>
  </Modal>
</template>

<script>
import Modal from './generic/Modal';

export default {
  name: 'ModalAddToEditor',

  components: {
    Modal
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

<style scoped>
video{
  width: 100%;
}
</style>