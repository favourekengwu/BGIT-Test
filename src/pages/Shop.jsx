import React from "react";

const products = [
    {
        name: "Hp Laptop",
        price: 300,
        link: "hp",
    }, 
    {
        name: "Dell Laptop",
        price: 300,
        link: "dell",
    },
    {
        name: "Apple Laptop",
        price: 300,
        link: "apple",
    },
    {
        name: "Lenovo Laptop",
        price: 300,
        link: "lenovo",
    }
];
// find out jow to use navigate r useNavigate in react-router-dom
const Shop = () => {
    return <div className="py-5 d-flex comtainer">
            {products.map((product, key)=> {
                return(
                    <div key={key} className="product-wrapper mx-2">
                        <div>Name: <span>{product.name}</span> </div>
                        <div>Price: <span>{product.price}</span> </div>
                    </div>
                )
            })}
        {/* <div className="product-wrapper"></div> */}
    </div>;
};

export default Shop;