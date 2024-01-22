import { useState } from 'react';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme')
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'aboutme':
        return <AboutMe />
      default:
        return <AboutMe />
    }
  }
  return (
    <>
     <Nav setCurrentPage={setCurrentPage}/>
     {renderCurrentPage()}
    </>
  )
}

export default App;