import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
export const page = document.querySelector(".page");
//Profile info
export const displayName = document.querySelector(".profile__details-name");
export const displayDescription = document.querySelector(
  ".profile__details-description"
);
//Botones de abrir y cerrar popups
export const openPopupButton = document.querySelector(".profile__info-button");
export const openPopupAddButton = document.querySelector(
  ".profile__info-button-add"
);
export const closePopupButton = document.querySelector(".popup__button-close");
export const closePopupAddButton = document.querySelector(
  ".popup-add__button-close"
);
export const closePopupImageButton = document.querySelector(
  ".popup-image__button-close"
);
//Popups
export const popupElement = document.querySelector(".popup");
export const popupAddElement = document.querySelector("#popup-add");
export const popupImageElement = document.querySelector(".popup-image");

//Popup content
export const formElement = document.querySelector(".popup__form");
export const inputElement = document.querySelector(".popup__form-input");
export const formEditElement = document.querySelector("#form-edit");
export const formAddElement = document.querySelector("#form-add");
export const nameInput = document.querySelector("#name");
export const jobInput = document.querySelector("#occupation");
export const descriptionInput = document.querySelector("#description");
export const imageInput = document.querySelector("#image");
export const submitButton = document.querySelector(".popup__button");

export const gallery = document.querySelector(".gallery");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export function handlePopupOpen(openPopup) {
  openPopup.classList.add("popup_opened");
}

export function handlePopupClose() {
  popupElement.classList.remove("popup_opened");
}

export function editProfile() {
  handlePopupOpen(popupElement);
  nameInput.value = displayName.textContent;
  jobInput.value = displayDescription.textContent;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  displayName.textContent = nameInput.value;
  displayDescription.textContent = jobInput.value;
  handlePopupClose();
}

export function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(
    descriptionInput.value,
    imageInput.value,
    "#template"
  );
  gallery.prepend(newCard.getCardElement());
  formAddElement.reset();
  handlePopupAddClose();
}

export function handlePopupAddOpen() {
  popupAddElement.classList.add("popup-add_opened");
}

export function handlePopupAddClose() {
  popupAddElement.classList.remove("popup-add_opened");
}

export function addCards() {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, "#template");
    gallery.append(card.getCardElement());
  });
}

export function handlePopupImageOpen(name, link) {
  const popupImg = popupImageElement.querySelector(".popup__img");
  const popupText = popupImageElement.querySelector(".popup__text");

  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  popupImageElement.classList.add("popup__image_opened");
}

export function handlePopupImageClose() {
  popupImageElement.classList.remove("popup__image_opened");
}

export function formValidator() {
  const addValidator = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__form-input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: ".popup__input_type_error",
      errorClass: "popup__error",
    },
    formAddElement
  );

  const editValidator = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__form-input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: ".popup__input_type_error",
      errorClass: "popup__error",
    },
    formElement
  );

  addValidator.enableValidation();
  editValidator.enableValidation();
}
