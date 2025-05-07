import {
  openPopupAddButton,
  openPopupButton,
  closePopupButton,
  formElement,
  formAddElement,
  closePopupAddButton,
  closePopupImageButton,
  popupElement,
  editProfile,
  handlePopupClose,
  handleProfileFormSubmit,
  handleImageFormSubmit,
  handlePopupAddOpen,
  handlePopupAddClose,
  handlePopupImageClose,
  popupAddElement,
  popupImageElement,
  addCards,
  handlePopupOpen,
  formValidator,
} from "./utils.js";

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

formValidator();
