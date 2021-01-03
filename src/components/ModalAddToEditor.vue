<template>
  <v-row justify="center">
    <v-dialog
      v-model="isVisible"
      max-width="500px"
    >
    <v-card>
      <v-card-title class="headline">
        <slot name="title"></slot>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-card-subtitle>
            <slot name="uploadInstruction"></slot>
          </v-card-subtitle>
          <v-list-item>
            <v-file-input
              :label="uploadHint"
              filled
              prepend-icon="mdi-camera"
              v-model='selectedFile'
              @change="uploadHandler"
            ></v-file-input>
          </v-list-item>
          <v-card-subtitle>
              <slot name="selectInstruction"></slot>
          </v-card-subtitle>
          <v-row
            justify="center"
          >
            <template v-for="(item, index) in examples">
              <v-col
                :cols="type === $CONSTANTS.EDITOR_MODAL_TYPES.IMAGE ? 6 : 12"
                :key="index"
              >
                <v-img
                  v-if="type === $CONSTANTS.EDITOR_MODAL_TYPES.IMAGE"
                  aspect-ratio="1"
                  :src="item.src"
                  @click="onClickItem(item)"
                ></v-img>
                <div
                  v-if="type === $CONSTANTS.EDITOR_MODAL_TYPES.VIDEO"
                >
                  <v-row>
                    <v-col
                      cols='8'>
                      <video
                        controls
                        width="100%"
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
      </v-card-text>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ModalAddToEditor',

  props: {
    type: {
      type: String,
      required: true
    },
    examples: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    uploadHint: {
      type: String,
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

</style>