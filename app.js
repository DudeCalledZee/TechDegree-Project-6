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

overlay.addEventListener('click',() => {
  overlay.style.display = 'none';
});
