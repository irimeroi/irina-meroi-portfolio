import HeroSection from "../HeroSection";
import Navbar from "../Navbar"
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Resume from "../Resume";
import Footer from "../Footer"

export default function Home() {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Portfolio />
            <ContactMe />
            <Resume />
            <Footer />
        </>
    );
}