exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: (start, end) => {
    const time = setInterval(() => {
      if (start >= end) {
        clearInterval(time);
      }
      console.log(start);
      start++;
    }, 100);

    return {
      cancel: () => { clearInterval(time); }
    }
  }
};
