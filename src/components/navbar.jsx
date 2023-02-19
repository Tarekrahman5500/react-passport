import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({user}) => {
    const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">Oauth App</Link></span>
            {
                user ? (
                    <ul className="list">
                        <li className="listItem">
                            <img
                                src="https://images.pexels.com/photos/3643797/pexels-photo-3643797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="" className="avatar"/>
                        </li>
                        <li className="listItem">{`${user.firstName} ${user.lastName}`}</li>
                        <li className="listItem" onClick={logout}>Logout
                        </li>
                    </ul>
                ) : (
                    <Link className="link" to="/login">Login</Link>
                )
            }

        </div>
    );
};

export default Navbar;