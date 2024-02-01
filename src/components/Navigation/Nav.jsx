function Navbar1(props) {
    const { setCurrentPage } = props;
    return (
        <nav className='d-inline'>
            <div className='d-flex justify-content-around flex-wrap'>
                <button id='main-btn' onClick={() => setCurrentPage('aboutme')}>Irina Meroi</button>
                <button className="nav-btn border" onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
                <button className="nav-btn border" onClick={() => setCurrentPage('contactme')}>Contact Me</button>
                <button className="nav-btn border" onClick={() => setCurrentPage('resume')}>Resume</button>
            </div>
        </nav>
    );
}

export default Navbar1;