import React, { useState } from "react"
import GithubUser from "./GithubUser";

function GithubUsers() {

    const [username, setUsername] = useState();
    const [inputUsername, setInputUsername] = useState([]);
    //const [inputUserList, setInputUserList] = useState([]);
    //const [clicked, setClicked] = useState(false);

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handleSearch() {
        if(username !== ''){
            setInputUsername(()=>[...inputUsername, username])
            setUsername('')
            console.log(inputUsername)
        }
    }

    return(
        <>
            <input type='text' placeholder='GHUB USERNAME'value={username} name='username' onChange={handleUsername}></input>
            <button onClick={handleSearch}>Buscar Usuario</button>
            {/* <GithubUser username={inputUsername} /> */}
            {inputUsername.map(user => <GithubUser username={user} />)}
        </>
    )
}

export default GithubUsers