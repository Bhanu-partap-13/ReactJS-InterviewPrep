// import { useState } from 'react';

// function Count() {
//     const [ count, setCount] = useState(0);

// function handleClick() {
//     setCount (count + 1);
// } 
// return (
//         <div>
//             <p> {count} </p>
//             <button onClick={handleClick}>Increase</button>
//         </div>
//     );
// }

// export default Count;
import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0); //In this code the count is the variable with the initial value of 0, because of the useState(0),
  // as the set count is the function so it will modify the value of the count.

  function handleClick() {
    setCount(count + 1);
  }
  function clickHandle() {
    setCount(count - 1);
  }

  return (
    <div>
      <p style={{color: "blue"}}>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
      <button onClick={clickHandle}>Decrease</button>
    </div>
  );
}

export default Count;
