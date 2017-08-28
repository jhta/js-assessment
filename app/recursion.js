exports = typeof window === 'undefined' ? global : window;
const parseSub = file =>
  ((typeof file !== 'string') ?
    parseData(file)
    :
    file
  );

const parseData = data =>
      data.files
      .reduce((acum, file) => {
        const parseFile = parseSub(file);
        return (typeof parseFile !== 'string') ?
          [...acum, ...parseFile]
          :
          [...acum, parseFile]
      }, []);

const findFolder = (data, dirName) =>
  (data.dir === dirName) ?
    data
    :
    data.files.find(file => typeof file !== 'string');


const findFiles = (data, dirName) => dirName ?
  parseData(findFolder(data, dirName))
  :
  parseData(data);

// permutations
const getAllPermutations = arr => {
  var results = [];

  if (arr.length === 1) {
    return [...results, arr];
  }

  arr.forEach( (firstChar, i) => {
    var charsLeft = [...arr.slice(0, i), ...arr.slice(i + 1)];
    var innerPermutations = getAllPermutations(charsLeft);
    innerPermutations.forEach(
      (perm) => { results.push(firstChar + perm)}
    );
  })
  return results;
}


// used for fiboacci
var recursiveFib = (base, el1, el2) => !base ?
    el2
    :
    recursiveFib((--base), el2, el1 + el2);


// methods used for valid parentheses
const setLeft = (leftPar, rightPar, s) => leftPar > 0 ?
    getCombinations(leftPar - 1, rightPar + 1, s + '(')
  :
    [];

const setRight = (leftPar, rightPar, s) => rightPar > 0 ?
        getCombinations(leftPar, rightPar - 1, s + ')')
      :
        [];

const getCombinations = (leftPar, rightPar, s) =>
  (leftPar == 0 && rightPar == 0) ?
    [s]
    :
    [...setLeft(leftPar, rightPar, s), ...setRight(leftPar, rightPar, s)];

exports.recursionAnswers = {
  listFiles: (data, dirName) => findFiles(data, dirName),

  permute: (arr) => getAllPermutations(arr)
    .map(perm => perm.split('').map(el => parseInt(el))),

  fibonacci: (n) => recursiveFib(n - 1, 0, 1),

  validParentheses: (n) => getCombinations(n, 0, '')
};
