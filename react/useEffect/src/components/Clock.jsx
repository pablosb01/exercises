import { useEffect , useState } from "react";

function Clock(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() =>{
            const newDate = new Date()
            setCurrentTime(newDate)
            console.log(newDate.toLocaleTimeString())
        },500);
        
        return (() => {
            clearInterval(interval)
        })
    },[]);


    return(
        <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    )
}

export default Clock