const qwerty = document.querySelector('#qwerty');
const score = document.querySelectorAll('.tries');
const overlay = document.getElementById('overlay');
let missed = 0;
const phrases = [
  'Cattle prod',
  'oyster ditch',
  'lap rocket',
  'Batter dip',
  'cranny axe',
  'gut locker',
];
const PhraseArray = getRandomPhraseAsArray(phrases);

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});


function getRandomPhraseAsArray(arr) {
  let randomPhrase = Math.floor(Math.random() * phrases.length);
  let words = arr[randomPhrase].toLowerCase();
  return words.split('');
}

function addPhraseToDisplay(arr) {
  for (i = 0; i < arr.length; i += 1) {
    const item = document.createElement("li");
    const phraseUL = document.querySelector('#phrase ul');
    item.textContent = arr[i];
    phraseUl.appendChild(item);
    if (phraseArray === ' ') {
      item.className = "space";
    } else {
      item.className = "letter";
    }
  }
}

addPhrasetoDisplay(phraseArray);