<template>
  <v-snackbar
    v-model="isVisible"
    timeout="1000"
    shaped
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="isVisible = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',

  props: {
    visible: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
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
