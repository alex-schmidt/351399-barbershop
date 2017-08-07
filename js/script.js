// Modal

var link = document.querySelector(".login");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector("form");
var login = form.querySelector("[name=login]");
var password = form.querySelector("[name=password]");
var storage_login = localStorage.getItem("login");

link.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.add("modal-show");
  if (storage_login) {
    login.value = storage_login;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
})

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      event.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

// Modal map

var mapOpen = document.querySelector(".js-open-map");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");

mapOpen.addEventListener("click", function(event){
  event.preventDefault();
  mapModal.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function(event){
  event.preventDefault();
  mapModal.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (mapModal.classList.contains("modal-map-show")) {
      event.preventDefault();
      mapModal.classList.remove("modal-map-show");
    }
  }
});
