let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};
const passportMarried1 = JSON.parse(JSON.stringify(passportMarried));
passportMarried1.married = true;
console.log(passportMarried.married, passportMarried1.married);
