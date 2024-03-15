import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Skills from "../Skills";

export default function Home() {
    return(
        <>
            <HeroSection />
            <AboutMe />
            <Portfolio />
            <Skills />
            <ContactMe />
        </>
    );
}