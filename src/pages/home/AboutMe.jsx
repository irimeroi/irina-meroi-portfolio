function AboutMe() {
    return (
        <section id="about" className="about">
            <h3 className="text-center">About me</h3>
            <img className="about-mypic" src="assets/images/im.png" />
            <ul className="d-flex justify-content-center">
                <li className="about-li"><a href="https://www.linkedin.com/in/irina-meroi-385bbb245/"><img src="assets/logos/Linkedin.png" alt="LinkedIn" className="about-icons" /></a></li>
                <li className="about-li"><a href="https://github.com/irimeroi"><img src="assets/logos/github-mark-white.png" alt="Github" className="about-icons" /></a></li>
                <li className="about-li"><a href="mailto:irimeroi7@gmail.com"><i className="fa-sharp fa-solid fa-envelope fa-lg about-icons"></i></a></li>
                <li className="about-li"><a href="https://drive.google.com/file/d/1AOCmuJTE6IPpTC1rd2KEJF9EcjD-NA5S/view?usp=sharing"><i className="fa-solid fa-download about-icons"></i></a></li>
            </ul>
            {/* <p className="about-downloadResume text-center"><a className="about-resumeLink" href="https://drive.google.com/file/d/1AOCmuJTE6IPpTC1rd2KEJF9EcjD-NA5S/view?usp=sharing">Or download my resume <i className="fa-solid fa-download"></i></a></p> */}
            <p className="about-ph">I enjoy working in environments that push me to learn new skills quickly, solve problems creatively, develop innovative strategies with a team, and never become complacent. I consider myself a very passionate and outgoing person, who over the years have discovered the power of patience and perseverance, the drive to exit my comfort zones, the strength to overcome adversity, and most importantly, the value of humility and gratitude.</p>
        </section>
    )
}

export default AboutMe;