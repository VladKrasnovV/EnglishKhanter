const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup-close');

function openPopup() {
  popup.style.display = 'flex';
}

function closePopup() {
  popup.style.display = 'none';
}

closeButton.addEventListener('click', closePopup);
window.addEventListener('load', openPopup);