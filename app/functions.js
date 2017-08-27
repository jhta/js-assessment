exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  // I can use "apply"
  argsAsArray: (fn, arr) => fn(...arr),

  speak: (fn, obj) => fn.call(obj),

  functionFunction: str => str2 => `${str}, ${str2}`,

  makeClosures: (arr, fn) => arr.map(val => () => fn(val)),

  partial: (fn, str1, str2) => str3 => fn(str1, str2, str3),

  useArguments: (...args) => args.reduce((acum, val) => acum + val, 0),

  callIt: (fn, ...args) => fn(...args),

  partialUsingArguments: (fn, ...args) =>
    (...args2) => fn(...[...args, ...args2]),

  curryIt: (fn)  => {
    const resolver = (accum, expected) =>
      (current) => {
        accum.push(current);
        return accum.length === expected ?
          fn.apply(null, accum)
          :
          resolver(accum, expected);
      };
    return resolver([], fn.length);
  }

};
