import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';
import './ContactPage.css';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>{t.contact.pageTitle}</h1>
          <p>{t.contact.intro}</p>
        </div>

        <div className="contact-content">
          {/* Contact Information Section */}
          <div className="contact-info">
            <h2 style={{ display: 'none' }}>Contact Information</h2>
            
            <div className="info-card">
              <h3>{t.contact.phone}</h3>
              <p>
                <a href="tel:+959960707834">{t.contact.phoneNumber}</a>
              </p>
              <p className="info-description">{language === 'en' ? 'Call us during business hours for immediate assistance.' : 'သိရှိလိုသည်များ ချက်ချင်းအကြောင်းပြန်နိုင်ရန် လုပ်ငန်းအချိန်အတွင်း ဖုန်းဆက်သွယ်မေးမြန်းနိုင်ပါသည်။'}</p>
            </div>

            <div className="info-card">
              <h3>{t.contact.email}</h3>
              <p>
                <a href="mailto:info@vivianhomemyanmar.com">{t.contact.emailAddress}</a>
              </p>
              <p className="info-description">{language === 'en' ? 'Send us an email and we\'ll respond within 24 hours.' : 'အီးမေးလ်လည်းရေးသားနိုင်ပါသည်။'}</p>
            </div>

            <div className="info-card">
              <h3>{t.contact.location}</h3>
              <p>{t.contact.locationText}</p>
              <p className="info-description">{language === 'en' ? 'Visit our showroom to see our collections in person.' : 'ကျွန်ုပ်တို့၏ပြပွဲခန်းသို့လည်ပတ်ကြည့်ပါ။'}</p>
            </div>

            <div className="info-card">
              <h3>{t.footer.followUs}</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/p/Vivian-Home-100083057902507/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://www.youtube.com/@vivianhomemyanmar" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="https://www.tiktok.com/@vivianhomemyanmar" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok"></i> TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h2>{t.contact.sendMessage}</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">{t.contact.name}</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.emailInput}</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="projectType">{t.contact.projectType}</label>
                <select id="projectType" name="projectType" required>
                  <option value="">
                    {language === 'en' ? 'Select a service' : 'ဝန်ဆောင်မှုရွေးချယ်ပါ'}
                  </option>
                  {t.contact.services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.message}</label>
                <textarea id="message" name="message" rows="5" placeholder={language === 'en' ? 'Tell us about your project...' : 'လူကြီးမင်းတို့ ဖန်တီးလိုသည့် အိမ်/နေရာအကြောင်း ပြောပြပေးပါ'} required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>

        {/* Services Offered Section */}
        <div className="services-section">
          <h2>{t.contact.servicesOfferedTitle}</h2>
          <div className="services-grid">
            {t.contact.services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
