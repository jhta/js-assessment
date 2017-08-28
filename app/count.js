exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  // I don't understand why this not
  // work here :/
  // this works fine at JSbin: https://jsbin.com/fajekekade/edit?js,console
  count: (start, end) => {
    const time = setInterval(() => {
      if (start >= end) {
        clearInterval(time);
      } else {
        console.log(start);
        start++;
      }
    }, 100);

    return {
      cancel: () => { clearInterval(time) }
    }
  }
};
