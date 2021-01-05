import CONSTANTS from './constants';

export default {
    image: { 
      title: CONSTANTS.CONTENT.IMAGE,
      id: CONSTANTS.EDITOR_MODAL_TYPES.IMAGE,
      actionType: CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL,
      storedItems: [
        {
          src: 'https://images.unsplash.com/photo-1609528107558-a923db1c54dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1609534356473-d92a626e780b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
        },
        {
          src: 'https://images.unsplash.com/photo-1609608934835-80cfd2eaf62a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1441&q=80'
        }
      ]
    },
    video: {
      title: CONSTANTS.CONTENT.VIDEO,
      id: CONSTANTS.EDITOR_MODAL_TYPES.VIDEO,
      actionType: CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL,
      storedItems: [
        {
          src: 'https://assets.mixkit.co/videos/preview/mixkit-christmas-tree-in-a-close-shot-of-its-branches-and-39737-large.mp4'
        },
        {
          src: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4'
        }
      ]
    },
    description: { 
      title: CONSTANTS.CONTENT.DESC,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `[desc]${CONSTANTS.CONTENT.EXAMPLE_TAG_CONTENT}[/desc]`
    },
    quote: {
      title: CONSTANTS.CONTENT.QUOTE,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `\n> ${CONSTANTS.CONTENT.BLOCKQUOTE}`,
    },
    footnote: { 
      title: CONSTANTS.CONTENT.FOOTNOTE,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `^[${CONSTANTS.CONTENT.FOOTNOTE}]`
    },
    link: { 
      title: CONSTANTS.CONTENT.LINK,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `${CONSTANTS.CONTENT.EXPLANATION} [${CONSTANTS.CONTENT.LINK}](https://example.com)  `
    },
    button: {
      title: CONSTANTS.CONTENT.BUTTON,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `[btn target="https://example.com"]${CONSTANTS.CONTENT.EXAMPLE_TAG_CONTENT}[/btn]`
    },
    file: {
      title: CONSTANTS.CONTENT.FILE,
      id: CONSTANTS.EDITOR_MODAL_TYPES.FILE,
      actionType: CONSTANTS.EDITOR_ACTIONS.OPEN_MODAL,
      storedItems: [
        {
          src: 'https://www.w3schools.com/images/myw3schoolsimage.jpg'
        }
      ]
      // content: `[file target="https://www.w3schools.com/images/myw3schoolsimage.jpg"]${CONSTANTS.CONTENT.EXPLANATION} ${CONSTANTS.CONTENT.FILE}[/file]`
    },
    twoColumns: { 
      title: CONSTANTS.CONTENT.TWO_COLUMNS,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `[col-left]${CONSTANTS.CONTENT.EXAMPLE_TAG_CONTENT}[/col-left][col-right]${CONSTANTS.CONTENT.EXAMPLE_TAG_CONTENT}[/col-right]`
    },
    table: {
      title: CONSTANTS.CONTENT.TABLE,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `[table]${CONSTANTS.CONTENT.EXAMPLE_TAG_CONTENT}[/table]`
    },
    tableRow: { 
      title: CONSTANTS.CONTENT.TABLE_ROW,
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: `[row]${CONSTANTS.CONTENT.EXAMPLE_TAG_CONTENT}[/row]`
    }
};