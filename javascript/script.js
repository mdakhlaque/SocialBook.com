// ============ dark mode toggle button ======================

let toggleBtn = document.querySelector(".right-profile");
let toggleButton = document.querySelector("#toggle-btn");
let check = 1;

toggleButton.addEventListener("click", function () {
  if (check == 1) {
    toggleBtn.style.display = "flex";
    toggleBtn.style.justifyContent = "flex-end";
    toggleBtn.style.backgroundColor = "#003b9b";
    check = 0;
  } else {
    toggleBtn.style.display = "flex";
    toggleBtn.style.justifyContent = "flex-start";
    toggleBtn.style.backgroundColor = "#999999";
    check = 1;
  }
});

// ======== dark theme section start =====================

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

// ============== post card coading start =======================

let likeSection = document.querySelectorAll(".like-section");

likeSection.forEach(function (items) {
  let likeBtn = items.querySelector(".like-btn");
  let likeStore = items.querySelector("#like-store");
  let a = 199;

  likeBtn.addEventListener("click", function () {
    a++;
    likeStore.innerHTML = a;
    likeBtn.classList.add("like-btn-change");
  });
});

// ============ left section toggle coad ============

let leftSection = document.querySelector(".left-section");
let leftArrowBtn = document.querySelector("#left-arrow-btn");
let flag = 0;

leftArrowBtn.addEventListener("click", function () {
  if (flag == 0) {
    leftSection.classList.add("left-section-toggle");
    leftArrowBtn.style.transform = "rotate(180deg)";
    flag = 1;
  } else {
    leftSection.classList.remove("left-section-toggle");
    leftArrowBtn.style.transform = "rotate(0deg)";
    flag = 0;
  }
});

// ================== form validate ===================

let user = document.querySelector("#user-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let userError = document.querySelector("#user-error");
let passError = document.querySelector("#pass-error");
let emailError = document.querySelector("#email-error");
let userBorder = document.querySelector(".user-border");
let emailBorder = document.querySelector(".email-border");
let passBorder = document.querySelector(".pass-border");

function validate() {
  let flag = 1;
  if (user.value == "") {
    userError.innerHTML = "user Can't be blank";
    userBorder.style.border = "1.2px solid red";
    flag = 0;
  } else if (user.value.trim() == "") {
    userError.innerHTML = "Can't take space";
    userBorder.style.border = "1.2px solid red";
    flag = 0;
  } else if (user.value.length < 5) {
    userError.innerHTML = "Minimum 5 digit";
    flag = 0;
  } else {
    userError.innerHTML = "";
    userBorder.style.border = "1.5px solid green";
  }

  if (email.value == "") {
    emailError.innerHTML = "Email can't be blank";
    emailBorder.style.border = "1.2px solid red";
    flag = 0;
  } else {
    emailError.innerHTML = "";
    emailBorder.style.border = "1.5px solid green";
  }

  if (password.value == "") {
    passError.innerHTML = "Password can't be blank";
    passBorder.style.border = "1.2px solid red";
    flag = 0;
  } else if (password.value.length < 10) {
    passError.innerHTML = "Minimum 10 digit";
    flag = 0;
  } else {
    passError.innerHTML = "";
    passBorder.style.border = "1.5px solid green";
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}

// ============= right section toggle ==========================

let rightSection = document.querySelector(".right-section");
let rightBtn = document.querySelector("#right-btn");

rightBtn.addEventListener("click", function () {
  rightSection.classList.toggle("right-section-toggle");
});

document.querySelector("#img-btn").addEventListener("click", function () {
  let profileContainer = document.querySelector(".profile-container");

  profileContainer.classList.toggle("profile-container-show");
});

// ============= form section ===============================

document.querySelector("#login-btn").addEventListener("click", function () {
  document.querySelector(".form-container").classList.add("showLogin");
});

document.querySelector("#cancel").addEventListener("click", function () {
  document.querySelector(".form-container").classList.remove("showLogin");
});

document.querySelector("#sign-in-btn").addEventListener("click", function () {
  document.querySelector("#sign-in-section").classList.add("showLogin");

  document.querySelector(".form-container").classList.remove("showLogin");
});

document.querySelector("#cancel-two").addEventListener("click", function () {
  document.querySelector("#sign-in-section").classList.remove("showLogin");
});

document.querySelector("#sign-up-btn").addEventListener("click", function () {
  document.querySelector(".form-container").classList.add("showLogin");
  document.querySelector("#sign-in-section").classList.remove("showLogin");
});
