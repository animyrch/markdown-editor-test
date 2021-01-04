import CONSTANTS from './constants';

function replaceTags (input) {
  input = _convertTableTags(input);
  input = _convertRowTags(input);
  input = _convertColTags(input);
  input = _convertDescTags(input);
  input = _convertImgTags(input);
  input = _convertVideoTags(input);
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
function _convertSelfClosingTag ({ input, selfClosingTag, startMarkup, endMarkup }) {
  const { matchedStartingIndices, matchedEndingIndices } = _findSelfClosingTagPlacements(input, selfClosingTag);
  // going backwards so that changing length of input doesn't bother us.
  for (let i=matchedEndingIndices.length-1; i >= 0; i--) {
    input = input.substring(0, matchedStartingIndices[i]) + 
      startMarkup +
      input.substring(matchedStartingIndices[i]+selfClosingTag.length, matchedEndingIndices[i]) + 
      endMarkup +
      input.substring(matchedEndingIndices[i]+CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED.length, input.length);
  }
  return input;
}
function _findSelfClosingTagPlacements (input, selfClosingTag) {
  const matchedStartingIndices = [];
  const matchedEndingIndices = [];
  for(let i=0, len=input.length; i<len;i++) {
    const detectedTagOpening = input.substring(i, i+selfClosingTag.length) === selfClosingTag;
    if (detectedTagOpening) {
      matchedStartingIndices.push(i);
      let detectedTagClosing = false;
      let isInputEnd = false;
      let j = i;
      while(!detectedTagClosing && !isInputEnd) {
        isInputEnd = ++j === input.length;
        detectedTagClosing = input.substring(j-CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED.length, j) === CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED;
        if (detectedTagClosing) {
          matchedEndingIndices.push(j-CONSTANTS.CUSTOM_TAGS.SELF_CLOSING_ENCODED.length);
        }
      }
    }
  }
  return {
    matchedStartingIndices,
    matchedEndingIndices
  };
}
export {
  replaceTags
};