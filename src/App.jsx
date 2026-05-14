import { useState } from 'react'
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

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'story':
        return <StoryPage />
      case 'portfolio':
        return <PortfolioPage />
      case 'projects':
        return <CompletedProjectsPage setCurrentPage={setCurrentPage} />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
