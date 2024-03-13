import HeroSection from "../HeroSection";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Resume from "../Resume";

export default function Home() {
    return(
        <>
            <HeroSection />
            <Portfolio />
            <Resume />
            <ContactMe />
        </>
    );
}