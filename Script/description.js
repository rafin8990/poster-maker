document.getElementById("description-close").addEventListener("click", () => {
  const descriptionSection = document.getElementById("description");
  const descriptionButton = document.getElementById("btn-description");
  descriptionSection.classList.remove("block");
  descriptionSection.classList.add("hidden");
  descriptionButton.classList.remove("hidden");
  descriptionButton.classList.add("block");
});

document.getElementById("btn-description").addEventListener("click", () => {
  const descriptionSection = document.getElementById("description");
  const descriptionButton = document.getElementById("btn-description");
  descriptionButton.classList.remove("block");
  descriptionButton.classList.add("hidden");
  descriptionSection.classList.remove("hidden");
  descriptionSection.classList.add("block");
});
