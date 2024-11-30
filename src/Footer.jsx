import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import instagram from "./assets/images/socials/instagram.svg";
//@ts-ignore
import linkedin from "./assets/images/socials/linkedin.svg";
//@ts-ignore
import linktree from "./assets/images/socials/linktree.png";
//@ts-ignore
import linktreeLight from "./assets/images/socials/linktree_light.png";
//@ts-ignore
import linkedinLight from "./assets/images/socials/linkedin_light.png";
//@ts-ignore
import instagramLight from "./assets/images/socials/instagram_light.png";
//@ts-ignore
import logo from "./assets/images/logo.png";

export default function Footer({theme}){
    return (
        <>
            <div id="footer-logo">
                <Link to="https://miiree12lb.site/">
                    <img alt="logo" src={logo} id="footer-logo-image" />
                </Link>
            </div>
            <div id="footer-icons-text">
                <div id="footer-icons">
                    <Link to="https://linktr.ee/miiree12lb"><img alt="linktree" src={theme ==="light" ? linktreeLight : linktree} width="50" height="50" /></Link>

                    <Link to="https://www.instagram.com/miiree12lb/"><img alt="instagram" src={theme === "light" ? instagramLight : instagram} width="50" height="50" /></Link>

                    <Link to="https://www.linkedin.com/in/mireia-lopez-bruch-0b7768241/"><img alt="linkedin" src={theme === "light" ? linkedinLight : linkedin} width="50" height="50" /></Link>  
                </div>
                <div id="footer-text">
                    © Mireia Lopez Bruch - 2024
                </div>
                    
            </div>
        </>
        
    );
}