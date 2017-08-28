exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.apply(obj),

  alterObjects: (constructor, greeting) =>
    (constructor.prototype.greeting = greeting),

  iterate: (obj) => Object.keys(obj)
    .map(key => `${key}: ${obj[key]}`)
};
