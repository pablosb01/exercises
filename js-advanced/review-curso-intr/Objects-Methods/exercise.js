const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Get the keys of the person object
const keys = Object.keys(person);

// Iterate over the keys and print the key-value pairs
keys.forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
