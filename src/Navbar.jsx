import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "./assets/images/logo.png";
// @ts-ignore
import './css/navbar.css';

function Nabvar({theme, setTheme}) {
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="nav-bar">
            <div className="chip">
                <Link to="https://miiree12lb.site/">
                    <img src={logo} alt="logo" width="50" height="50" />
                </Link>
                React Code Generator
            </div>

            <button onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    );

}

export default Nabvar;