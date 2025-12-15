    // --------------------GET METHOD--------------------
// import {useNavigate} from 'react-router-dom';

// function HomeQuery() {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate('/product?id=2&name=laptop');
//     }
//     return (
//         <>
//         <h2>Home Page</h2>
//         <button onClick={handleClick}>View Product</button>
//         </>
//     );
// }

// export default HomeQuery;

// --------------------POST METHOD--------------------
import { useNavigate } from "react-router-dom";

function HomeQuery() {
    const navigate = useNavigate();
    const handleClick = () => {
        const product = {
            "id" : 2,
            "name" : "laptop"
        };
        navigate('/product', {state: product});
    }
    return (
        <>
        <h1> Welcome to </h1>
        <h2> Home Page</h2>
         <button onClick={handleClick}>View Product</button>
        </>
    )
}
export default HomeQuery;