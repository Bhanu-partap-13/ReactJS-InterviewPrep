import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext(); // create context first

function App() {
    return (
        <NameContextProvider value="Bhanu Partap">
        <Child />
        </NameContextProvider>
    );
}

function Child() {
    const name = useContext(NameContextProvider); // use context in child component
    return <h2>Hello, {name}!</h2>;
}

export default App;
