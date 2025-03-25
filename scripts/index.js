//sección popup info (mi primer popup no lleva -descripcion en la clase)
const openPopup = document.querySelector(".popup");
//botón de información de usuario
const buttonPopup = document.querySelector(".profile__info-button");
//botón de cierre de popup info
const buttonClosePopup = document.querySelector(".popup__button-close");
//h1
const displayName = document.querySelector(".profile__details-name");
//descripción
const displayDescription = document.querySelector(
  ".profile__details-description"
);

//sección gallery
const gallery = document.querySelector(".gallery");
//sección popup info
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-occupation");
const buttonSubmit = document.querySelector(".popup__form-button");
//sección popup add
const openPopupAdd = document.querySelector(".popup-add");
const buttonAdd = document.querySelector(".profile__info-button-add");
const buttonCloseAdd = document.querySelector(".popup-add__button-close");
const buttonSubmitAdd = document.querySelector(".popup-add__form-button");
//form add
const formAdd = document.querySelector(".popup-add__form");
const descriptionInput = document.querySelector(".popup-add__form-name");
const imageInput = document.querySelector(".popup-add__form-occupation");
//open image
const openPopupImage = document.querySelector(".popup__image");
const imageButtonClose = document.querySelector(".popup__image-button-close");

const page = document.querySelector(".page");

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
function handlePopupOpen() {
  openPopup.classList.add("popup_opened");
}
//cierra
function handlePopupClose() {
  openPopup.classList.remove("popup_opened");
}

//Da el contenido de texto del div.profile__content a las variables del formulario popup)
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

//Abre el popup-add
function handlePopupAddOpen() {
  openPopupAdd.classList.add("popup-add_opened");
}
//Cierra
function handlePopupAddClose() {
  openPopupAdd.classList.remove("popup-add_opened");
}

//Se le aplica un ciclo forEach al array initialCards
//el contenido de cada {} es un objeto, forEach recorre cada objeto y asigna le contenido al parámetro item en cada iteración
//
function addCards() {
  initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    gallery.append(card);
    // openPopupAdd.classList.remove("popup-add_opened");
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
  openPopupAdd.classList.remove("popup-add_opened");
}

//Funcion la imagen de la targeta como popup y se corre en la funcion createCard por un eventlistener
function handlePopupImageOpen(name, link) {
  const popupImg = openPopupImage.querySelector(".popup__img");
  const popupText = openPopupImage.querySelector(".popup__text");
  const imageContainer = document.querySelector(
    ".popup__image popup__image_opened"
  );
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  openPopupImage.classList.add("popup__image_opened");
}

function handlePopupImageClose() {
  openPopupImage.classList.remove("popup__image_opened");
}

buttonPopup.addEventListener("click", handlePopupOpen);
buttonPopup.addEventListener("click", editProfile);
buttonClosePopup.addEventListener("click", handlePopupClose);
formElement.addEventListener("submit", handleProfileFormSubmit);
buttonAdd.addEventListener("click", handlePopupAddOpen);
buttonCloseAdd.addEventListener("click", handlePopupAddClose);
addCards();
formAdd.addEventListener("submit", handleImageFormSubmit);
imageButtonClose.addEventListener("click", handlePopupImageClose);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    openPopup.classList.remove("popup_opened");
    openPopupAdd.classList.remove("popup-add_opened");
    openPopupImage.classList.remove("popup__image_opened");
  }
});

document.addEventListener("click", (event) => {
  if (openPopup === event.target) {
    openPopup.classList.remove("popup_opened");
  }
  //2do popup
  if (openPopupAdd === event.target) {
    openPopupAdd.classList.remove("popup-add_opened");
  }
  //3er popup
  if (openPopupImage === event.target) {
    openPopupImage.classList.remove("popup__image_opened");
  }
});
