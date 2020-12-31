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
        <v-divider>
        </v-divider>
        <v-textarea
          name="markdown-input-area"
          value="# Header"
          hint="**Bold** *Italic* _Underline_ List with bullets # H1 ## H2 ### H3 #### H4 ##### H5 ###### H6"
        ></v-textarea>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import EditorOptions from './components/EditorOptions';

export default {
  name: 'App',

  components: {
    EditorOptions
  },

  data: () => ({
    //
  }),
};
</script>
