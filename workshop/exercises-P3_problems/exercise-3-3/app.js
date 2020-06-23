// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const btnList = document.querySelector('#btn-list');

// Moved the init of the buttons into the reset function and am calling it after declaration.
const handleReset = () => {
  for (let id = 1; id < 5; id++) {
    const initButton = document.getElementById(`btn-${id}`);
    initButton.style.opacity = '100';
    initButton.style.backgroundColor = 'gold';
    if (id === 4 && initButton.classList.length > 0) {
      initButton.classList.remove('jitters');
    }
  }
};

handleReset();

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
    case 'reset':
      handleReset();
      break;
    default:
      break;
  }
};

btnList.addEventListener('click', onClick);
