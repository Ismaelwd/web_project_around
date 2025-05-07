import { handlePopupImageOpen } from "./utils.js";
export default class Card {
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
