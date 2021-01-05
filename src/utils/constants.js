const columnClass = 'md-column';
// Sorry, your browser doesn\'t support embedded videos.
    
export default {
    EDITOR_MODAL_TYPES: {
        IMAGE: 'IMAGE',
        VIDEO: 'VIDEO',
        FILE: 'FILE'
    },
    EDITOR_ACTIONS: {
        PRINT_EXAMPLE: 'PRINT_EXAMPLE',
        OPEN_MODAL: 'OPEN_MODAL'
    },
    CUSTOM_TAGS: {
        IMAGE_OPENING: '[img="',
        IMAGE_OPENING_ENCODED: '[img=&quot;',
        VIDEO_OPENING: '[video="',
        VIDEO_OPENING_ENCODED: '[video=&quot;',
        SELF_CLOSING: '"]',
        SELF_CLOSING_ENCODED: '&quot;]',
        BTN_WITH_TARGET_ENCODED: '[btn target=&quot;',
        FILE_WITH_TARGET: '[file target="',
        FILE_WITH_TARGET_ENCODED: '[file target=&quot;',
        FILE_CLOSING: '[/file]'
    },
    REGEX: {
        TABLE_START: /\[table\]/g,
        TABLE_END: /\[\/table\]/g,
        ROW_START: /\[row\]/g,
        ROW_END: /\[\/row\]/g,
        COL_LEFT_START: /\[col-left\]/g,
        COL_RIGHT_START: /\[col-right\]/g,
        COL_LEFT_END: /\[\/col-left\]/g,
        COL_RIGHT_END: /\[\/col-right\]/g,
        DESC_START: /\[desc\]/g,
        DESC_END: /\[\/desc\]/g,
        BUTTON_END: /\[\/btn\]/g,
        FILE_END: /\[\/file\]/g
    },
    MARKUP: {
        TABLE_START: '<table><tbody>',
        TABLE_END: '</tbody></table>',
        ROW_START: '<tr><td>',
        ROW_END: '</td></tr>',
        COL_LEFT_START: `<div class="${columnClass}">`,
        COL_RIGHT_START: `<div class="${columnClass}">`,
        COL_LEFT_END: '</div>',
        COL_RIGHT_END: '</div>',
        DESC_START: '<span class="md-description">',
        DESC_END: '</span>',
        IMG_START: '<img src="',
        IMG_END: '" alt="">',
        VIDEO_START: '<video controls><source src="',
        VIDEO_END: '" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video>',
        BUTTON_START: '<button class="md-button" onclick="location.href = \'',
        BUTTON_OPENING_END: '\'">',
        BUTTON_END: '</button>',
        FILE_START: '<a href="',
        FILE_OPENING_END: '" download>',
        FILE_END: '</a>'
    },
    CONTENT: {
        EDITOR_PLACEHOLDER: 'placeholder',
        EDITOR_START_TEXT: '# Header 1 \n\n ## Header 2 \n\n ### Header 3 \n\n Lorem Ipsum sit amet \n\n **bold** *italic* _underline_   \n\n  [col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right]  \n\n This is a [link](https://example.com)  \n\n [img="https://picsum.photos/200"]  \n\n [col-left][img="https://picsum.photos/200"][/col-left][col-right][img="https://picsum.photos/200"][/col-right] \n\n [table] \n [row][col-left]**Make it bold**[/col-left][col-right]**Make it bold**[/col-right] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [row][col-left]Content in the left column[/col-left][col-right]Content in the right column[/col-right][/row] \n [/table]',
        EXAMPLE_TAG_CONTENT: 'Content',
        UPLOAD_IMAGE: 'Upload a new image',
        UPLOAD_HINT_IMAGE: 'Click and select your image',
        SELECT_IMAGE: 'Or select an existing image',
        UPLOAD_VIDEO: 'Upload a new video',
        UPLOAD_HINT_VIDEO: 'Click and select your video',
        SELECT_VIDEO: 'Or select an existing video',
        UPLOAD_FILE: 'Upload a new file',
        UPLOAD_HINT_FILE: 'Click and select your file',
        SELECT_FILE: 'Or select an existing file',
        UPLOAD_COMPLETE: 'Upload complete',
        INSERTION_COMPLETE: 'New element inserted',
        UPLOAD_FAILURE: 'File upload error',
        IMAGE: 'Image',
        VIDEO: 'Video', 
        DESC: 'Description',
        QUOTE: 'Quote',
        FOOTNOTE: 'Footnote',
        LINK: 'Link',
        FILE: 'File',
        BLOCKQUOTE: 'Blockquote',
        EXPLANATION: 'This is a',
        TABLE_ROW: 'Table row',
        TABLE: 'Table',
        TWO_COLUMNS: '2 columns', 
        BUTTON: 'Button'
    }
}