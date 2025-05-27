const userButton = document.querySelectorAll(".users__button");
const userCards = document.querySelectorAll(".users__card");
const userCardsAdmin = document.querySelectorAll(".users__card-admin");
const userCardsEditor = document.querySelectorAll(".users__card-editor");
userButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    userButton.forEach((button) => {
      button.classList.remove("users__button-active");
    });
    event.target.classList.add("users__button-active");
    switch (event.target.innerText) {
      case "Админы":
        console.log(userCardsAdmin);
        break;
      case "Редактор":
        console.log(userCardsEditor);
        break;
      default:
        console.log(userCards);
        break;
    }
  });
});
