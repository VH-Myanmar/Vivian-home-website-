import { useState, useEffect } from 'react'
import './Header.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

export default function Header({ currentPage, setCurrentPage }) {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  
  const headerPhotos = [
    { id: 1, src: '/upload/PhotoA.jpg', alt: 'Living room with pink sofa' },
    { id: 2, src: '/upload/PhotoB.jpg', alt: 'Bedroom with elegant lamp' },
    { id: 3, src: '/upload/PhotoC.jpg', alt: 'Seating area with floral cushion' }
  ]
  
  // Auto-rotate photos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % headerPhotos.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="header">
      <div className="header-top" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${headerPhotos[currentPhotoIndex].src}')`
      }}>
        <div className="header-top-content">
          <div className="logo-section">
            <img src="/vivian-logo-correct.webp" alt="Vivian Home" className="logo-image" />
          </div>
        </div>
      </div>
      
      <div className="header-bottom">
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            {t.header.home}
          </button>
          <button 
            className={`nav-link ${currentPage === 'story' ? 'active' : ''}`}
            onClick={() => setCurrentPage('story')}
          >
            {t.header.story}
          </button>
          <button 
            className={`nav-link ${currentPage === 'portfolio' ? 'active' : ''}`}
            onClick={() => setCurrentPage('portfolio')}
          >
            {t.header.portfolio}
          </button>
          <button 
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => setCurrentPage('projects')}
          >
            {t.header.projects}
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
          >
            {t.header.contact}
          </button>
        </nav>

        <div className="header-controls">
          <div className="social-links">
            <a href="https://www.facebook.com/p/Vivian-Home-100083057902507/" target="_blank" rel="noopener noreferrer" className="social-button facebook" title="Facebook">
              <span className="social-label">Facebook</span>
            </a>
                        <a href="https://www.youtube.com/@VivianHome-i9h" target="_blank" rel="noopener noreferrer" className="social-button youtube" title="YouTube">
              <span className="social-label">YouTube</span>
            </a>
            <a href="https://www.tiktok.com/@vivianhome2" target="_blank" rel="noopener noreferrer" className="social-button tiktok" title="TikTok">
              <span className="social-label">TikTok</span>
            </a>
          </div>

          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'မြန်မာ' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}
