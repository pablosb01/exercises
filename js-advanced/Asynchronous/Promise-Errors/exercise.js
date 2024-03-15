/* Write a first promise that takes as parameter the variable isLogged . If the variable is true, then we return a random number from the resolve, 
otherwise we dispatch an error. We write a second promise that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, 
in the resolve we must return the following data: {name: "John", age: 24}, otherwise we must dispatch an error. Once this is done, 
try to chain the promises to eventually return the final object {name: "John", age: 24}

const isLogged = true; */

let isLogged = true;
/* const randomNumber = 3 */

//This function check the login status

const checkLogin = (logged) => {
    return new Promise((resolve, reject) => {
        //if Logged returns a random number
        if(logged === true){
            const randomNumber = Math.random()
            resolve(randomNumber)
        //If not Logged returns a Error
        }else{
            reject(new Error("User not logged"))
        }
    })
}

//Evaluate the given number if isLogged is true

const returnUserData = (logNumber) => {
    return new Promise ((resolve, reject) => {
        //If logNumber > 0.5 return User Data
        if(logNumber > 0.5){
            resolve({name: "John", age: 24})
        //If not > 0.5 return a Error
        }else{
            reject(new Error("Number not valid"))
        }
    })
}

checkLogin(isLogged) //Invoco a funcion checkLogin con argumento isLogged
    .then((res) => returnUserData(res)) 
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(() => console.log("Check Complete"))