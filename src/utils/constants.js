const columnDivStyle = 'style="width: 50%;display: inline-block;"';
    
export default {
    EDITOR_ACTIONS: {
        PRINT_EXAMPLE: 'PRINT_EXAMPLE',
        OPEN_MODEL: 'OPEN_MODEL'
    },
    CUSTOM_TAGS: {
        IMAGE_OPENING: '[img=&quot;',
        VIDEO_OPENING: '[video=&quot;',
        SELF_CLOSING: '&quot;]'
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
    },
    MARKUP: {
        TABLE_START: '<table><tbody>',
        TABLE_END: '</tbody></table>',
        ROW_START: '<tr><td>',
        ROW_END: '</td></tr>',
        COL_LEFT_START: `<div ${columnDivStyle}>`,
        COL_RIGHT_START: `<div ${columnDivStyle}>`,
        COL_LEFT_END: '</div>',
        COL_RIGHT_END: '</div>',
        IMG_START: '<img src="',
        IMG_END: '" alt="">',
        VIDEO_START: '<video controls width="250"><source src="',
        VIDEO_END: '" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video>'
    }
}