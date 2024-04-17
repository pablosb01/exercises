import React from "react";
import AlertClock from './button'

function App(){
    const handleButtonClick = () => {
        const currentTime = new Date().toLocaleTimeString();
        alert(`La hora actual es: ${currentTime}`)
    };

    return(
        <>
        <AlertClock handleClick = {handleButtonClick}/>
        </>
    );

}

export default App;