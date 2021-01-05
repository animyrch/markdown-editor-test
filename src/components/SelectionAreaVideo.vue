<template>
  <div>
    <v-col
      v-for="(item, index) in storedItems"
      :key="index"
    >
      <div
      >
        <v-row>
          <v-col
            :cols='8'
          >
            <video
              controls
            >
              <source
              :src="item.src"
              type="video/mp4"
              >
              Sorry, your browser doesn\'t support embedded videos
            </video>
          </v-col>
          <v-col
            :cols="4"
            align-self="center"
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
  </div>
</template>

<script>

export default {
  name: 'SelectionAreaVideo',

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
video{
  width: 100%;
}
</style>