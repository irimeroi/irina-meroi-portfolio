function Nav(props) {
    const { setCurrentPage } = props;
    return (
        <nav>
            <button onClick={() => setCurrentPage('aboutme')}>About Me</button>
            <button onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
            <button onClick={() => setCurrentPage('contactme')}>Contact Info</button>
            <button onClick={() => setCurrentPage('resume')}>Resume</button>
        </nav>
    );
}

export default Nav;