document.querySelector('.get-jokes').addEventListener('click', function(e) {
  const number = document.getElementById('number').value;

  // Request
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';
      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Somthing went wrong</li>`;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();

  e.preventDefault();
});
