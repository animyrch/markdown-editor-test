<template>
  <v-row justify="center">
    <v-dialog
      v-model="isVisible"
      max-width="600px"
    >
      <v-card>
        <v-card-title class="headline">
          <slot name="title"></slot>
        </v-card-title>
        <v-card-text>
          <slot name="body"></slot>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'Modal',

  props: {
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
  }
}
</script>
