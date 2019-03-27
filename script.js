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

Promise.all(urls.map(url =>
  fetch(url).then(resp => resp.json())
  ))
  .then(results => {
    results.map(results => {
      characters.push(results);
      console.log(results)
    })})

function ifLukesFather(input) {
  let resultText = document.getElementById('resultText');
  switch(input) {
    case "Wilhuff Tarkin":
      resultText.innerHTML = "Ouch, a receeding hairline";
      break;
    case "R2-D2":
      resultText.innerHTML = "I always thought your acting was a bit robotic";
      break;
    case "Darth Vader":
      resultText.innerHTML = "Well, this is ominous...";
      break;
    case "C-3PO":
      resultText.innerHTML = "Your skin always looked a bit too golden...";
      break;
    case "Leia Organa":
      resultText.innerHTML = "Well apparently she's not only your sister but also your father. You Skywalkers are a weird bunch";
      break;
    case "Owen Lars":
      resultText.innerHTML = "He did raise you on the desert plant of Tatooine so this would make sense";
      break;
    case "Beru Whitesun lars":
      resultText.innerHTML = "Mother maybe, but father might be a bit of a stretch. Still, closer than a few of the other options we have here...";
      break;
    case "R5-D4":
      resultText.innerHTML = "No way! Maybe that's why he was always by your side";
      break;
    case "Biggs Darklighter":
      resultText.innerHTML = "One of your best friends and also your father, a two-in-one!";
      break;
    case "Obi-Wan Kenobi":
      resultText.innerHTML = "One of the most legendary Jedi Masters. You're destined for great things, Luke.";
      break;
    default:
      resultText.innerHTML = "I guess we'll never know";
  }
}

document.getElementById('button').addEventListener("click", function() {
  lukesFather = characters[Math.floor((Math.random() * 10))];
  document.getElementById('resultName').innerHTML = (lukesFather.name);
  ifLukesFather(lukesFather.name);
})
