import React, { useState } from "react";
// @ts-ignore
import "./css/leftnav.css";

function LeftNav() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            id="left-nav"
            style={{
                width: isCollapsed ? "30px" : `300px`,
            }}
        >
            <div id="left-text-container" style={{ display: isCollapsed ? "none" : "block" }}>
                <h4>Text Elements</h4>
                <h4>Lists</h4>
            </div>
            <div id="collapse-arrow" onClick={toggleCollapse}>
                <i
                    id="caret"
                    className={`fa ${isCollapsed ? "fa-caret-right" : "fa-caret-left"}`}
                />
            </div>
        </div>
    );
}

export default LeftNav;
