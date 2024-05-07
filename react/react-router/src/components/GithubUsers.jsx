import React, { useState } from "react"
//import GithubUser from "./GithubUser";
import useGithubUser from "./useGithubUser";

function GithubUsers({username}) {

    const { data, error, loading, fetchUserData } = useGithubUser(username)

    function handleGetUserData() {
        fetchUserData(username)
    }

    return(
        <>
            <button onClick={handleGetUserData}>Buscar Usuario</button>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error</h2>}
            {data && <h1>{data.name}</h1>}
        </>
    )
}

export default GithubUsers