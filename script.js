"use strict";

const mobileMenuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const bookmark = document.querySelector(".landing-card__bookmark--text");
const mainModal = document.querySelector(".main-modal");
const openMainModal = document.querySelectorAll(".open-modal");
const closeMainModal = document.querySelector(".close-modal-icon");
const thankYouModal = document.querySelector(".thank-you-modal");
const openThankingModal = document.querySelectorAll(".open-thank-you");
const thankingModalButton = document.querySelector(".thank-you-modal__button");
const openPledgeSection = document.querySelectorAll(".select");
const pledgeButton = document.querySelectorAll(".pledge__button");
const pledgeAmount = document.querySelectorAll(".pledge-amount");
const totalMoney = document.querySelector(".money");
const totalBackers = document.querySelector(".backers");
const progressBar = document.querySelector(".progress-bar__progress");

pledgeAmount.forEach((pledge) => {
  pledge.value = "";
});

// Open/Close Mobile Menu
let menuOpen = false;

mobileMenuIcon.addEventListener("click", function (e) {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("active-overlay");
  changeMenuIcon();
});

function changeMenuIcon() {
  if (!menuOpen) {
    mobileMenuIcon.src = "./images/icon-close-menu.svg";
  } else {
    mobileMenuIcon.src = "./images/icon-hamburger.svg";
  }
  menuOpen = !menuOpen;
}

//Change bookmark text color on click
bookmark.addEventListener("click", (e) =>
  bookmark.classList.toggle("active-bookmark")
);

// Open/Close Main Modal
openMainModal.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    mainModal.classList.add("active");
    overlay.classList.add("active-overlay");
  })
);

closeMainModal.addEventListener("click", function (e) {
  mainModal.classList.remove("active");
  overlay.classList.remove("active-overlay");
});

// Open/Close Thank You Modal
openThankingModal.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    thankYouModal.classList.add("active");
    mainModal.classList.remove("active");
    // console.log("test");
  })
);

thankingModalButton.addEventListener("click", function (e) {
  thankYouModal.classList.remove("active");
  overlay.classList.remove("active-overlay");
});

//Open Pledge Section on click
openPledgeSection.forEach((header) =>
  header.addEventListener("click", function (e) {
    header.classList.add("active");
    const getParent = header.parentElement;
    getParent.style.border = "2px solid var(--Moderate-cyan)";
    const getPledge = getParent.lastElementChild;
    getPledge.classList.add("active-pledge");
    getPledge.style.maxHeight = getPledge.scrollHeight + "px";
  })
);

//Update progress bar, total backers and total money

function updateUI() {
  pledgeButton.forEach((button) =>
    button.addEventListener("click", function (e) {
      let getInputVal = parseFloat(
        button.previousElementSibling.lastElementChild.value
      );

      let newTotalMoney =
        parseFloat(totalMoney.innerHTML.replace(",", "")) + getInputVal;
      let newTotalString = newTotalMoney.toString();
      newTotalString =
        newTotalString.substring(0, 2) +
        "," +
        newTotalString.substring(2, newTotalString.length);

      totalMoney.innerHTML = newTotalString;

      const newTotalBackers =
        parseFloat(totalBackers.innerHTML.replace(",", "")) + 1;
      let newTotalBackersString = newTotalBackers.toString();
      newTotalBackersString =
        newTotalBackersString.substring(0, 1) +
        "," +
        newTotalBackersString.substring(1, newTotalBackersString.length);

      totalBackers.innerHTML = newTotalBackersString;

      progressBar.classList.add("confirmed-pledge");
    })
  );
}
updateUI();
