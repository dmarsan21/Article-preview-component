const button = document.querySelector(".button");
const share = document.querySelector(".share-row");
const popup = document.querySelector(".popup");

button.addEventListener("click", () => {
    button.classList.toggle("active");
    share.classList.toggle("white");
    popup.classList.toggle("visible");
});