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

overlay.addEventListener('click',() => {
  overlay.style.display = 'none';
});


function getRandomPhraseAsArray(arr) {
  let randomPhrase = Math.floor(Math.random() * phrases.length);
  let word = arr[randomPhrase].toLowerCase();
  return word.split('');
}

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}


addPhrasetoDisplay(phraseArray);
