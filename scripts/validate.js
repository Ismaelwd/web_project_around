//constantes de los mensajes de validacion
const formNameMessage = document.querySelector(".popup__form-name-message");
const formOccupationMessage = document.querySelector(
  ".popup__form-occupation-message"
);
const formTitleMessage = document.querySelector(
  ".popup-add__form-name-message"
);
const formUrlMessage = document.querySelector(
  ".popup-add__form-occupation-message"
);

//event listeners de los botones de popups
openPopupButton.addEventListener("click", () => {
  enableValidation({
    nameSelector: "#name",
    occupationSelector: ".popup__form-occupation",
    errorMessageNameSelector: ".popup__form-name-message",
    errorMessageOccupationSelector: ".popup__form-occupation-message",
    submitButtonSelector: ".popup__form-button",
  });
});

openPopupAddButton.addEventListener("click", () => {
  enableValidation({
    nameSelector: ".popup-add__form-name",
    occupationSelector: ".popup-add__form-occupation",
    errorMessageNameSelector: ".popup-add__form-name-message",
    errorMessageOccupationSelector: ".popup-add__form-occupation-message",
    submitButtonSelector: ".popup-add__form-button",
  });
});

//funcion enableValidation
function enableValidation(validationData) {
  const formSubmitButton = document.querySelector(
    validationData.submitButtonSelector
  );
  //Validate inputTop
  const name = document.querySelector(validationData.nameSelector);
  const formNameMessage = document.querySelector(
    validationData.errorMessageNameSelector
  );
  name.addEventListener("input", (event) => {
    const isValid = name.validity.valid;
    if (isValid) {
      formNameMessage.classList.add("hidden-message");
      formSubmitButton.disabled = false;
    } else {
      formNameMessage.classList.remove("hidden-message");
      formSubmitButton.disabled = true;
    }
  });

  //validate inputBottom
  const occupation = document.querySelector(validationData.occupationSelector);
  const formOccupationMessage = document.querySelector(
    validationData.errorMessageOccupationSelector
  );
  occupation.addEventListener("input", (event) => {
    const isValid = occupation.validity.valid;
    if (isValid) {
      formOccupationMessage.classList.add("hidden-message");
      formSubmitButton.disabled = false;
    } else {
      formOccupationMessage.classList.remove("hidden-message");
      formSubmitButton.disabled = true;
    }
  });
}
