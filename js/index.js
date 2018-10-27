
const btn = document.querySelector('button');
const googleForm = document.querySelector('.google-form');

btn.addEventListener('click', openButton);

function openButton() {
  if (googleForm.style.display === 'none'){
    googleForm.style.display = 'block';
    btn.textContent = 'Close';
  } else {
    googleForm.style.display = 'none';
        btn.textContent = 'Contact me';
  }
};

// window.onscroll = function() {
//     var stickyToTopIcon = document.getElementById('scroll-to-top-icon');
//     if( document.body.scrollTop+document.documentElement.scrollTop > 240)
//         stickyToTopIcon.className = "sticky";
//     else stickyToTopIcon.className = "";
// };