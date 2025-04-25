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
const popupAddElement = document.querySelector(".popup.popup-add");
const popupImageElement = document.querySelector(".popup-image");
//sección gallery
const gallery = document.querySelector(".gallery");
//Popup content
const formElement = document.querySelector(".popup__form");
const formAddElement = document.querySelector(".popup-add__form");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector(".popup__form-occupation");
const descriptionInput = document.querySelector(".popup-add__form-name");
const imageInput = document.querySelector(".popup-add__form-occupation");
const submitButton = document.querySelector(".popup__form-button");
const submitAddButton = document.querySelector(".popup-add__form-button");

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

//Abre el popup-add
function handlePopupAddOpen() {
  popupAddElement.classList.add("popup-add_opened");
}
//Cierra
function handlePopupAddClose() {
  popupAddElement.classList.remove("popup-add_opened");
}

//Se le aplica un ciclo forEach al array initialCards
//el contenido de cada {} es un objeto, forEach recorre cada objeto y asigna le contenido al parámetro item en cada iteración
//
function addCards() {
  initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    gallery.append(card);
  });
}

function createCard(name, link) {
  const templateGallery = document.querySelector("#template").content;
  //busca el div gallery_card y cloneNode(true) hace una copia con todos sus hijos
  const card = templateGallery.querySelector(".gallery__card").cloneNode(true);
  const cardImage = card.querySelector(".gallery__card-image");
  const cardText = card.querySelector(".gallery__card-name");
  const deleteButton = card.querySelector(".gallery__card-delete");
  const like = card.querySelector(".gallery__card-like");

  //asigna el link y name a sus variables correspondientes
  cardImage.src = link;
  cardImage.alt = name;
  cardText.textContent = name;

  //Escucha el deleteButton del nodo creado
  deleteButton.addEventListener("click", () => {
    card.remove();
  });
  //Escucha el like
  like.addEventListener("click", () => {
    like.classList.toggle("gallery__card-like-active");
  });
  //Escucha el click en la imagen para abrirla
  cardImage.addEventListener("click", () => {
    handlePopupImageOpen(name, link);
  });

  return card;
}

//mismo codigo de la forma pasada
function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const card = createCard(descriptionInput.value, imageInput.value);
  gallery.prepend(card);
  handlePopupAddClose();
}

//Funcion la imagen de la targeta como popup y se corre en la funcion createCard por un eventlistener
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
openPopupAddButton.addEventListener("click", handlePopupAddOpen);
closePopupAddButton.addEventListener("click", handlePopupAddClose);
addCards();
formAddElement.addEventListener("submit", handleImageFormSubmit);
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
