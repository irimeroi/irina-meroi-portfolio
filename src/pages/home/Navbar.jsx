import React, { useState } from 'react';

function Navbar() {
    const [display, setDisplay] = useState(false);

    return (
        <nav className="d-flex justify-content-around align-items-end fixed-top">
            <ul className="nav-btns d-flex justify-content-around" style={{ transform: display ? "translateX(0px)" : "" }}>
                <li><a href="/#about" className="nav-links">About</a></li>
                <li><a href="/#portfolio" className="nav-links">Portfolio</a></li>
                <li><a href="/#skills" className="nav-links">Skills</a></li>
                <li><a href="/#contact" className="nav-links">Contact</a></li>
            </ul>
            <i className="fa-solid fa-bars nav-icon" onClick={() => setDisplay(!display)} ></i>
        </nav>

    )
}

export default Navbar;