import React, {useState, useEffect} from "react";

function GithubUser({ username }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try{
                const response = await fetch(`https://api.github.com/users/${username}`);
                if(!response.ok) {
                    throw new Error('Failed to fetch user data')
                }
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        if (username) {
            fetchUserData();
        }

    },[username]);

    return(
        <div>
            {userData ? (
                <div>
                    <h2>{userData.name}</h2>
                    <p>Login: {userData.login}</p>
                    <img src={userData.avatar_url}/>
                </div>
            ) : (<p>
                Loading user data...
            </p>)}
        </div>
    )
}

export default GithubUser