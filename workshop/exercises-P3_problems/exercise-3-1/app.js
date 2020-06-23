// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const btnList = document.querySelector('#btn-list');

function onClick(i) {
  const btnId = i.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case 'btn-1':
      btnElement.style.opacity = 0;
      break;
    case 'btn-2':
      btnElement.style.background = 'crimson';
      break;
    case 'btn-3':
      btnElement.style.background = 'lightblue';
      break;
    case 'btn-4':
      btnElement.classList.add('jitters');
      break;
    default:
      break;
  }
}

btnList.addEventListener('click', onClick)