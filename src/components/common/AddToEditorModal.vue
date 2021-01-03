<template>
  <v-row justify="center">
    <v-dialog
      v-model="isVisible"
      max-width="500px"
    >
    <v-card>
      <v-card-title class="headline">
          Select an image or upload a new one
        </v-card-title>
        <v-card-text>
           <v-list>
            <template v-for="(item, index) in examples">
              <v-divider
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item
                :key="item.title"
                @click="onClickItem(item)"
              >
                <v-list-item-content>
                  <v-container>
                    <v-row
                      justify="center"
                    >
                      <v-col
                        cols="7"
                      >
                        <v-img
                          :src="item.src"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-list-item-content>
              </v-list-item>
            </template>
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

  computed: {
    isVisible: {
      get () {
        return this.visible;
      },
      set (val) {
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