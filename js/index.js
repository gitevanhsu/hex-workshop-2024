const closeBtn = document.querySelector(".mobile > .top > .icon-box > .close");
const burgerBtn = document.querySelector(".mobile > .top >.icon-box > .burger");
const menu = document.querySelector(".mobile > .nav");
const cover = document.querySelector(".mobile > .cover");
let loading = false;
function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = 0;
  element.classList.toggle("hide");
  let interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.15;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
      loading = false;
    }
  }, 30);
}

function fadeOut(element, callback) {
  let opacity = 1;
  let interval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.15;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
      element.classList.toggle("hide");
      loading = false;
    }
  }, 30);
}

function handleOpen() {
  if (loading) return;
  loading = true;
  fadeIn(closeBtn);
  fadeIn(menu);
  fadeIn(cover);
  fadeOut(burgerBtn);
  document.body.style.overflow = "hidden";
}

function handleClose() {
  if (loading) return;
  loading = true;
  fadeOut(closeBtn);
  fadeOut(menu);
  fadeOut(cover);
  fadeIn(burgerBtn);
  document.body.style.overflow = "";
}

burgerBtn.addEventListener("click", handleOpen);
closeBtn.addEventListener("click", handleClose);
cover.addEventListener("click", handleClose);
