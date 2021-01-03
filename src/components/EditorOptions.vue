<template>
  <div>
    <v-list>
      <v-list-item
        class="option-container"
        v-for="(option, index) in options"
        :key="index"
        @click="onClickOption(option)"
      >
        <p class="text--secondary">
          {{ option.title }}
        </p>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'EditorOptions',

  props: {
    options: {
      type: Array,
      required: true
    }
  },

  methods: {
    onClickOption (option) {
      if (option.actionType === this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE && option.content) {
        this.$emit('on-print-example', option.content);
      }
      if (option.actionType === this.$CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL && option.examples) {
        console.log(option.examples);
        this.$emit('on-open-modal', option);
      }
    }
  }
}
</script>
<style scoped>
.option-container{
  display: inline-block;
  padding: 10px;
  cursor: pointer;
}
</style>