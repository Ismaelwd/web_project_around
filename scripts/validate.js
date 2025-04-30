enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: "popup__error",
});

function enableValidation(validationData) {
  const forms = document.querySelectorAll(validationData.formSelector);
  forms.forEach(function (form) {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, validationData);
  });
}

function setEventListeners(form, validationData) {
  //4
  const elements = Array.from(
    form.querySelectorAll(validationData.inputSelector)
  );
  const button = form.querySelector(validationData.submitButtonSelector);
  toggleButtonState(elements, button);

  elements.forEach((element) => {
    //5
    element.addEventListener("input", () => {
      //6
      toggleButtonState(elements, button);
      checkInputValidity(element, validationData);
    });
  });
}

function checkInputValidity(inputElement, validationData) {
  const isValid = inputElement.validity.valid;
  if (!isValid) {
    inputElement.classList.add(validationData.inputErrorClass);
    showInputError(inputElement, validationData);
  } else {
    inputElement.classList.remove(validationData.inputErrorClass);
    hideInputError(inputElement, validationData);
  }
}

function hasInvalidInput(inputList) {
  const isValid = inputList.every((input) => input.validity.valid);
  return isValid;
}

function toggleButtonState(inputElements, buttonElement) {
  const isValid = hasInvalidInput(inputElements);
  if (isValid) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
}

function showInputError(inputElement, validationData) {
  const formMessage = document.querySelector(
    `.${validationData.errorClass}_${inputElement.id}`
  );
  // console.log(formMessage.textContent);
  formMessage.textContent = inputElement.validationMessage;
}

function hideInputError(inputElement, validationData) {
  const formMessage = document.querySelector(
    `.${validationData.errorClass}_${inputElement.id}`
  );
  formMessage.textContent = "";
}

// class FormValidator {
//   constructor(classSelectorContainer, elementValidator)

// }
