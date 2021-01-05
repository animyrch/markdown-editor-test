// https://github.com/arve0/markdown-it-underline/blob/master/index.js
module.exports = function markdownItUnderline (md) {
  function renderEm (tokens, idx, opts, _, slf) {
    const token = tokens[idx];
    if (token.markup === '_') {
      token.tag = 'u';
    }
    return slf.renderToken(tokens, idx, opts);
  }

  md.renderer.rules.em_open = renderEm;
  md.renderer.rules.em_close = renderEm;
};