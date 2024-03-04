function isAdult(person) {
  let {age} = person;
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 19
};

console.log(isAdult(person));