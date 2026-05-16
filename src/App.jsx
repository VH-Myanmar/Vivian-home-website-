import { useState, useEffect } from 'react'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import StoryPage from './pages/StoryPage'
import PortfolioPage from './pages/PortfolioPage'
import CompletedProjectsPage from './pages/CompletedProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Sync state with URL hash for persistence
  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home'
    if (['home', 'story', 'portfolio', 'projects', 'contact'].includes(hash)) {
      setCurrentPage(hash)
    }
  }, [])

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page)
    window.location.hash = page
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={handleSetCurrentPage} />
      case 'story':
        return <StoryPage />
      case 'portfolio':
        return <PortfolioPage />
      case 'projects':
        return <CompletedProjectsPage setCurrentPage={handleSetCurrentPage} />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={handleSetCurrentPage} />
    }
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Header currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
