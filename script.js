const urls = [
  'https://swapi.co/api/people/12/',
  'https://swapi.co/api/people/2/',
  'https://swapi.co/api/people/3/',
  'https://swapi.co/api/people/4/',
  'https://swapi.co/api/people/5/',
  'https://swapi.co/api/people/6/',
  'https://swapi.co/api/people/7/',
  'https://swapi.co/api/people/8/',
  'https://swapi.co/api/people/9/',
  'https://swapi.co/api/people/10/'
]

const characters = [];
let lukesFather = '';
let resultText = document.getElementById('resultText');

Promise.all(urls.map(url =>
  fetch(url).then(resp => resp.json())
))
  .then(results => {
    results.map(results => {
      characters.push(results);
      console.log(results)
    })})

document.getElementById('button').addEventListener("click", function() {
  lukesFather = characters[Math.floor((Math.random() * 10))];
  document.getElementById('resultName').innerHTML = (lukesFather.name);
})

const fatherBio = (lukesFather) => {
  console.log(lukesFather);
  if (lukesFather === "Wilhuff Tarkin") {
    resultText.innerHTML = "Wow, right up the gut. Wilhuff Tarkin built the Death Star which you popped off. Way to stick it to Dad, Luke."
  }
}
