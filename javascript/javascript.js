/* Back to top javascript */
const btnBackToTop = document.querySelector('.back-to-top');

btnBackToTop.addEventListener("click", function () { // Scrol to top when clicked
    window.scrollTo(0, 0);
});

document.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 100) { // when the window's top > 100, it add show
  btnBackToTop.classList.add('show');
}
else {
  btnBackToTop.classList.remove('show');
}
});