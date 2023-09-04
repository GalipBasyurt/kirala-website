const items = document.querySelectorAll(".kirala-neo-collapse-wrap-item");
const content = document.querySelectorAll(".content");
const icon = document.querySelectorAll(".icon");

console.log(items);

items.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (content[index].classList.contains("active")) {
      content[index].classList.remove("active");
      icon[index].classList.remove("active");
    } else {
      content[index].classList.add("active");
      icon[index].classList.add("active");
    }
  });
});
