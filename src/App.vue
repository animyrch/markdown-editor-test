<template>
  <v-app>
    <v-app-bar
      app
      flat
      absolute
      color="white"
    >
      <v-toolbar-title>Content</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-card
        outlined
      >
        <EditorOptions
        />
        <v-divider />
        <EditorArea
        />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import EditorOptions from './components/EditorOptions';
import EditorArea from './components/EditorArea';

export default {
  name: 'App',

  components: {
    EditorOptions,
    EditorArea
  },

  data: () => ({
    //
  }),
};
</script>
