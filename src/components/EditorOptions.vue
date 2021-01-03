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
        { 
          title: 'Image',
          id: this.$CONSTANTS.EDITOR_MODAL_TYPES.IMAGE,
          actionType: this.$CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL,
          examples: [
            {
              src: 'https://images.unsplash.com/photo-1609528107558-a923db1c54dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80'
            },
            {
              src: 'https://images.unsplash.com/photo-1609534356473-d92a626e780b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
            }
          ]
        },
        { title: 'Video' },
        { title: 'Description' },
        { title: 'Quote' },
        { title: 'Footnote' },
        { title: 'Link' },
        { title: 'Button' },
        { title: 'File' },
        { 
          title: '2 columns', 
          actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
          content: '[col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]'
        },
        { 
          title: 'Table' , 
          actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
          content: '[table]table content[/table]'
        },
        { 
          title: 'Table row', 
          actionType: this.$CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
          content: '[row]row content[/row]'
        }
      ]
    };
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