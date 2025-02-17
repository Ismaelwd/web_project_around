const openPopup = document.querySelector(".popup");
const buttonPopup = document.querySelector(".profile__button-info");
const buttonClosePopup = document.querySelector(".popup__button-close");

buttonPopup.addEventListener("click", () => {
  openPopup.classList.add("opened");
});

buttonClosePopup.addEventListener("click", () => {
  openPopup.classList.remove("opened");
});

let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__form-name");
let jobInput = formElement.querySelector(".popup__form-occupation");
let buttonSubmit = formElement.querySelector(".popup__form-button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = formElement.querySelectorAll(".popup__form-name");
  let jobInput = formElement.querySelectorAll(".popup__form-occupation");
  console.log(nameInput);
}

formElement.addEventListener("submit", handleProfileFormSubmit);
