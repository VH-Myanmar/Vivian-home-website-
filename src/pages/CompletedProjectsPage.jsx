import { useState, useEffect } from 'react'
import './CompletedProjectsPage.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

export default function CompletedProjectsPage({ setCurrentPage }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeYear, setActiveYear] = useState(2025)
  const [projectsData, setProjectsData] = useState({})
  const [selectedProject, setSelectedProject] = useState(null)

  // Load projects data from JSON
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/data/projects.json')
        const data = await response.json()
        setProjectsData(data)
      } catch (error) {
        console.error('Error loading projects:', error)
        // Fallback to empty data
        setProjectsData({
          2023: [],
          2024: [],
          2025: [],
          2026: [],
          2027: []
        })
      }
    }
    loadProjects()
  }, [])

  const years = [2023, 2024, 2025, 2026, 2027]
  const currentYearProjects = projectsData[activeYear] || []

  // Get project type label with icon
  const getProjectTypeIcon = (type) => {
    const typeMap = {
      '3D': '🎨',
      'Furniture': '🪑',
      'Reno': '🔨',
      'Renovation': '🔨',
      'Structure': '🏗️',
      'ID': '✨',
      'Curtain': '🪟',
      'Kitchen Renovation': '🍳'
    }
    return typeMap[type] || '📋'
  }

  // Get project type label in current language
  const getProjectTypeLabel = (type) => {
    const typeTranslations = {
      '3D': language === 'en' ? '3D Visualization' : '3D ကြည့်ရှုခွင့်',
      'Furniture': language === 'en' ? 'Furniture' : 'ပရိဒါန်များ',
      'Reno': language === 'en' ? 'Renovation' : 'ပြန်လည်ပြင်ဆင်ခြင်း',
      'Renovation': language === 'en' ? 'Renovation' : 'ပြန်လည်ပြင်ဆင်ခြင်း',
      'Structure': language === 'en' ? 'Structure' : 'ဆောင်းပါးများ',
      'ID': language === 'en' ? 'Interior Design' : 'အတွင်းပိုင်းဒီဇိုင်း',
      'Curtain': language === 'en' ? 'Curtain' : 'ကုလားထည်များ',
      'Kitchen Renovation': language === 'en' ? 'Kitchen Renovation' : 'မီးဖိုးခန်းပြန်လည်ပြင်ဆင်ခြင်း'
    }
    return typeTranslations[type] || type
  }

  return (
    <div className="completed-projects-page">
      <div className="projects-container">
        {/* Page Header */}
        <div className="projects-header">
          <h1>{t.projects?.pageTitle || (language === 'en' ? 'Completed Projects' : 'ပြီးစီးသောလုပ်ငန်းများ')}</h1>
          <p className="projects-intro">
            {t.projects?.intro || (language === 'en' 
              ? 'Explore our collection of completed projects showcasing timeless design and meticulous craftsmanship across Myanmar.'
              : 'ကျွန်ုပ်တို့၏ပြီးစီးသောလုပ်ငန်းများ၏စုစည်းမှုကိုရှာဖွေပါ။')}
          </p>
        </div>

        {/* Year Filter */}
        <div className="year-filter">
          {years.map(year => (
            <button
              key={year}
              className={`year-btn ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Projects by Year */}
        {currentYearProjects.length > 0 ? (
          <div className="projects-section">
            <div className="year-header">
              <h2>{activeYear}</h2>
              <p className="project-count">
                {language === 'en' 
                  ? `${currentYearProjects.length} projects completed`
                  : `${currentYearProjects.length} လုပ်ငန်းများပြီးစီးသည်`}
              </p>
            </div>

            {/* Projects Table/List */}
            <div className="projects-list">
              <div className="projects-table-header">
                <div className="col-serial">{language === 'en' ? 'No.' : 'နံပါတ်'}</div>
                <div className="col-code">{language === 'en' ? 'Code' : 'ကုဒ်'}</div>
                <div className="col-location">{language === 'en' ? 'Location' : 'တည်ရှိရာ'}</div>
                <div className="col-type">{language === 'en' ? 'Project Type' : 'လုပ်ငန်းအမျိုးအစား'}</div>
              </div>

              {currentYearProjects.map((project, index) => (
                <div 
                  key={`${project.code}-${index}`} 
                  className="project-row"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="col-serial">{project.serial}</div>
                  <div className="col-code">
                    <span className="code-badge">{project.code}</span>
                  </div>
                  <div className="col-location">
                    <span className="location-text">{project.location}</span>
                  </div>
                  <div className="col-type">
                    <span className="type-badge">
                      <span className="type-icon">{getProjectTypeIcon(project.type)}</span>
                      {getProjectTypeLabel(project.type)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-projects">
            <p>{language === 'en' 
              ? `No projects completed in ${activeYear} yet. Check back soon!`
              : `${activeYear} ခုနှစ်တွင်ပြီးစီးသောလုပ်ငန်းများမရှိသေးပါ။`}</p>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{selectedProject.code}</h2>
                  <p className="modal-subtitle">{selectedProject.location}</p>
                </div>

                <div className="modal-details">
                  <div className="detail-item">
                    <strong>{language === 'en' ? 'Serial No.' : 'စဉ်စဉ်နံပါတ်'}</strong>
                    <p>{selectedProject.serial}</p>
                  </div>
                  <div className="detail-item">
                    <strong>{language === 'en' ? 'Project Code' : 'လုပ်ငန်းကုဒ်'}</strong>
                    <p>{selectedProject.code}</p>
                  </div>
                  <div className="detail-item">
                    <strong>{language === 'en' ? 'Location' : 'တည်ရှိရာ'}</strong>
                    <p>{selectedProject.location}</p>
                  </div>
                  <div className="detail-item">
                    <strong>{language === 'en' ? 'Project Type' : 'လုပ်ငန်းအမျိုးအစား'}</strong>
                    <p>
                      <span className="type-badge">
                        <span className="type-icon">{getProjectTypeIcon(selectedProject.type)}</span>
                        {getProjectTypeLabel(selectedProject.type)}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="modal-note">
                  <p>{language === 'en' 
                    ? 'Photos and additional details will be added soon by our team.'
                    : 'ဓာတ်ပုံများနှင့်အပြည့်အစုံအသေးစိတ်များကိုကျွန်ုပ်တို့အဖွဲ့မှမကြေးမီထည့်သွင်းပေးမည်ဖြစ်သည်။'}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="projects-cta">
          <h2>{t.projects?.readyToStart || (language === 'en' ? 'Ready to Start Your Project?' : 'သင်၏လုပ်ငန်းကိုစတင်ရန်အဆင်သင့်ですか？')}</h2>
          <p>{t.projects?.letCreate || (language === 'en'
            ? 'Let\'s create something beautiful together. Contact us to discuss your vision.'
            : 'ကျွန်ုပ်တို့သည်အတူတကွလှပသောအရာများကိုဖန်တီးကြပါစို့။')}</p>
          <button className="cta-button" onClick={() => setCurrentPage('contact')}>
            {language === 'en' ? 'Get in Touch' : 'ဆက်သွယ်ရန်'}
          </button>
        </div>
      </div>
    </div>
  )
}
