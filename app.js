const qwerty = document.querySelector('#qwerty');
const score = document.querySelectorAll('.tries');
const overlay = document.getElementById('overlay');
const lives = document.querySelector('img');
let letter;
let missed = 0;
let firstGame = true;
const phrases = [
  'Cattle prod',
  'Oyster ditch',
  'Lap rocket',
  'Batter dip',
  'Cranny axe',
  'Gut locker',
];
const phraseArray = getRandomPhraseAsArray(phrases);

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});


function getRandomPhraseAsArray(arr) {
  let randomPhrase = Math.floor(Math.random() * phrases.length);
  let words = arr[randomPhrase].toLowerCase();
  return words.split('');
};

function addPhraseToDisplay(arr) {
  for (i = 0; i < arr.length; i += 1) {
    const item = document.createElement("li");
    const phraseUL = document.querySelector('#phrase ul');
    item.textContent = arr[i];
    phraseUL.appendChild(item);
    if (phraseArray[i] === ' ') {
      item.className = "space";
    } else {
      item.className = "letter";
    }
  }
};

addPhraseToDisplay(phraseArray);


let keypress = qwerty.addEventListener('click', (e) => {
  keypress = event.target.textContent;
  letter = JSON.stringify(keypress);
});


function checkLetter(selectLetter) {
  const hiddenLetter = document.querySelectorAll('.letter');
  let letterFound = false;
  for (let i = 0; i < hiddenLetter.length; i++) {
    if (selectLetter === hiddenLetter[i].textContent) {
      hiddenLetter[i].classList.add('show');
      letterFound = true;
    }
  }
  return letterFound;
}

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let chosenLetter = e.target;
    chosenLetter.classList.add('chosen');
    chosenLetter.setAttribute('disabled', '');
    let letterFound = checkLetter(chosenLetter.textContent);
    if (letterFound === false) {
      missed++;
    }
  }

  checkWin();
});

function checkWin() {
  const letters = document.querySelectorAll('.letter');
  const show = document.querySelectorAll('.show');
  const title = document.querySelector('.title');
  if (missed === 5) {
    overlay.style.display = '';
    overlay.className = '';
    overlay.classList.add('lose');
    title.innerHTML = 'Sorry You Lost';
  } else if (show.length === letters.length) {
    overlay.style.display = '';
    overlay.className = '';
    overlay.classList.add('win');
    title.innerHTML = 'You Win!';
  }
}