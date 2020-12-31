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
          <div>Image</div>
          <div>Video</div>
          <div>Description</div>
          <div>Quote</div>
          <div>Footnote</div>
          <div>Link</div>
          <div>Button</div>
          <div>File</div>
          <div>2 columns</div>
          <div>Table</div>
          <div>Table row</div>
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
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
