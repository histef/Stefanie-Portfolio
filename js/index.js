
const btn = document.querySelector('button');
const googleForm = document.querySelector('.google-form');

btn.addEventListener('click', openButton);

function openButton() {
  if (googleForm.style.display === 'none'){
    googleForm.style.display = 'block';
    btn.textContent = 'Close';
    btn.style.marginBottom = "25px";
  } else {
    googleForm.style.display = 'none';
    btn.textContent = 'Contact me';
    btn.style.marginBottom = "0";
  }
};