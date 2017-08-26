exports = typeof window === 'undefined' ? global : window;

var recursiveFib = (base, el1, el2) => !base ?
    el2
    :
    recursiveFib((--base), el2, el1 + el2);

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: (n) => recursiveFib(n - 1, 0, 1),

  validParentheses: function(n) {

  }
};
