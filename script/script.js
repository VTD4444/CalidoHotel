var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");   
 // Lấy các phần tử slide
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");  
  }
  slides[slideIndex-1].classList.add("active");   
  
}
function showPanel() {
  event.preventDefault();
  document.getElementById('overlay').classList.remove('hidden');
  // document.addEventListener('click', handleOutsideClick);
}

function closePanel() {
  event.preventDefault();
  document.getElementById('overlay').classList.add('hidden');
  // document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
  const panel = document.getElementById('detail-panel');
  if (!panel.contains(event.target)) {
      closePanel();
  }
}