// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// function Navbar(props) {
//     const { setCurrentPage } = props;
//     return (
//         <nav className='d-inline'>
//             <div className='d-flex justify-content-around flex-wrap'>
//                 <button id='main-btn' onClick={() => setCurrentPage('herosection')}>Irina Meroi</button>
//                 <button className="nav-btn border" onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
//                 <button className="nav-btn border" onClick={() => setCurrentPage('contactme')}>Contact Me</button>
//                 <button className="nav-btn border" onClick={() => setCurrentPage('resume')}>Resume</button>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, {useState} from 'react';

function Navbar() {
    const [display, setDisplay] = useState(false);

    return (
        <div>
            <nav className="d-flex justify-content-around align-items-center">
                <div id="main-btn" className="name">Irina Meroi</div>
                <ul className="nav-links d-flex justify-content-around" style={{ transform: display ? "translateX(0px)" : ""}}>
                    <li><a className="nav-btns">About</a></li>
                    <li><a className="nav-btns">Portfolio</a></li>
                    <li><a className="nav-btns">Contact</a></li>
                    <li><a className="nav-btns">Resume</a></li>
                </ul>
                <i class="fa-solid fa-bars bars-icon" onClick={() => setDisplay(!display)} ></i>
            </nav>
        </div>

    )
}

export default Navbar;