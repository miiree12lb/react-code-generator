import React, { useState } from "react";
// @ts-ignore
import "./css/leftnav.css";

function LeftNav({ isCollapsed, setIsCollapsed }) {
    const [isTextOpen, setIsTextOpen] = useState(false);


    const handleCollapseToggle = () => {
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
                <h4
                    onClick={() => setIsTextOpen(!isTextOpen)}
                >
                    Text Elements{" "}
                    <i className={`fa ${!isTextOpen ? "fa-caret-down" : "fa-caret-up"}`} />
                </h4>
                {isTextOpen && <div className="dropdown">
                    <div className="item" draggable>
                        <p>Title 1</p>
                        <h1>Title 1</h1>
                    </div>
                    
                    <div className="item" draggable>
                        <p>Title 2</p>
                        <h2>Title 2</h2>
                    </div>

                    <div className="item" draggable>
                        <p>Title 3</p>
                        <h3>Title 3</h3>
                    </div>

                    <div className="item" draggable>
                        <p>Title 4</p>
                        <h4>Title 4</h4>
                    </div>

                    <div className="item" draggable>
                        <p>Title 5</p>
                        <h5>Title 5</h5>
                    </div>

                    <div className="item" draggable>
                        <p>Title 6</p>
                        <h6>Title 6</h6>
                    </div>

                    <div className="item" draggable>
                        <p>Text</p>
                        <h6>Text</h6>
                    </div>
                </div>}

                
                <h4>Lists</h4>
            </div>

            <div id="collapse-arrow" onClick={handleCollapseToggle}>
                <i
                    id="caret"
                    className={`fa ${isCollapsed ? "fa-caret-right" : "fa-caret-left"}`}
                />
            </div>
        </div>
    );
}

export default LeftNav;
