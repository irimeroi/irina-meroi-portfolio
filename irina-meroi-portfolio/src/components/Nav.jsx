import './Nav.css'

function Navbar1(props) {
    const { setCurrentPage } = props;
    return (
        <nav>
            <div className='navbtns'>
                <button id='main-btn' onClick={() => setCurrentPage('aboutme')}>Irina Meroi</button>
                <button className="nav-btn" onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
                <button className="nav-btn" onClick={() => setCurrentPage('contactme')}>Contact Me</button>
                <button className="nav-btn" onClick={() => setCurrentPage('resume')}>Resume</button>
            </div>
        </nav>
    );
}

export default Navbar1;

//location.pathname
//window.href