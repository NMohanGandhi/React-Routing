import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="nav-section">
            <ul>
                <Link to="/Home">
                    <li>Home</li>
                </Link>
                <Link to="Contact"><li>Contact</li>
                </Link>
                <Link to="/About">
                    <li>About</li>
                </Link>

                <Link to="/user/Nalla">
                    <li>User</li>
                </Link>
                
                
            </ul>
        </div>

    );
}
export default NavBar;