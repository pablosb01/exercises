class Person {
  constructor(firstName, lastName, age){
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get age(){
    return this._age;
  }
  set firstName(newFirstName){
    if(typeof newFirstName === 'string'){
      this._firstName = newFirstName;
    }else{
      console.error('Error: El nombre debe de ser texto')
    }
  }
  set lastName(newLastName){
    if(typeof newLastName === 'string'){
      this._lastName = newLastName;
    }else{
      console.error('Error: El nombre debe se ser texto')
    }
  }
  set age(newAge){
    if(typeof newAge === 'number' && newAge > 0){
      this._age = newAge;
    }else{
      console.error('Error: La edad debe de ser un numero positivo')
    }
  }
  get fullName(){
   return person.firstName + " " + person.lastName
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);