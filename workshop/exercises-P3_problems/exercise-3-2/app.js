// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector('#btn-list');

for (let id = 1; id <= 4; id++) {
  const initButton = document.getElementById(`btn-${id}`);
  initButton.style.opacity = '100';
  initButton.style.backgroundColor = 'gold';
}

function toggleColor(id, color) {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;
  btnElement.style.backgroundColor = currentColor === 'gold' ? color : 'gold';
};

function onClick(i) {
  const btnId = i.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case 'btn-1':
      btnElement.style.opacity =
        btnElement.style.opacity === '100' ? '0' : '100';
      break;
    case 'btn-2':
      toggleColor(btnId, 'crimson');
      break;
    case 'btn-3':
      toggleColor(btnId, 'lightblue');
      break;
    case 'btn-4':
      btnElement.classList.toggle('jitters');
      break;
    default:
      break;
  }
};

btnList.addEventListener('click', onClick);
