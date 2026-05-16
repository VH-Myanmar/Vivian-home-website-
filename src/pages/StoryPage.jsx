import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import './StoryPage.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GrowingDemandImage from '../assets/growing-demand.jpg'
import TodayProjectsImage from '../assets/today-projects.jpg'
import BirthVivianHomeImage from '../assets/birth-vivian-home.jpg'
import { useState } from 'react'

export default function StoryPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryImages = t.story.galleryPhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt
  }))

  const handlePhotoClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="story-page">
      <div className="story-container">
        <h1>{t.story.pageTitle}</h1>
        <p className="story-intro">{t.story.intro}</p>

        <div className="story-timeline">
          {/* Chapter 1 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>{t.story.chapter1Title}</h2>
              <div className="timeline-image">
                <img src="/upload/myinka_1.jpeg" alt="Myinka Home - Holiday Cottages" />
              </div>
              <p>{t.story.chapter1Text1}</p>
              <p>{t.story.chapter1Text2}</p>
            </div>
          </div>

          {/* Chapter 2 - Birth of Vivian Home (moved up) */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>{t.story.chapter3Title}</h2>
              <div className="timeline-image">
                <img src="/upload/birth-vivian-home.jpg" alt="Modern Living Room - Birth of Vivian Home" />
              </div>
              <p>{t.story.chapter3Text1}</p>
              <p>{t.story.chapter3Text2}</p>
            </div>
          </div>

          {/* Chapter 3 - Growing Demand (moved down) */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>{t.story.chapter2Title}</h2>
              <div className="timeline-image">
                <img src={GrowingDemandImage} alt="Elegant Living Room - Growing Demand" />
              </div>
              <p>{t.story.chapter2Text1}</p>
              <p>{t.story.chapter2Text2}</p>
            </div>
          </div>

          {/* Chapter 4 - Today (Portrait layout with image left, text right) */}
          <div className="timeline-item portrait-layout">
            <div className="timeline-content portrait-content">
              <div className="portrait-image-container">
                <div className="timeline-image portrait">
                  <img src={TodayProjectsImage} alt="Entryway - Today's Projects" />
                </div>
              </div>
              <div className="portrait-text-container">
                <h2>{t.story.chapter4Title}</h2>
                <p>{t.story.chapter4Text1}</p>
                <p>{t.story.chapter4Text2}</p>
                <p>{t.story.chapter4Text3}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>{t.story.valuesTitle}</h2>
          
          {/* Core Values - 3 small boxes on top in landscape */}
          <div className="core-values-grid">
            {t.story.coreValues.map((value, index) => (
              <div key={index} className="core-value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
          
          {/* Main Values - 4 larger boxes below in 2x2 grid */}
          <div className="values-grid">
            {t.story.values.map((value, index) => (
              <div key={index} className="value-card" data-index={index}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Myinka Home Gallery Section */}
        <div className="myinka-gallery-section">
          <h2>{t.story.myinkaGalleryTitle}</h2>
          <p className="gallery-intro">{t.story.myinkaGalleryIntro}</p>
          <div className="gallery-grid">
            {t.story.galleryPhotos.map((photo, index) => (
              <div key={photo.id} className="gallery-item" data-orientation={photo.orientation}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  onClick={() => handlePhotoClick(index)}
                  style={{ cursor: 'pointer' }}
                />
                <p>{photo.caption}</p>
              </div>
            ))}
          </div>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={galleryImages}
            index={lightboxIndex}
          />
        </div>

        {/* Connection Section */}
        <div className="connection-section">
          <h2>{t.story.connectionTitle}</h2>
          <p>{t.story.connectionText}</p>
        </div>
      </div>
    </div>
  )
}
