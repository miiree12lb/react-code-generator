import React, {useState, useEffect} from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer.jsx";
import Nabvar from "./Navbar.jsx";
import LeftNav from "./LeftNav.jsx";
// @ts-ignore
import './css/root.css';

function Root() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <BrowserRouter>
            <Nabvar theme={theme} setTheme={setTheme} />

            
            <LeftNav />
            

            <div id="view">
                
            </div>

            <div id="footer">
                <Footer theme={theme}/>
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}