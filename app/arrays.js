exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: (arr) => arr
    .reduce(
      (acum, value) => acum + value
      ,0),

  remove: (arr, item) => arr
    .filter(el => el !== item),

  removeWithoutCopy: (arr, item) => {
    let len = arr.length;
    let i = 0;
    while(i < len) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        len--;
      } else {
        i++;
      }
    }
    return arr;
  },

  // i can use "push" but this return the lenght
  // append(arr, item){ arr.push(item); return arr; }
  append: (arr, item) => [...arr, item],

  // I would like use arr.pop(), but I can't do that functional because return
  // the element deleted
  // I can use "slice" too
  truncate: (arr) => arr
    .slice(0, arr.length - 1),

  prepend: (arr, item) => [item, ...arr],

  curtail: ([first, ...arr]) => arr,

  //I can use "concat"
  concat: (arr1, arr2) => [...arr1, ...arr2] ,

  insert: (arr, item, index) => arr
    .splice(index, 0, item) ? arr : arr,

  count: (arr, item) => arr
    .filter(el => el === item).length,

  duplicates: arr => arr
    .sort()
    .reduce(
      (acum, value, i) => arr[i + 1] ?
        value === arr[i + 1] ?
          [... new Set([...acum, value])]
          :
          acum
        :
        acum
      ,[]),

  square: arr => arr.map(el => el * el),

  findAllOccurrences: (arr, target) => arr
    .reduce((acum, value, i) => value === target ?
      [...acum, i]
      :
      acum
    , [])
}
