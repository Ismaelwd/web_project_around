export default class FormValidator {
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

  _showInputError(inputElement) {
    const formMessage = document.querySelector(
      `.${this.classSelectorContainer.errorClass}_${inputElement.id}`
    );
    formMessage.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const formMessage = document.querySelector(
      `.${this.classSelectorContainer.errorClass}_${inputElement.id}`
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
      this.button.removeAttribute("disabled");
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
      this._hideInputError(input);
    });
    this._toggleButtonState(this.elements);
  }
}
