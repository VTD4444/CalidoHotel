// document.addEventListener('DOMContentLoaded', function() {
//   TurnOnMenuPanel();
// });
function TurnOnMenuPanel() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  
  if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
  } else {
      mobileMenu.classList.add('active');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }
}
function showPanel() {
  event.preventDefault();
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('d-none');
  overlay.addEventListener('click', handleOutsideClick);
  overlay.style.touchAction = 'none';
}

function closePanel() {
  event.preventDefault();
  const overlay = document.getElementById('overlay');
  overlay.classList.add('d-none');
  overlay.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
  const panel = document.getElementById('detail-panel');
  if (event.target === document.getElementById('overlay')) {
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
  }, 200);
}

function slideImages(direction) {
  const container = document.querySelector('.detail-panel-slide');
  const scrollAmount = 130;
  container.scrollLeft += direction * scrollAmount;
}

function changeRoom(direction) {
  currentRoomIndex = (currentRoomIndex + direction + roomData.length) % roomData.length;
  const room = roomData[currentRoomIndex];
  document.querySelector('.text_hp').textContent = room.name;
  document.querySelector('.text_hp1').textContent = room.description;
  document.getElementById('home-juniorsuite-img').src = room.image;
}

let currentImageIndex = 0;
const images = [
    "./assets/img/gallery1.jpg",
    "./assets/img/gallery2.jpg",
    "./assets/img/gallery3.jpg",
    "./assets/img/gallery4.jpg",
    "./assets/img/gallery5.jpg",
    "./assets/img/trangchubg.jpg"
];

function openImageModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const relativeSrc = src.replace(window.location.origin, '');
  currentImageIndex = images.indexOf('.' + relativeSrc.trim());
  modal.classList.remove('d-none');
  modal.style.display = 'flex';
  modalImg.src = src;
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

function changeModalImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  const modalImg = document.getElementById('modalImage');
  modalImg.src = images[currentImageIndex];
}

document.getElementById('imageModal').addEventListener('click', function(event) {
  if (event.target === this) {
      closeImageModal();
  }
});

