let passport = {
  name: "Petr",
  surname: "Petrov",
};
let passport2 = { ...passport, name: "Ivan" };
console.log(passport.name, passport2.name);
