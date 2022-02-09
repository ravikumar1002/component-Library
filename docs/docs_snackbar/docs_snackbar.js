const snackbarShowBtn = document.querySelectorAll(".snackbar-demo-btn");
const snackbarShowDemo = document.querySelectorAll(".snackbar-demo-result");

snackbarShowBtn[0].addEventListener("click", () => {
  snackbarShowDemo[0].classList.add("snackbar-left-bottom");

  setTimeout(() => {
    snackbarShowDemo[0].classList.remove("snackbar-left-bottom");
  }, 1500);
});

snackbarShowBtn[1].addEventListener("click", () => {
  snackbarShowDemo[1].classList.add("snackbar-center-bottom");

  setTimeout(() => {
    snackbarShowDemo[1].classList.remove("snackbar-center-bottom");
  }, 1500);
});
