import React from "react";
import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {
  const { user, error, loading } = useGithubUser(username);

  return (
    <div>
      {loading && <p>Loading user data...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Login: {user.login}</p>
          <img src={user.avatar_url} alt="User avatar" />
        </div>
      )}
    </div>
  );
}

export default GithubUser;
