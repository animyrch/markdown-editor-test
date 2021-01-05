# markdown-editor-test

## Notes

* Mockup shows colors within the editor's textarea for custom tags. This could be achieved easily with a div by setting contenteditable=true but we would lose the natural feel and functionalities of a native textarea. Another way of achieving this would be to use a WYSIWYG editor plugin but this would defeat the purpose of this exercice since we are creating our own editor-renderer. Therefore, I opted not to use colors for custom tags.

* Extracted strings to the `src/utils/constants.js` file so that the app is ready to integrate VueI18n.

* I didn't implement vue-router and vue store to this simple application since no navigation was precised in the instructions.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Tests
```
npm run test
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
