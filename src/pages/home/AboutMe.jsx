function AboutMe() {
    return (
        <section id="about" className="about">
            <h3 className="about-title text-center">About me</h3>
            <img className="about-mypic" src="assets/images/im.png" />
            <ul className="d-flex justify-content-center">
                <li className="about-li"><a href="https://www.linkedin.com/in/irina-meroi-385bbb245/"><img src="assets/logos/Linkedin.png" alt="LinkedIn" className="about-icons" /></a></li>
                <li className="about-li"><a href="https://github.com/irimeroi"><img src="assets/logos/github-mark-white.png" alt="Github" className="about-icons" /></a></li>
                <li className="about-li"><a href="mailto:irimeroi7@gmail.com"><i className="fa-sharp fa-solid fa-envelope fa-lg about-icons"></i></a></li>
                <li className="about-li"><a href="https://docs.google.com/document/d/140v47duev4Ptq4TfH8L2bv-14i8h6Ys4D3Sz-win4fI/edit?usp=sharing"><i className="fa-solid fa-download about-icons"></i></a></li>
            </ul>
            <p className="about-ph">I'm a <span className="about-ph-pink">bilingual Software Developer</span> with a robust background in Tourism and Travel Services. I'm an innately curious person and deeply passionate about <span className="about-ph-pink">continuous learning</span> and skills acquisition, which lead me to acquired a certificate in <span className="about-ph-pink">Full Stack Web Development</span> from the esteemed University of California, Los Angeles Coding Bootcamp, graduating with distinction; and to start pursuing a <span className="about-ph-pink">Bachelor's Degree in Cybersecurity</span> at the respected Universidad de Palermo.</p>
            <p className="about-ph">I enjoy working in environments that push me to learn new skills quickly,<span className="about-ph-pink"> solve problems creatively,</span> develop innovative strategies with a <span className="about-ph-pink">team</span>, and never become complacent. I consider myself a very <span className="about-ph-pink">passionate and outgoing</span> person, who over the years have discovered the power of <span className="about-ph-pink">patience and perseverance,</span> the drive to exit my comfort zones, the strength to overcome adversity, and most importantly, the value of humility and gratitude.</p>
            <span className="about-ph-pink"></span>       
        </section>
    )
}

// Strong preference and proficiency in front-end development, complemented by a comprehensive understanding of back-end systems.


export default AboutMe;