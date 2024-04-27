import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Skills from "../Skills";
import BackToTopButton from "../../../components/BackToTopButton";

export default function Home() {
    return(
        <>
            <HeroSection />
            <AboutMe />
            <Portfolio />
            <Skills />
            <ContactMe />
            <BackToTopButton />
        </>
    );
}