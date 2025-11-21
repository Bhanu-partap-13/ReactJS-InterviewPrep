import { useState } from 'react';

function Color() {
    const [currentColor, setCurrentColor] = useState('Red');
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
    
    function changeColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setCurrentColor(colors[randomIndex]);
    }
    
    return (
        <div>
            <h2>Current Color: {currentColor}</h2>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
export default Color;