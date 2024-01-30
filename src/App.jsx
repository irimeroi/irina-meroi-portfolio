import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from 'react';
import Navbar1 from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme')
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'aboutme':
        return <AboutMe />
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
      <Navbar1 setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
    </>
  )
}

export default App;