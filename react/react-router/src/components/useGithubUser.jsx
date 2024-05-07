import { useEffect, useState } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      /* if (!response.ok) {
        throw new Error("Failed to fetch user data");
      } */
      const userData = await response.json();
      console.log('user data:' , userData)
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(()=>{
    fetchUserData(username)
  },[username])

  return { fetchUserData, user, error, loading };
};

export default useGithubUser;
