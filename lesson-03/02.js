const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
console.log(
  `${
    words.indexOf("апельсин") !== -1
      ? "Ура! нашел"
      : "Придется поискать в другом магазине…"
  }`,
);
