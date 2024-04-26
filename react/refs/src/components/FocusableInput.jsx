import React, { useEffect, useRef } from "react";

function FocusableInput() {
    const input = useRef();

    useEffect(() => {
        console.log('First render')
        input.current.focus(); 
    }, []);

    return (
        <>
            <input type='text' ref={input}></input>
        </>
    );
}

export default FocusableInput;
