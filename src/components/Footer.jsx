import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import './Footer.css'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Vivian Home</h3>
          <p>{t.header.tagline}</p>
          <p className="location">{language === 'en' ? 'Yangon, Myanmar' : 'ရန်ကုန်၊ မြန်မာ'}</p>
        </div>

        <div className="footer-section">
          <h3>{language === 'en' ? 'Contact' : 'ဆက်သွယ်ရန်'}</h3>
          <p>
            <a href="tel:+959960707834">+95 9 960 707834</a>
          </p>
          <p>
            <a href="mailto:info@vivianhomemyanmar.com">info@vivianhomemyanmar.com</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>{t.footer.followUs}</h3>
          <div className="footer-social">
            <a href="https://www.facebook.com/p/Vivian-Home-100083057902507/" target="_blank" rel="noopener noreferrer">{t.home.facebook}</a>
            <a href="https://www.youtube.com/@VivianHome-i9h" target="_blank" rel="noopener noreferrer">{t.home.youtube}</a>
            <a href="https://www.tiktok.com/@vivianhome2" target="_blank" rel="noopener noreferrer">{t.home.tiktok}</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{language === 'en' ? 'Related' : ''}</h3>
          <p>
            <a href="https://www.facebook.com/p/Myinka-Home-Holiday-Cottages-100081189316151/" target="_blank" rel="noopener noreferrer" className="related-button">
              {language === 'en' ? 'Myinka Home - Holiday Cottages' : 'မြင်းကအိမ် (အပန်းဖြေအိမ်လေး) ကို ကြည့်ရှုရန်'}
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Vivian Home. {t.footer.allRights}.</p>
      </div>
    </footer>
  )
}
