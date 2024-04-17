import React from "react";

function Age ({age, condition}){
    if(condition) {
        return (
            <p>You are {age} years old</p>
        )
    } else {
        return null;
    }
} 
export default Age;