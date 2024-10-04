const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  return colors
    .filter((x) => x === "черный" || x === "красный" || x === "желтый")
    .join("-");
}

console.log(createColorString());
