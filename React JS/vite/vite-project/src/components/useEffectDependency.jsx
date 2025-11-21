import { useEffect, useState } from 'react';

function EffectDependency() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert(`Count has been updated to: ${count}`);
    }, [count]);
    
    return ( <div>
        <h2>Welcome Students</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>

    </div>);
}

export default EffectDependency;