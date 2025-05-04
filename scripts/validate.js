// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__form-input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: ".popup__input_type_error",
//   errorClass: "popup__error",
// });

// function enableValidation(validationData) {
//   const forms = document.querySelectorAll(validationData.formSelector);
//   forms.forEach(function (form) {
//     form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(form, validationData);
//   });
// }

// function setEventListeners(form, validationData) {
//   //4
//   const elements = Array.from(
//     form.querySelectorAll(validationData.inputSelector)
//   );
//   const button = form.querySelector(validationData.submitButtonSelector);
//   toggleButtonState(elements, button);

//   elements.forEach((element) => {
//     //5
//     element.addEventListener("input", () => {
//       //6
//       toggleButtonState(elements, button);
//       checkInputValidity(element, validationData);
//     });
//   });
// }

// function checkInputValidity(inputElement, validationData) {
//   const isValid = inputElement.validity.valid;
//   if (!isValid) {
//     inputElement.classList.add(validationData.inputErrorClass);
//     showInputError(inputElement, validationData);
//   } else {
//     inputElement.classList.remove(validationData.inputErrorClass);
//     hideInputError(inputElement, validationData);
//   }
// }

// function hasInvalidInput(inputList) {
//   const isValid = inputList.every((input) => input.validity.valid);
//   return isValid;
// }

// function toggleButtonState(inputElements, buttonElement) {
//   const isValid = hasInvalidInput(inputElements);
//   if (isValid) {
//     buttonElement.disabled = false;
//   } else {
//     buttonElement.disabled = true;
//   }
// }

// function showInputError(inputElement, validationData) {
//   const formMessage = document.querySelector(
//     `.${validationData.errorClass}_${inputElement.id}`
//   );
//   // console.log(formMessage.textContent);
//   formMessage.textContent = inputElement.validationMessage;
// }

// function hideInputError(inputElement, validationData) {
//   const formMessage = document.querySelector(
//     `.${validationData.errorClass}_${inputElement.id}`
//   );
//   formMessage.textContent = "";
// }

//

//classSelectorContainer=validationData, elementValidator=form
class FormValidator {
  constructor(classSelectorContainer, elementValidator) {
    this.classSelectorContainer = classSelectorContainer;
    this.elementValidator = elementValidator;
  }

  _setEventListeners() {
    this.elements = Array.from(
      this.elementValidator.querySelectorAll(
        this.classSelectorContainer.inputSelector
      )
    );
    this.button = this.elementValidator.querySelector(
      this.classSelectorContainer.submitButtonSelector
    );

    this._toggleButtonState(this.elements);

    this.elements.forEach((element) => {
      element.addEventListener("input", () => {
        this._toggleButtonState(this.elements);
        this._checkInputValidity(element);
      });
    });
  }

  _checkInputValidity(inputElement) {
    const isValid = inputElement.validity.valid;
    if (!isValid) {
      inputElement.classList.add(this.classSelectorContainer.inputErrorClass);
      this._showInputError(inputElement, this.classSelectorContainer);
    } else {
      inputElement.classList.remove(
        this.classSelectorContainer.inputErrorClass
      );
      this._hideInputError(inputElement, this.classSelectorContainer);
    }
  }

  _showInputError(inputElement, validationData) {
    const formMessage = document.querySelector(
      `.${validationData.errorClass}_${inputElement.id}`
    );
    formMessage.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement, classSelectorContainer) {
    const formMessage = document.querySelector(
      `.${classSelectorContainer.errorClass}_${inputElement.id}`
    );
    formMessage.textContent = "";
  }

  _toggleButtonState(inputElements) {
    const hasInvalidInput = inputElements.some(
      (input) => !input.validity.valid
    );

    if (hasInvalidInput) {
      this.button.disabled = true;
      this.button.classList.add(
        this.classSelectorContainer.inactiveButtonClass
      );
    } else {
      this.button.disabled = false;
      this.button.classList.remove(
        this.classSelectorContainer.inactiveButtonClass
      );
    }
  }

  enableValidation() {
    this.elementValidator.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
    this.elementValidator.reset();
    this.elements.forEach((input) => {
      this._hideInputError(input, this.classSelectorContainer);
    });
    this._toggleButtonState(this.elements);
  }
}

function formValidator() {
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

formValidator();
