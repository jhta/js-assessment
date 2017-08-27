exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: (value) => new Promise((resolve, reject) => {
    resolve(value);
  }),

  manipulateRemoteData: (url) => new Promise((resolve, reject) => {
       const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            const result = JSON.parse(request.responseText);
            const people = result.people.map((person) => person.name).sort();
            resolve(people);
          }
        }
        request.open('GET', url);
        request.send();

    })

};
