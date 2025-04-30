const page = document.querySelector(".page");
//Profile info
const displayName = document.querySelector(".profile__details-name");
const displayDescription = document.querySelector(
  ".profile__details-description"
);
//Botones de abrir y cerrar popups
const openPopupButton = document.querySelector(".profile__info-button");
const openPopupAddButton = document.querySelector(".profile__info-button-add");
const closePopupButton = document.querySelector(".popup__button-close");
const closePopupAddButton = document.querySelector(".popup-add__button-close");
const closePopupImageButton = document.querySelector(
  ".popup-image__button-close"
);
//Popups
const popupElement = document.querySelector(".popup");
const popupAddElement = document.querySelector("#popup-add");
const popupImageElement = document.querySelector(".popup-image");

//Popup content
const formElement = document.querySelector(".popup__form");
const inputElement = document.querySelector(".popup__form-input");
const formAddElement = document.querySelector("#form-add");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#occupation");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#image");
const submitButton = document.querySelector(".popup__button");

//sección gallery
const gallery = document.querySelector(".gallery");

//Array de fotos
const initialCards = [
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

//función que abre el popup
function handlePopupOpen(openPopup) {
  openPopup.classList.add("popup_opened");
}

//cierra
function handlePopupClose() {
  popupElement.classList.remove("popup_opened");
}

//Da el contenido de texto del div.profile__content a las variables del formulario popup)
function editProfile() {
  handlePopupOpen(popupElement);
  nameInput.value = displayName.textContent;
  jobInput.value = displayDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  displayName.textContent = nameInput.value;
  displayDescription.textContent = jobInput.value;
  handlePopupClose();
}

//mismo codigo de la forma pasada
function handleImageFormSubmit(evt) {
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

//Abre el popup-add
function handlePopupAddOpen() {
  popupAddElement.classList.add("popup-add_opened");
}

//Cierra
function handlePopupAddClose() {
  popupAddElement.classList.remove("popup-add_opened");
}

function addCards() {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, "#template");
    gallery.append(card.getCardElement());
  });
}

class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;

    this._getTemplate();
    this._setCardContent();
    this._setEventListeners();
  }

  _getTemplate() {
    const templateGallery = document.querySelector(
      this._templateSelector
    ).content;
    this._card = templateGallery
      .querySelector(".gallery__card")
      .cloneNode(true);

    this._cardImage = this._card.querySelector(".gallery__card-image");
    this._cardText = this._card.querySelector(".gallery__card-name");
    this._deleteButton = this._card.querySelector(".gallery__card-delete");
    this._like = this._card.querySelector(".gallery__card-like");
  }

  _setCardContent() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._card.remove();
    });
    this._like.addEventListener("click", () => {
      this._like.classList.toggle("gallery__card-like-active");
    });
    this._cardImage.addEventListener("click", () => {
      handlePopupImageOpen(this._name, this._link);
    });
  }
  getCardElement() {
    return this._card;
  }
}

function handlePopupImageOpen(name, link) {
  const popupImg = popupImageElement.querySelector(".popup__img");
  const popupText = popupImageElement.querySelector(".popup__text");

  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  popupImageElement.classList.add("popup__image_opened");
}

function handlePopupImageClose() {
  popupImageElement.classList.remove("popup__image_opened");
}

openPopupButton.addEventListener("click", () => handlePopupOpen(popupElement));
openPopupButton.addEventListener("click", editProfile);
closePopupButton.addEventListener("click", handlePopupClose);
formElement.addEventListener("submit", handleProfileFormSubmit);
formAddElement.addEventListener("submit", handleImageFormSubmit);
openPopupAddButton.addEventListener("click", handlePopupAddOpen);
closePopupAddButton.addEventListener("click", handlePopupAddClose);
addCards();
// formAddElement.addEventListener("submit", handleImageFormSubmit);
closePopupImageButton.addEventListener("click", handlePopupImageClose);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    handlePopupClose();
    handlePopupAddClose();
    handlePopupImageClose();
  }
});

document.addEventListener("click", (event) => {
  if (popupElement === event.target) {
    handlePopupClose();
  }
  //2do popup
  if (popupAddElement === event.target) {
    handlePopupAddClose();
  }
  //3er popup
  if (popupImageElement === event.target) {
    handlePopupImageClose();
  }
});
