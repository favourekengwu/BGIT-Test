import React from "react";
import { useParams } from "react-router-dom";

// find out jow to use navigate r useNavigate in react-router-dom
const Product = () => {
    let params = useParams();
    // console.log(params)
    return <div>
        <div className="py-5">Product name is {params.product} </div>;
    </div>
}

export default Product;