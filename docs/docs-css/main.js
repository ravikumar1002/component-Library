const drawerBtn = document.querySelector(".drawer-btn");
const drawerContainer = document.querySelector(".aside-drawer-container");

drawerBtn.addEventListener("click", () => {
  if (drawerContainer.style.display == "none") {
    drawerContainer.style.display = "block";
  } else {
    drawerContainer.style.display = "none";
  }
});
