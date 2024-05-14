import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter() {
    const [count, setCount] = useState(0);

    function addOne() {
        setCount(count + 1)
    }

    function restOne() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return(
        <>
            <CounterDisplay count={count} />
            <button onClick={addOne}>add one</button>
            <button onClick={restOne}>rest one</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default Counter