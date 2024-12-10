import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer.jsx";
import Nabvar from "./Navbar.jsx";
import LeftNav from "./LeftNav.jsx";
// @ts-ignore
import "./css/root.css";

function Root() {
    const [theme, setTheme] = useState("light");
    const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <BrowserRouter>
            <Nabvar theme={theme} setTheme={setTheme} />

            <LeftNav isCollapsed={isLeftCollapsed} setIsCollapsed={setIsLeftCollapsed} />

            <div
                id="view"
                style={{
                    marginLeft: isLeftCollapsed ? "30px" : "300px", // Adjust margin based on collapsed state
                }}
            >
                <div id="input-area">
                    {/* Input area content */}
                </div>

                <div id="output-area">
                    {/* Output area content */}
                </div>
            </div>

            <div
                id="footer"
                style={{
                    marginLeft: isLeftCollapsed ? "30px" : "300px", // Adjust footer margin to align with the navbar
                }}
            >
                <Footer theme={theme} />
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}

export default Root;
