const drawerBtn = document.querySelector(".drawer-btn");
const drawerContainer = document.querySelector(".aside-drawer-container");
const scrollToTop = document.querySelector(".scroll-to-top")

drawerBtn.addEventListener("click", () => {
  if (drawerContainer.style.display == "none") {
    drawerContainer.style.display = "block";
  } else {
    drawerContainer.style.display = "none";
  }
});

const scrollFunction = () =>  {
  if (document.documentElement.scrollTop > 180) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};

const topScroll =  () =>  {
  document.documentElement.scrollTop = 0; 
}

scrollToTop.addEventListener("click", () => {
  topScroll()
})
