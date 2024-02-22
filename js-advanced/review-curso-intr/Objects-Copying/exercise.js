const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"

// porque el person2 = person1 no copia el objeto en otro, los iguala, apunta al mismo objeto
// entonces al cambiar el firstName de person2 tambien se cambia el person1 porque son iguales

console.log(person1);
console.log(person2);
