import CONSTANTS from './constants';

export default {
    image: { 
      title: 'Image',
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
      title: 'Video',
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
      title: 'Description',
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: '[desc]content[/desc]'
    },
    quote: {
      title: 'Quote',
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: '\n> Blockquote'
    },
    footnote: { 
      title: 'Footnote',
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: '^[Footnote]'
    },
    link: { 
      title: 'Link',
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: 'This is a [link](https://example.com)  '
    },
    //{ title: 'Button' },
    //{ title: 'File' },
    twoColumns: { 
      title: '2 columns', 
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: '[col-left]content[/col-left][col-right]content[/col-right]'
    },
    table: {
      title: 'Table',
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: '[table]content[/table]'
    },
    tableRow: { 
      title: 'Table row', 
      actionType: CONSTANTS.EDITOR_ACTIONS.PRINT_EXAMPLE,
      content: '[row]content[/row]'
    }
};