import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from 'react';
import Navbar from "../home/Navbar";
// import AboutMe from '../AboutMe';
import Portfolio from "../home/Portfolio";
import ContactMe from "../home/ContactMe";
import Resume from "../home/Resume";
import HeroSection from "../home/HeroSection";

function Header () {
  const [currentPage, setCurrentPage] = useState('herosection')
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'herosection':
        return <HeroSection />
      case 'portfolio':
        return <Portfolio />
      case 'contactme':
        return <ContactMe />
      case 'resume':
        return <Resume />
      default:
        return <AboutMe />
    }
  }
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </>
  )
}

export default Header;