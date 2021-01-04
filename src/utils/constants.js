const columnClass = 'md-column';
    
export default {
    EDITOR_MODAL_TYPES: {
        IMAGE: 'IMAGE',
        VIDEO: 'VIDEO'
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
        SELF_CLOSING_ENCODED: '&quot;]'
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
        DESC_START: '<p class="md-description">',
        DESC_END: '</p>',
        IMG_START: '<img src="',
        IMG_END: '" alt="">',
        VIDEO_START: '<video controls><source src="',
        VIDEO_END: '" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video>'
    }
}