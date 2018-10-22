
const formBtn = document.querySelector('button');
const googleForm = document.querySelector('.google-form');

formBtn.addEventListener('click', openButton);

function openButton() {
  if (googleForm.style.display === 'none'){
  googleForm.style.display = 'block';
  } else {
    googleForm.style.display = 'none';
  }
};

//toggle show/hide classes
// OR
//start as hidden, then if state to display: none, display: block