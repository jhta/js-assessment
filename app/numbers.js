exports = typeof window === 'undefined' ? global : window;

// for multiply
const getLen = (num) => {
  const dec = num.toString().split('.');
  return dec[1] ? dec[1].length : 0;
}

const multiply = (a, b) => {
  const aLen = getLen(a);
  const bLen = getLen(b);
  const len = aLen > bLen ? aLen : bLen;
  return ((a * (Math.pow(10, len)) * b).toFixed()) / (Math.pow(10, len));

}

exports.numbersAnswers = {
  // this was so dificult to understand
  // I have to shift right "bit - 1" times the binary number and get the last
  valueAtBit: (num, bit) => (num >> (bit - 1)) & 1,

  base10: str => parseInt(str, 2),

  convertToBinary: num => {
    const bin = (parseInt(num)).toString(2);
    let zeroes = '';
    for (let i = 0; i < (8 - bin.length); i++) {
      zeroes = zeroes + '0';
    }
    return zeroes + bin;
  },
  multiply: multiply
};
