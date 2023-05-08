import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
    return <ul className="list-unstyled float-end menu-items" >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
}

export default MenuItems;