import CONSTANTS from './constants';

function replaceTags (input) {
  input = _convertTableTags(input);
  input = _convertRowTags(input);
  input = _convertColTags(input);
  input = _convertDescTags(input);
  input = _convertImgTags(input);
  input = _convertVideoTags(input);
  input = _convertBtnTags(input);
  input = _convertFileTags(input);
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
function _convertDescTags (input) {
  return input
    .replace(CONSTANTS.REGEX.DESC_START, CONSTANTS.MARKUP.DESC_START)
    .replace(CONSTANTS.REGEX.DESC_END, CONSTANTS.MARKUP.DESC_END);
}
function _convertImgTags (input) {
  return _convertSelfClosingTag({
    input,
    selfClosingTag: CONSTANTS.CUSTOM_TAGS.IMAGE_OPENING_ENCODED,
    startMarkup: CONSTANTS.MARKUP.IMG_START,
    endMarkup: CONSTANTS.MARKUP.IMG_END
  });
}
function _convertVideoTags (input) {
  return _convertSelfClosingTag({
    input,
    selfClosingTag: CONSTANTS.CUSTOM_TAGS.VIDEO_OPENING_ENCODED,
    startMarkup: CONSTANTS.MARKUP.VIDEO_START,
    endMarkup: CONSTANTS.MARKUP.VIDEO_END
  });
}
function _convertBtnTags (input) {
  input = _convertSelfClosingTag ({ 
    input, 
    selfClosingTag: CONSTANTS.CUSTOM_TAGS.BTN_WITH_TARGET_ENCODED, 
    startMarkup: CONSTANTS.MARKUP.BUTTON_START, 
    endMarkup: CONSTANTS.MARKUP.BUTTON_OPENING_END
  });
  return input
    .replace(CONSTANTS.REGEX.BUTTON_END, CONSTANTS.MARKUP.BUTTON_END);
}
function _convertFileTags (input) {
  input = _convertSelfClosingTag ({ 
    input, 
    selfClosingTag: CONSTANTS.CUSTOM_TAGS.FILE_WITH_TARGET_ENCODED, 
    startMarkup: CONSTANTS.MARKUP.FILE_START, 
    endMarkup: CONSTANTS.MARKUP.FILE_OPENING_END
  });
  return input
    .replace(CONSTANTS.REGEX.FILE_END, CONSTANTS.MARKUP.FILE_END);
}

function _convertSelfClosingTag ({ input, selfClosingTag, startMarkup, endMarkup }) {
  const foundPlacements = _findSelfClosingTagPlacements(input, selfClosingTag);
  // going backwards so that changing length of input doesn't bother us.
  for (let i=foundPlacements.length-1; i >= 0; i--) {
    input = input.substring(0, foundPlacements[i].start) + 
      startMarkup +
      input.substring(foundPlacements[i].start+selfClosingTag.length, foundPlacements[i].end-CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED.length) + 
      endMarkup +
      input.substring(foundPlacements[i].end, input.length);
  }
  return input;
}
function _findSelfClosingTagPlacements (input, selfClosingTag) {
  const foundPlacements = [];
  for(let i=0, len=input.length; i<len;i++) {
    const detectedTagOpening = input.substring(i, i+selfClosingTag.length) === selfClosingTag;
    if (detectedTagOpening) {
      let detectedTagClosing = false;
      let isInputEnd = false;
      let j = i;
      while(!detectedTagClosing && !isInputEnd) {
        isInputEnd = ++j === input.length;
        detectedTagClosing = input.substring(j-CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED.length, j) === CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED;
      }
      foundPlacements.push({
        start: i,
        end: j
      });
    }
  }
  return foundPlacements;
}

export {
  replaceTags
};