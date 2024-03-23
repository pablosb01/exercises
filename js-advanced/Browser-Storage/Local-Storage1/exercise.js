const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocalStorage(userObj) {
  const userJSON = JSON.stringify(userObj);
  localStorage.setItem('user', userJSON);
}

saveLocalStorage(user);