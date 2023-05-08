import React from "react";
import { Link } from "react-router-dom";

// find out jow to use navigate r useNavigate in react-router-dom
const Sidebar = () => {
    return <ul className="list-unstyled float-end sidebar-items" >
            <li>
                <Link to="/">User</Link>
            </li>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/">Services</Link>
            </li>
        </ul>
}

export default Sidebar;