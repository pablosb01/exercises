import { useState } from "react";
import CounterDisplay from '/.'

export function Counter({initialValue = 0, incrementBy = 1}) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrement() {
        setCounter((c) => c +incrementBy)
    }

    function handleDecrement() {
        setCounter((c) => c - incrementBy)
    }

    function handleReset() {
        setCounter(initialValue)
    }

    return(
        <>
        <CounterDisplay count={counter} />
        <button onClick={handleIncrement}></button>
        <button onClick={handleDecrement}></button>
        <button onClick={handleReset}></button>
        </>
    )
}