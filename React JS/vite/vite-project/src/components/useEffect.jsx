import { useEffect } from 'react';

function WelcomeMessage() {
    useEffect(() => {
        alert("Welcome to the React!");
    }, []);

    return <h2>Welcome to the class</h2>;
}

export default WelcomeMessage;