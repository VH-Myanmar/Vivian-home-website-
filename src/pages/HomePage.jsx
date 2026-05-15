import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import './HomePage.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Zoom } from 'yet-another-react-lightbox/plugins'
import InteriorDesignIcon from '../assets/icons/interior-design.png'
import FurnitureSelectionIcon from '../assets/icons/furniture-selection.png'
import StylingConsultationIcon from '../assets/icons/styling-consultation.png'
import HomeStagingIcon from '../assets/icons/home-staging.png'
import FurnitureSelectionImage from '../assets/furniture-selection.jpg'
import DressingRoomImage from '../assets/dressing-room-design.png'
import InteriorDesignImage from '../assets/interior-design.png'
import StylingConsultationImage from '../assets/styling-consultation.jpg'
import HomeStagingImage from '../assets/home-staging.jpg'
import ModernBathroomImage from '../assets/modern-bathroom.jpg'

export default function HomePage({ setCurrentPage }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [facebookPosts, setFacebookPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [servicesLightboxOpen, setServicesLightboxOpen] = useState(false)
  const [servicesLightboxImage, setServicesLightboxImage] = useState(null)

  useEffect(() => {
    // Using actual project photos from Vivian Home's portfolio
    const mockPosts = [
      {
        id: 1,
        source: 'Facebook',
        title: language === 'en' ? 'Master Bedroom Elegance' : 'အိပ်ခန်း အလှတည်ဆောင်ရွက်မှု',
        description: language === 'en' 
          ? 'Featuring our signature sage green walls with dusty rose accents and premium wood finishes. A perfect blend of timeless design and modern comfort.'
          : 'ကျွန်ုပ်တို့၏လက်ခြင်းအစိမ်းရောင်နံရံများနှင့်အုံးရောင်အလှတည်ဆောင်ရွက်မှုများ။ အချိန်မဆိုဒီဇိုင်းနှင့်ခေတ်သစ်အဆင်ပြေမှု၏ပြီးပြည့်စုံသောမျှတမှု။',
        image: '/upload/4603c7c09a358230b9aa52af23c23ce2.jpeg',
        date: language === 'en' ? '2 days ago' : '၂ ရက်အရင်'
      },
      {
        id: 2,
        source: 'Facebook',
        title: language === 'en' ? 'Sophisticated Dressing Room Design' : 'ရှုပ်ထွေးသောအဝတ်အစားခန်း ဒီဇိုင်း',
        description: language === 'en'
          ? 'Custom cabinetry with warm wood tones and elegant lighting. Every detail carefully curated for functionality and beauty.'
          : 'အပူပြင်ဆင်သောသစ်ကြွေအရောင်နှင့်လှပသောအလင်းအရောင်ရှိသောလိုအပ်သောအီတုံ။ တစ်ခုခုတစ်ခြင်းတွင်လုပ်ဆောင်ချက်နှင့်လှပမှုအတွက်သေချာစွာစုစည်းထားသည်။',
        image: DressingRoomImage,
        date: language === 'en' ? '5 days ago' : '၅ ရက်အရင်'
      },
      {
        id: 3,
        source: 'Facebook',
        title: language === 'en' ? 'Modern Bathroom Transformation' : 'ခေတ်သစ် အရေအခွံခန်း ပြောင်းလဲမှု',
        description: language === 'en'
          ? 'Serene spa-like atmosphere with soft green walls, white subway tiles, and premium fixtures. Tranquility in every detail.'
          : 'နူးညံ့သောအစိမ်းရောင်နံရံ၊အဖြူရောင်ခြင်းတြင်းပိုက်များနှင့်အဆင့်မြင့်ကိရိယာများရှိသောအေးမြ�ုတ်သောစပါတွင်ဆန္ဒ။ တစ်ခုခုတစ်ခြင်းတွင်အေးမြတ်မှု။',
        image: ModernBathroomImage,
        date: language === 'en' ? '1 week ago' : '၁ အပတ်အရင်'
      }
    ]
    
    setFacebookPosts(mockPosts)
    setLoading(false)
  }, [language])

  return (
    <div className="home-page">

      {/* Services Section */}
      <section className="services">
        <h2>{t.home.servicesTitle}</h2>
        <div className="services-grid">
          {t.home.services.map((service, index) => {
            const serviceImages = [
              InteriorDesignImage,  // Interior Design
              FurnitureSelectionImage,  // Furniture Selection
              StylingConsultationImage,  // Styling Consultation
              HomeStagingImage   // Home Staging
            ]
            const serviceIcons = [
              '/upload/Interiordesign.jpg',  // Interior Design
              '/upload/Furnitureselection.jpg',  // Furniture Selection
              '/upload/Stylingconsultation.jpg',  // Styling Consultation
              '/upload/Homestaging.jpg'   // Home Staging
            ]
            // For Styling Consultation (index 2) and Home Staging (index 3), show image below text
            const isPortraitCard = index === 2 || index === 3
            
            return (
              <div key={index} className={`service-card ${isPortraitCard ? 'portrait-image' : ''}`}>
                {!isPortraitCard && (
                  <div className="service-image" onClick={() => {
                    setServicesLightboxImage(serviceImages[index])
                    setServicesLightboxOpen(true)
                  }} style={{ cursor: 'pointer' }}>
                    <img src={serviceImages[index]} alt={service.title} />
                  </div>
                )}
                <div className="service-content">
                  <div className="service-header">
                    <div className="service-icon">
                      <img src={serviceIcons[index]} alt={service.title} />
                    </div>
                    <div className="service-text">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
                {isPortraitCard && (
                  <div className="service-image portrait" onClick={() => {
                    setServicesLightboxImage(serviceImages[index])
                    setServicesLightboxOpen(true)
                  }} style={{ cursor: 'pointer' }}>
                    <img src={serviceImages[index]} alt={service.title} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="services-cta">
          <button 
            className="see-all-services-btn" 
            onClick={() => setCurrentPage('contact')}
          >
            {t.home.seeAllServices}
          </button>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="live-feed">
        <h2>{t.home.liveUpdatesTitle}</h2>
        <p className="feed-subtitle">{t.home.liveUpdatesSubtitle}</p>
        
        {loading ? (
          <div className="loading">{language === 'en' ? 'Loading latest updates...' : 'နောက်ဆုံးသတင်းများ ဆွဲထုတ်နေသည်...'}</div>
        ) : (
          <div className="feed-grid">
            {facebookPosts.map(post => (
              <div key={post.id} className="feed-card">
                <div className="feed-image" onClick={() => {
                  setLightboxImage(post.image)
                  setLightboxOpen(true)
                }} style={{ cursor: 'pointer' }}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="feed-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className="feed-date">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImage ? [{ src: lightboxImage, alt: 'Project Photo' }] : []}
          index={0}
          toolbar={false}
          on={{ view: () => {} }}
        />

        <div className="feed-cta">
          <p>{t.home.followUs}</p>
          <div className="social-buttons">
            <a href="https://www.facebook.com/p/Vivian-Home-100083057902507/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              {t.home.facebook}
            </a>
            <a href="https://www.youtube.com/@VivianHome-i9h" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
              {t.home.youtube}
            </a>
            <a href="https://www.tiktok.com/@vivianhome2" target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
              {t.home.tiktok}
            </a>
          </div>
        </div>
      </section>

      {/* Services Lightbox */}
      <Lightbox
        open={servicesLightboxOpen}
        close={() => setServicesLightboxOpen(false)}
        slides={servicesLightboxImage ? [{ src: servicesLightboxImage, alt: 'Service Photo' }] : []}
        index={0}
        toolbar={false}
        on={{ view: () => {} }}
      />

      {/* Connection to Myinka */}
      <section className="myinka-connection">
        <h2>{t.home.myinkaTitle}</h2>
        <div className="connection-content">
          <div className="connection-text">
            <p>{t.home.myinkaText1}</p>
            <p>{t.home.myinkaText2}</p>
            <a href="https://www.facebook.com/p/Myinka-Home-Holiday-Cottages-100081189316151/" target="_blank" rel="noopener noreferrer" className="myinka-link">
              {t.home.visitMyinka}
            </a>
          </div>
          <div className="connection-image">
            <img src="/upload/myinka_landscape.jpeg" alt="Myinka Village, Oh See Mountain" className="myinka-showcase-image" />
          </div>
        </div>
      </section>
    </div>
  )
}
