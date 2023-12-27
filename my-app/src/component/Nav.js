import React from "react";
import logo from "../img/LOGO.png"
function Nav() {
    return (
        <div>
            <nav className="navbar">
                <img className="logo" src={logo} alt="logo" />

                <ul>
                    <li><a href="./contac.html" style={{ color: "rgb(51, 51, 145)" }}>TRAVEL WITH US</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
