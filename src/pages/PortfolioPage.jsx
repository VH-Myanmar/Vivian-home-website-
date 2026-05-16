import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import './PortfolioPage.css'

// Lazy Loading Image Component
const LazyImage = ({ src, alt, className, onClick }) => {
  const [imageSrc, setImageSrc] = useState(null)
  const [imageRef, setImageRef] = useState(null)

  useEffect(() => {
    let observer
    if (imageRef && imageSrc === null) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src)
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '50px' }
      )
      observer.observe(imageRef)
    }
    return () => observer && observer.disconnect()
  }, [imageRef, src, imageSrc])

  return (
    <img
      ref={setImageRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E'}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
    />
  )
}

export default function PortfolioPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeGroup, setActiveGroup] = useState('ourDesigns')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [allImages, setAllImages] = useState([])

  const openLightbox = (image, index, images) => {
    setLightboxImage(image)
    setLightboxIndex(index)
    setAllImages(images)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % allImages.length
    setLightboxIndex(nextIndex)
    setLightboxImage(allImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + allImages.length) % allImages.length
    setLightboxIndex(prevIndex)
    setLightboxImage(allImages[prevIndex])
  }

  // Portfolio sections with projects from PDF
  const portfolioSections = [
    {
      id: 'ourDesigns',
      title: language === 'en' ? 'Our Designs (3D design)' : 'ကျွန်ုပ်တို့၏ 3D ဒီဇိုင်းများ',
      projects: [
        {
          id: 1,
          name: 'Maple Cottage',
          images: ['/upload/portfolio_pdf/page-06.webp', '/upload/portfolio_pdf/page-07.webp']
        },
        {
          id: 2,
          name: 'City Villa',
          images: ['/upload/portfolio_pdf/page-08.webp']
        },
        {
          id: 3,
          name: 'B5 (Star City)',
          images: ['/upload/portfolio_pdf/page-09.webp']
        },
        {
          id: 4,
          name: 'Zion Cottage',
          images: ['/upload/portfolio_pdf/page-10.webp']
        },
        {
          id: 5,
          name: 'T2 (Galaxy Tower)',
          images: ['/upload/portfolio_pdf/page-11.webp']
        },
        {
          id: 6,
          name: 'Glory Hills (Kalaw Villa)',
          images: ['/upload/portfolio_pdf/page-12.webp']
        },
        {
          id: 7,
          name: 'B14 (Residence)',
          images: ['/upload/portfolio_pdf/page-13.webp', '/upload/portfolio_pdf/page-14.webp', '/upload/portfolio_pdf/page-15.webp']
        },
        {
          id: 8,
          name: 'Kalaw Villa',
          images: ['/upload/portfolio_pdf/page-16.webp', '/upload/portfolio_pdf/page-17.webp', '/upload/portfolio_pdf/page-18.webp']
        },
        {
          id: 9,
          name: 'Kalaw 010 Residence',
          images: ['/upload/portfolio_pdf/page-19.webp']
        },
        {
          id: 10,
          name: 'Kalaw Villa',
          images: ['/upload/portfolio_pdf/page-20.webp']
        },
        {
          id: 11,
          name: 'ASI Office',
          images: ['/upload/portfolio_pdf/page-21.webp', '/upload/portfolio_pdf/page-22.webp', '/upload/portfolio_pdf/page-23.webp']
        },
        {
          id: 12,
          name: 'Chiang Mai Restaurant',
          images: ['/upload/portfolio_pdf/page-24.webp', '/upload/portfolio_pdf/page-25.webp', '/upload/portfolio_pdf/page-26.webp']
        },
        {
          id: 13,
          name: 'Siam Solar Power Distribution',
          images: ['/upload/portfolio_pdf/page-27.webp', '/upload/portfolio_pdf/page-28.webp', '/upload/portfolio_pdf/page-29.webp']
        },
        {
          id: 14,
          name: 'TLMM',
          images: ['/upload/portfolio_pdf/page-30.webp', '/upload/portfolio_pdf/page-31.webp']
        }
      ]
    },
    {
      id: 'ourInteriorDesigns',
      title: language === 'en' ? 'Our Interior Designs' : 'ကျွန်ုပ်တို့၏ အတွင်းအလှဒီဇိုင်းများ',
      projects: [
        {
          id: 1,
          name: 'Maple Cottage',
          images: ['/upload/portfolio_pdf/page-33.webp', '/upload/portfolio_pdf/page-34.webp', '/upload/portfolio_pdf/page-35.webp']
        },
        {
          id: 2,
          name: 'City Villa (Star City)',
          images: ['/upload/portfolio_pdf/page-36.webp', '/upload/portfolio_pdf/page-37.webp']
        },
        {
          id: 3,
          name: 'B5 (Star City)',
          images: ['/upload/portfolio_pdf/page-38.webp', '/upload/portfolio_pdf/page-39.webp']
        },
        {
          id: 4,
          name: 'City Loft (Star City)',
          images: ['/upload/portfolio_pdf/page-40.webp', '/upload/portfolio_pdf/page-41.webp']
        },
        {
          id: 5,
          name: 'Lavender Hills',
          images: ['/upload/portfolio_pdf/page-42.webp', '/upload/portfolio_pdf/page-43.webp']
        },
        {
          id: 6,
          name: 'Zion Cottage',
          images: ['/upload/portfolio_pdf/page-44.webp', '/upload/portfolio_pdf/page-45.webp']
        },
        {
          id: 7,
          name: 'City Villa (CV 56)',
          images: ['/upload/portfolio_pdf/page-46.webp', '/upload/portfolio_pdf/page-47.webp']
        },
        {
          id: 8,
          name: 'CL 121 (Star City)',
          images: ['/upload/portfolio_pdf/page-48.webp', '/upload/portfolio_pdf/page-49.webp']
        },
        {
          id: 9,
          name: 'Insein Hydepark',
          images: ['/upload/portfolio_pdf/page-50.webp', '/upload/portfolio_pdf/page-51.webp']
        },
        {
          id: 10,
          name: 'North Dagon',
          images: ['/upload/portfolio_pdf/page-52.webp']
        }
      ]
    },
    {
      id: 'holidayHomeProjects',
      title: language === 'en' ? 'Holiday Home Projects' : 'ပန်းခြံအိမ်ပရောဂျက်များ',
      projects: [
        {
          id: 1,
          name: 'K cottage',
          images: ['/upload/portfolio_pdf/page-54.webp', '/upload/portfolio_pdf/page-55.webp', '/upload/portfolio_pdf/page-56.webp', '/upload/portfolio_pdf/page-57.webp']
        },
        {
          id: 2,
          name: 'Blessing',
          images: ['/upload/portfolio_pdf/page-58.webp', '/upload/portfolio_pdf/page-62.webp']
        },
        {
          id: 3,
          name: 'P&N 1',
          images: ['/upload/portfolio_pdf/page-59.webp', '/upload/portfolio_pdf/page-60.webp']
        },
        {
          id: 4,
          name: 'P&N 2',
          images: ['/upload/portfolio_pdf/page-61.webp']
        },
        {
          id: 5,
          name: 'Grace',
          images: ['/upload/portfolio_pdf/page-63.webp']
        },
        {
          id: 6,
          name: 'Hope (Myinka Home)',
          images: ['/upload/portfolio_pdf/page-64.webp']
        },
        {
          id: 7,
          name: 'Faith (Myinka Home)',
          images: ['/upload/portfolio_pdf/page-65.webp']
        },
        {
          id: 8,
          name: 'Myinka Country Tea Garden (Cafeteria Project)',
          images: ['/upload/portfolio_pdf/page-66.webp']
        }
      ]
    }
  ]

  // Category buttons for filtering (kept for future use)
  const categories = [
    { id: 'all', label: language === 'en' ? 'Showroom' : 'Showroom' },
    { id: 'bedrooms', label: language === 'en' ? 'Bedrooms' : 'အိပ်ခန်းများ' },
    { id: 'dining', label: language === 'en' ? 'Dining Rooms' : 'ထမင်းစားခန်းများ' },
    { id: 'kitchens', label: language === 'en' ? 'Kitchens' : 'မီးဖိုခန်းများ' },
    { id: 'bathrooms', label: language === 'en' ? 'Bathrooms' : 'ရေချိုးခန်းများ' },
    { id: 'livingRooms', label: language === 'en' ? 'Living Rooms' : 'ဧည့်ခန်းများ' },
    { id: 'builtIns', label: language === 'en' ? 'Built-ins & Storage' : 'နံရံကပ်ပရိဘောဂများနှင့် သိုလှောင်မှုစနစ်များ' },
    { id: 'staircases', label: language === 'en' ? 'Staircase and Hallways' : 'လှေကားနှင့် လျှောက်လမ်းများ' },
    { id: 'lighting', label: language === 'en' ? 'Decorative Lighting' : 'အိမ်အလှဆင်မီးများ' }
  ]

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>{language === 'en' ? 'Our Portfolio' : 'ကျွန်ုပ်တို့၏ အလုပ်များ'}</h1>
        <p>{language === 'en' ? 'Explore our collection of completed projects showcasing timeless design and meticulous craftsmanship' : 'ကျွန်ုပ်တို့၏ အလုပ်များကို ကြည့်ရှုပါ'}</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Portfolio Group Navigation Buttons */}
      <div className="portfolio-group-filters">
        {portfolioSections.map((section) => (
          <button
            key={section.id}
            className={`group-btn ${activeGroup === section.id ? 'active' : ''}`}
            onClick={() => setActiveGroup(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Portfolio Sections */}
      <div className="portfolio-sections">
        {portfolioSections
          .filter((section) => section.id === activeGroup)
          .map((section) => (
            <div key={section.id} className="portfolio-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="projects-grid">
                {section.projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <h3 className="project-name">{project.name}</h3>
                    <div className="project-images">
                      {project.images.map((image, idx) => (
                        <LazyImage
                          key={idx}
                          src={image}
                          alt={`${project.name} - ${idx + 1}`}
                          className="portfolio-image-clickable"
                          onClick={() => openLightbox(image, idx, project.images)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <div className="lightbox-content">
              <button className="lightbox-nav lightbox-prev" onClick={prevImage}>‹</button>
              <img src={lightboxImage} alt="Lightbox" className="lightbox-image" />
              <button className="lightbox-nav lightbox-next" onClick={nextImage}>›</button>
            </div>
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
