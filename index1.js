const node1 = {
  name: "div",
  classList: ["header__burger"],
  contains: function (className) {
    for (let index = 0; index < node1.classList.length; index++) {
      if (node1.classList[index] === className) {
        return true;
      }
    }
    return false;
  },
  add: function (className) {
    if (!node1.contains(className)) {
      node1.classList.push(className);
    }
  },
  remove: function (className) {
    node1.classList = node1.classList.filter(
      (element) => element !== className
    );
  },
};
console.log(node1.classList);
node1.add("popa");
console.log(node1.classList);
console.log(node1.contains("popa"));
node1.remove("popa");
console.log(node1.classList);
