const openPopup = document.querySelector(".popup");
const buttonPopup = document.querySelector(".profile__info-button");
const buttonClosePopup = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-occupation");
const displayName = document.querySelector(".profile__details-name");
const displayDescription = document.querySelector(
  ".profile__details-description"
);
const buttonSubmit = document.querySelector(".popup__form-button");

const openPopupAdd = document.querySelector(".popup-add");
const buttonAdd = document.querySelector(".profile__info-button-add");
const buttonCloseAdd = document.querySelector(".popup-add__button-close");

const gallery = document.querySelector(".gallery");
const templateGallery = document.getElementById("#template");

function handlePopupOpen() {
  openPopup.classList.add("popup_opened");
}

function handlePopupClose() {
  openPopup.classList.remove("popup_opened");
}

function editProfile() {
  handlePopupOpen();
  nameInput.value = displayName.textContent;
  jobInput.value = displayDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  displayName.textContent = nameInput.value;
  displayDescription.textContent = jobInput.value;
  openPopup.classList.remove("popup_opened");
}

function handlePopupAddOpen() {
  openPopupAdd.classList.add("popup-add_opened");
}

function handlePopupAddClose() {
  openPopupAdd.classList.remove("popup-add_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
buttonPopup.addEventListener("click", handlePopupOpen);
buttonPopup.addEventListener("click", editProfile);
buttonClosePopup.addEventListener("click", handlePopupClose);
buttonAdd.addEventListener("click", handlePopupAddOpen);
buttonCloseAdd.addEventListener("click", handlePopupAddClose);
