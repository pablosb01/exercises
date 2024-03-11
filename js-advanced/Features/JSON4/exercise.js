const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};



const idageJSON = { id: person.id, age: person.age };
const json = JSON.stringify(idageJSON);
console.log(json);