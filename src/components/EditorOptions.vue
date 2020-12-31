<template>
  <div>
    <div
      class="option-container"
      v-for="(option, index) in options"
      :key="index"
    >
      {{ option.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorOptions',

  data: () => ({
    options: [
      { title: 'Image' },
      { title: 'Video' },
      { title: 'Description' },
      { title: 'Quote' },
      { title: 'Footnote' },
      { title: 'Link' },
      { title: 'Button' },
      { title: 'File' },
      { title: '2 columns' },
      { title: 'Table' },
      { title: 'Table row' }
    ]
  }),
}
</script>
<style scoped>
.option-container{
  display: inline-block;
  padding: 10px;
}
</style>