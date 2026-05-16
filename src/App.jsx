import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import StoryPage from './pages/StoryPage'
import PortfolioPage from './pages/PortfolioPage'
import CompletedProjectsPage from './pages/CompletedProjectsPage'
import ContactPage from './pages/ContactPage'

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Map URL paths to page names
  const getPageFromPath = (path) => {
    switch(path) {
      case '/story':
        return 'story'
      case '/portfolio':
        return 'portfolio'
      case '/projects':
        return 'projects'
      case '/contact':
        return 'contact'
      default:
        return 'home'
    }
  }
  
  const currentPage = getPageFromPath(location.pathname)
  
  const setCurrentPage = (page) => {
    switch(page) {
      case 'story':
        navigate('/story')
        break
      case 'portfolio':
        navigate('/portfolio')
        break
      case 'projects':
        navigate('/projects')
        break
      case 'contact':
        navigate('/contact')
        break
      default:
        navigate('/')
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/projects" element={<CompletedProjectsPage setCurrentPage={setCurrentPage} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  )
}

export default App
