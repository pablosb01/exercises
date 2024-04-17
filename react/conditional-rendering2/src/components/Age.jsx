import React from "react";

function Age ({age, condition}){
    if(condition) {
        return (
            age>18 ? <p>You are {age} years old</p> : <p>ure too young!</p>
        )
    } else {
        return null;
    }
} 
export default Age;