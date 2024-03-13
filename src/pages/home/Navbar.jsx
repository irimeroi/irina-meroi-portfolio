import React, {useState} from 'react';

function Navbar() {
    const [display, setDisplay] = useState(false);

    return (
        <div>
            <nav className="d-flex justify-content-around align-items-center">
                <h1 id="main-btn" className="name">Irina Meroi</h1>
                <ul className="nav-links d-flex justify-content-around" style={{ transform: display ? "translateX(0px)" : ""}}>
                    <li><a href="/#about" className="nav-btns">About</a></li>
                    <li><a href="/#portfolio" className="nav-btns">Portfolio</a></li>
                    <li><a href="/#skills" className="nav-btns">Skills</a></li>
                    <li><a href="/#contact" className="nav-btns">Contact</a></li>
                </ul>
                <i className="fa-solid fa-bars bars-icon" onClick={() => setDisplay(!display)} ></i>
            </nav>
        </div>

    )
}

export default Navbar;