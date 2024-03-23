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

function getLocalStorage() {
  const userString = localStorage.getItem("user");
  const userParsed = JSON.parse(userString);
  console.log(userParsed)
}

getLocalStorage()