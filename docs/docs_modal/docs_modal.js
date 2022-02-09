const modalShowBtn = document.querySelectorAll(".modal-demo-btn");
const modalShowDemo = document.querySelectorAll(".modal-demo-result");

modalShowBtn[0].addEventListener("click", () => {
  modalShowDemo[0].classList.add("modal-container");

  setTimeout(() => {
    modalShowDemo[0].classList.remove("modal-container");
  }, 1500);
});
