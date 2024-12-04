// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");   
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
}

function closePanel() {
  event.preventDefault();
  document.getElementById('overlay').classList.add('hidden');
}

function handleOutsideClick(event) {
  const panel = document.getElementById('detail-panel');
  if (!panel.contains(event.target)) {
      closePanel();
  }
}

window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  console.log("Scrolling, button:", scrollToTopBtn);
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
}

function changeMainImage(newSrc) {
  const mainImage = document.getElementById('mainImage');
  mainImage.style.opacity = '0';
  
  setTimeout(() => {
      mainImage.src = newSrc;
      mainImage.style.opacity = '1';
  }, 300);
}

function slideImages(direction) {
  const container = document.querySelector('.detail-panel-slide');
  const scrollAmount = 130; // Điều chỉnh khoảng cách scroll
  container.scrollLeft += direction * scrollAmount;
}