            //GET METHOD

// import { useSearchParams } from "react-router-dom";

// function ProductQuery() {
//     const [params] = useSearchParams();
//     const id = params.get('id');
//     const name = params.get('name');
//     return (
//         <>
//         <h1>Product Details</h1>
//         <h2>Product ID: {id}, Name: {name}</h2>

//         </>
//     )
// }

// export default ProductQuery;

// -----------------POST-------------------------------

import { useLocation} from "react-router-dom";

const ProductQuery = () => {
    const location = useLocation();
    const product = location.state;

    return (
        <>
        <h1>Product Details</h1>
        <h2>Product ID: {product.id}, Name: {product.name}</h2>
        </>
   );
}

export default ProductQuery;