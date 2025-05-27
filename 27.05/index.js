const users = [
  {
    name: "Еблан",
    role: "admin",
  },
  {
    name: "Чепуха",
    role: "employee",
  },
  {
    name: "Чушпан",
    role: "editor",
  },
  {
    name: "Тупорылый",
    role: "admin",
  },
  {
    name: "Долбоёжик",
    role: "employee",
  },
  {
    name: "Криворукий",
    role: "editor",
  },
  {
    name: "Шлёпа",
    role: "admin",
  },
  {
    name: "Петушила",
    role: "editor",
  },
  {
    name: "Мудозвон",
    role: "admin",
  },
];

function splitUsers(userList, userRole) {
  return userList.filter((element) => element.role === userRole);
}

function renderUserList(userList, event) {
  if (event.target.classList.contains("users__button-active")) {
    return;
  }
  switch (event.target.id) {
    case "buttonAdmin":
      console.log(splitUsers(userList, "admin"));
      break;
    case "buttonEditor":
      console.log(splitUsers(userList, "editor"));
      break;
    default:
      console.log(userList);
      break;
  }
}

function buttonToggleActive(event) {
  const activeButton = document.querySelector(".users__button-active");
  if (activeButton) {
    activeButton.classList.remove("users__button-active");
  }
  event.target.classList.add("users__button-active");
}

const userButton = document.querySelectorAll(".users__button");
userButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    renderUserList(users, event);
    buttonToggleActive(event);
  });
});
