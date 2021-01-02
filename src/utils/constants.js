const columnDivStyle = 'style="width: 50%;display: inline-block;"';
    
export default {
    REGEX: {
        TABLE_START: /\[table\]/g,
        TABLE_END: /\[\/table\]/g,
        ROW_START: /\[row\]/g,
        ROW_END: /\[\/row\]/g,
        COL_LEFT_START: /\[col-left\]/g,
        COL_RIGHT_START: /\[col-right\]/g,
        COL_LEFT_END: /\[\/col-left\]/g,
        COL_RIGHT_END: /\[\/col-right\]/g
    },
    MARKUP: {
        TABLE_START: '<table><tbody>',
        TABLE_END: '</tbody></table>',
        ROW_START: '<tr><td>',
        ROW_END: '</td></tr>',
        COL_LEFT_START: `<div ${columnDivStyle}>`,
        COL_RIGHT_START: `<div ${columnDivStyle}>`,
        COL_LEFT_END: '</div>',
        COL_RIGHT_END: '</div>'
    }
}