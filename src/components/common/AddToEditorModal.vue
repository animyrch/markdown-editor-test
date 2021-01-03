<template>
  <v-row justify="center">
    <v-dialog
      v-model="isVisible"
      max-width="500px"
    >
    <v-card>
      <v-card-title class="headline">
          Image
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-card-subtitle>
              Upload a new image
          </v-card-subtitle>
          <v-list-item>
            <v-file-input
              label="Click and select your image"
              filled
              prepend-icon="mdi-camera"
              v-model='selectedFile'
              @change="onFileInput"
            ></v-file-input>
          </v-list-item>
          <v-card-subtitle>
              Or select an existing images
          </v-card-subtitle>
          <v-row
            justify="center"
          >
            <template v-for="(item, index) in examples">
              <v-col
                cols="6"
                :key="index"
                @click="onClickItem(item)"
              >
                <v-img
                  aspect-ratio="1"
                  :src="item.src"
                ></v-img>
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
  name: 'AddToEditorModal',

  props: {
      examples: {
        type: Array
      },
      visible: {
        type: Boolean,
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
    },
    onFileInput (file) {
      // as proposed in the instructions
      this.$serverConnect.uploadNewImage(file)
        .then(this.onUploadSuccess, this.onUploadFail)
        .catch(err => this.onUploadFail(err));

      // below is how I would prefer to do the same. (not using callbacks. we would also need to add 'async' modifier to this method)
   /* try {
        const remoteUrl = await this.$serverConnect.uploadNewImage(file);
        this.onUploadSuccess(remoteUrl);
      } catch (err) {
        this.onUploadFail(err);
      } */
    },
    onUploadSuccess (remoteUrl) {
      this.$emit('on-upload-success', remoteUrl);
    },
    onUploadFail (err) {
      this.$emit('on-upload-fail', err);
    }
  }
}
</script>
<style scoped>

</style>