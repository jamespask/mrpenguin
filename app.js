const label = document.getElementById('name');
const answer = document.getElementById('answer');
const input = document.getElementById('textbox');

label.textContent = 'Check Mental State';

let userValue = '';
const button = document
  .getElementById('button')
  .addEventListener('click', checkInput);

function checkInput() {
  userValue = input.value;
  switch (userValue) {
    case 'Mr Penguin':
      answer.textContent = 'He is Depressed 😔';
      break;
    case '':
    case undefined:
      answer.textContent = '';
      return;
  }
}
