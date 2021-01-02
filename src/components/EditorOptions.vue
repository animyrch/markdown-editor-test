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

  data () {
    return {
      options: [
        { title: 'Image' },
        { title: 'Video' },
        { title: 'Description' },
        { title: 'Quote' },
        { title: 'Footnote' },
        { title: 'Link' },
        { title: 'Button' },
        { title: 'File' },
        { title: '2 columns', actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE, content: '[col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]' },
        { title: 'Table' , actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE, content: '[table]table content[/table]' },
        { title: 'Table row', actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE, content: '[row]row content[/row]' }
      ]
    };
  },

  methods: {
    onClickOption (option) {
      if (option.actionType === this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE && option.content) {
        this.$emit('on-print-example', option.content);
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