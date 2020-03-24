let link = document.querySelector(".contacts__button");
let popup = document.querySelector(".modal__message");
let close = popup.querySelector(".modal__close");
let form = popup.querySelector("form");
let name = popup.querySelector("[name=name]");
let email = popup.querySelector("[name=email]");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--active");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--active");
  popup.classList.remove("modal--error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__message")) {
      popup.classList.remove("modal--active");
      popup.classList.remove("modal--error");
    }
  }
});
