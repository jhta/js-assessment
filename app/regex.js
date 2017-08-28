exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: str => (/\d/).test(str),

  containsRepeatingLetter: (str) => (/([A-Za-z])\1+/).test(str), // (/(\w)\1/).test(str) numbers :(,

  endsWithVowel: (str) => (/[aeiouAEIOU]$/).test(str),

  captureThreeNumbers: (str) => {
    const ex = ((/[0-9]{3}/).exec(str));
    return ex ? ex[0] : false;
  },
  // XXX-XXX-XXXX
  matchesPattern: (str) => (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/).test(str),

  isUSD: (str) => (/^[+-]?[0-9]{1,3}(?:,?[0-9]{1,3})*\.[0-9]{1,3}$/).test(str)
};
