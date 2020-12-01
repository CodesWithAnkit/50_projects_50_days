const panel = document.querySelectorAll(".panel");

panel.forEach((p) => {
  p.addEventListener("click", () => {
    removeActiveClasses();
    p.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panel.forEach((p) => {
    p.classList.remove("active");
  });
};
