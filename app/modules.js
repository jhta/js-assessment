exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: (str1, str2) => ({
    // I have to conserve the scope here, that's
    // I didn't use arrow function
    sayIt: function() {
      return `${this.greeting}, ${this.name}`;
    },
    name: str2,
    greeting: str1
  })
};
