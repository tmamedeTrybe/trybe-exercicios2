// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const recebepiada = document.getElementById('jokeContainer');

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => recebepiada.innerText = data.joke);

};

window.onload = () => fetchJoke();