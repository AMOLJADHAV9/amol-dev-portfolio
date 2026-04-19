import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// X (formerly Twitter)
const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.413-1.267.057-1.647.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.788.306-1.457.715-2.123 1.382-.667.666-1.076 1.335-1.382 2.123-.297.763-.501 1.634-.558 2.911-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.057 1.277.261 2.148.558 2.911.306.788.715 1.457 1.382 2.123.666.667 1.335 1.076 2.123 1.382.763.297 1.634.501 2.911.558 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.277-.057 2.148-.261 2.911-.558.788-.306 1.457-.715 2.123-1.382.667-.666 1.076-1.335 1.382-2.123.297-.763.501-1.634.558-2.911.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.788-.715-1.457-1.382-2.123-.666-.667-1.335-1.076-2.123-1.382-.763-.297-1.634-.501-2.911-.558-1.28-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.44-.645-1.44-1.44.645-1.44 1.441-1.44z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { name: 'X', url: 'https://x.com/Amoljadhav70340', icon: XIcon },
    { name: 'GitHub', url: 'https://github.com/AMOLJADHAV9', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amol-jadhav-818a232a6', icon: LinkedinIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/web_coder9552/', icon: InstagramIcon },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Journey', href: '/#journey' },
    { label: 'Resume', href: '/AMOLJADHAVRESUME.pdf', download: true },
  ];

  const contactInfo = [
    { icon: Mail, label: 'amolj9238@gmail.com' },
    { icon: Phone, label: '+91 9552678123' },
    { icon: MapPin, label: 'Latur, Maharashtra, India' },
  ];

  return (
    <footer className="footer-root">
      <div className="footer-container">

        {/* Top Grid */}
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <h2 className="brand-name">Amol<span className="brand-dot">.</span></h2>
            <p className="brand-tagline">
              Flutter Developer & Full-Stack Engineer crafting immersive,
              cross-platform experiences that leave a lasting impression.
            </p>
            <div className="social-row">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <motion.a
                  key={name}
                  href={url}
                  aria-label={name}
                  whileHover={{ y: -3, color: '#FF3B2E' }}
                  className="social-icon-btn"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="footer-col">
            <h4 className="col-heading">Navigation</h4>
            <ul className="col-list">
              {navLinks.map(({ label, href, download }) => (
                <li key={label}>
                  {href.startsWith('/#') || download ? (
                    <a href={href} download={download} className="col-link">{label}</a>
                  ) : (
                    <Link to={href} className="col-link">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="col-heading">Services</h4>
            <ul className="col-list">
              {[
                { name: 'Mobile App Development', path: '/services/mobile-app-development' },
                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                { name: 'Full-Stack Web', path: '/services/full-stack-web' },
                { name: 'Firebase Integration', path: '/services/firebase-integration' },
                { name: 'API Development', path: '/services/api-development' },
              ].map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="col-link">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="col-heading">Get In Touch</h4>
            <ul className="col-list">
              {contactInfo.map(({ icon: Icon, label }) => (
                <li key={label} className="contact-item">
                  <Icon size={15} className="contact-icon" />
                  <span className="col-link">{label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Amol Jadhav. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={13} className="heart-icon" /> in India
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-root {
          background: var(--surface-color);
          border-top: 1px solid var(--glass-border);
          padding: 80px 0 0;
          min-height: unset;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        /* Brand Column */
        .footer-brand {}

        .brand-name {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -1px;
          text-align: left;
        }

        .brand-dot {
          color: var(--primary-color);
        }

        .brand-tagline {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 320px;
        }

        .social-row {
          display: flex;
          gap: 12px;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-icon-btn:hover {
          background: rgba(255, 59, 46, 0.1);
          border-color: rgba(255, 59, 46, 0.3);
          color: var(--primary-color);
        }

        /* Generic Columns */
        .footer-col {}

        .col-heading {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary-color);
          margin-bottom: 22px;
          text-align: left;
        }

        .col-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }

        .col-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s;
          cursor: pointer;
        }

        .col-link:hover {
          color: var(--text-primary);
        }

        /* Contact items */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .contact-icon {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Divider */
        .footer-divider {
          height: 1px;
          background: var(--glass-border);
          margin-bottom: 28px;
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 32px;
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .made-with {
          color: var(--text-secondary);
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .heart-icon {
          color: var(--primary-color);
          fill: var(--primary-color);
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .brand-name { font-size: 2rem; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
