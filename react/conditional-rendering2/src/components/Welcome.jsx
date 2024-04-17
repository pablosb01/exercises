import React from 'react';
import Age from './Age';

function Welcome(user) {
    const userData = { age: user.age, name: user.name };
    return (
        <div>
            <p>Welcome {userData.name}</p>
            <Age age={userData.age} condition={userData.age > 18} />
            <Age age={userData.age} condition={userData.age} />
            <Age age={userData.age} condition={userData.age > 18 && userData.age <65} />
            <Age age={userData.age} condition={userData.age > 18 && userData.age < 65 && userData.name === "John"} />
        </div>
    );
}

export default Welcome;