import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import './StoryPage.css'
import GrowingDemandImage from '../assets/growing-demand.jpg'
import TodayProjectsImage from '../assets/today-projects.jpg'
import BirthVivianHomeImage from '../assets/birth-vivian-home.jpg'

export default function StoryPage() {
  const { language } = useLanguage()
  const t = translations[language]

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
                <img src={BirthVivianHomeImage} alt="Modern Living Room - Birth of Vivian Home" />
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
          <div className="values-grid">
            {t.story.values.map((value, index) => (
              <div key={index} className="value-card" data-index={index}>
                {!value.isValuesList && <h3>{value.title}</h3>}
                {value.isValuesList ? (
                  <div className="values-list">
                    {value.values.map((v, i) => (
                      <div key={i} className="value-item">{v}</div>
                    ))}
                  </div>
                ) : (
                  <p>{value.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Myinka Home Gallery Section */}
        <div className="myinka-gallery-section">
          <h2>{t.story.myinkaGalleryTitle}</h2>
          <p className="gallery-intro">{t.story.myinkaGalleryIntro}</p>
          <div className="gallery-grid">
            {t.story.galleryPhotos.map((photo) => (
              <div key={photo.id} className="gallery-item">
                <img src={photo.src} alt={photo.alt} />
                <p>{photo.caption}</p>
              </div>
            ))}
          </div>
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
