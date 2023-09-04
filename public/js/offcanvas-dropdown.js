const howToUse = document.querySelector(".how-to-use");
const icon = document.querySelector(".icon-dropdown");
const body = document.querySelector(".dropdown-body");

icon.addEventListener("click", () => {
  if (body.classList.contains("active")) {
    body.classList.remove("active");
    icon.classList.remove("active");
  } else {
    body.classList.add("active");
    icon.classList.add("active");
  }
});
