const openPopup = document.querySelector(".popup");
const buttonPopup = document.querySelector(".profile__info-button_info");
const buttonClosePopup = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-occupation");
const displayName = document.querySelector(".profile__info-name");
const displayDescription = document.querySelector(".profile__info-description");
const buttonSubmit = document.querySelector(".popup__form-button");

nameInput.value = "Jacques Cousteau";
jobInput.value = "Explorador";

buttonPopup.addEventListener("click", () => {
  openPopup.classList.add("opened");
});

buttonClosePopup.addEventListener("click", () => {
  openPopup.classList.remove("opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  displayName.textContent = nameInput.value;
  displayDescription.textContent = jobInput.value;
  openPopup.classList.remove("opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
