exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: (str, cols) => str.split(' ')
    .reduce((array, val) => {
      const last = array[array.length - 1];
      const acum = array.slice(0, array.length - 1);
      return !last ?
        [val]
        :
        (last.length + val.length <= cols - 1) ?
          [...acum, (last + ' ' + val)]
          :
          [...acum, last, val];
    }, [])
    .join('\n'),

  reverseString: (str) => str.split('').reverse().join('')
};
