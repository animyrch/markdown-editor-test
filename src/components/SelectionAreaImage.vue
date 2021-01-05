<template>
  <v-row>
    <v-col
      v-for="(item, index) in storedItems"
      :cols="6"
      :key="index"
    >
      <v-img
        aspect-ratio="1"
        :src="item.src"
        @click="onClickItem(item)"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'SelectionAreaImage',

  props: {
    storedItems: {
      type: Array,
      required: true
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