// addTableTags
// addRowTags
// addColLeftTags
// addColRightTags

// addTag
import CONSTANTS from './constants';

function replaceTags (input) {
    input = _convertTableTags(input);
    input = _convertRowTags(input);
    input = _convertColTags(input);
    return input;
}

function _convertTableTags (input) {
    return input
        .replace(CONSTANTS.REGEX.TABLE_START, CONSTANTS.MARKUP.TABLE_START)
        .replace(CONSTANTS.REGEX.TABLE_END, CONSTANTS.MARKUP.TABLE_END);
}
function _convertRowTags (input) {
    return input
        .replace(CONSTANTS.REGEX.ROW_START, CONSTANTS.MARKUP.ROW_START)
        .replace(CONSTANTS.REGEX.ROW_END, CONSTANTS.MARKUP.ROW_END);
}
function _convertColTags (input) {
    return input
        .replace(CONSTANTS.REGEX.COL_LEFT_START, CONSTANTS.MARKUP.COL_LEFT_START)
        .replace(CONSTANTS.REGEX.COL_RIGHT_START, CONSTANTS.MARKUP.COL_RIGHT_START)
        .replace(CONSTANTS.REGEX.COL_LEFT_END, CONSTANTS.MARKUP.COL_LEFT_END)
        .replace(CONSTANTS.REGEX.COL_RIGHT_END, CONSTANTS.MARKUP.COL_RIGHT_END);
}
export {
    replaceTags
};