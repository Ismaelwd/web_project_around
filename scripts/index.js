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
const formAdd = document.querySelector(".popup-add__form");
const descriptionInput = document.querySelector(".popup-add__form-name");
const imageInput = document.querySelector(".popup-add__form-occupation");
const deleteButton = document.querySelector(".gallery__card-delete");

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

function addCards() {
  initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    gallery.append(card);
    openPopupAdd.classList.remove("popup-add_opened");
  });
}

function createCard(name, link) {
  const templateGallery = document.querySelector("#template").content;
  const card = templateGallery.querySelector(".gallery__card").cloneNode(true);
  const cardImage = card.querySelector(".gallery__card-image");
  const cardText = card.querySelector(".gallery__card-name");
  cardImage.src = link;
  cardImage.alt = name;
  cardText.textContent = name;
  return card;
}

function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const card = createCard(descriptionInput.value, imageInput.value);
  gallery.prepend(card);
  openPopupAdd.classList.remove("popup-add_opened");
}

function deleteCard() {
  deleteButton = card.remove();
}

buttonPopup.addEventListener("click", handlePopupOpen);
buttonPopup.addEventListener("click", editProfile);
buttonClosePopup.addEventListener("click", handlePopupClose);
formElement.addEventListener("submit", handleProfileFormSubmit);
buttonAdd.addEventListener("click", handlePopupAddOpen);
buttonCloseAdd.addEventListener("click", handlePopupAddClose);
addCards();
formAdd.addEventListener("submit", handleImageFormSubmit);
deleteButton.addEventListener("click", deleteCard);
