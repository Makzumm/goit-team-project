//Get the button:
mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    // mybutton.style.display = 'block';
    mybutton.style.opacity = 0.5;
    mybutton.style.visibility = 'visible';
  } else {
    // mybutton.style.display = 'none';
    mybutton.style.opacity = 0;
    mybutton.style.visibility = 'hidden';
  }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
