module.exports = function removeCommentsLoader(source) { // eslint-disable-line
  return source.replace(/<!--(.*?)-->/g, '');
};