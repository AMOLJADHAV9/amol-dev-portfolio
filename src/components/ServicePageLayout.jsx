import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import PremiumHero from './PremiumHero';
import ServiceStats from './ServiceStats';

import { GitHub, LinkedIn, XIcon, Instagram } from './SocialIcons';

const ServicePageLayout = ({ 
  children, 
  title, 
  highlightWord, 
  subtitle, 
  icon: Icon, 
  heroImage = null,
  color = "#FF3B2E",
  buckets = [],
  stats = []
}) => {
  const socialLinks = [
    { name: 'X', url: 'https://x.com/Amoljadhav70340', icon: XIcon },
    { name: 'GitHub', url: 'https://github.com/AMOLJADHAV9', icon: GitHub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amol-jadhav-818a232a6', icon: LinkedIn },
    { name: 'Instagram', url: 'https://www.instagram.com/web_coder9552/', icon: Instagram },
  ];


  return (
    <div className="service-page">
      {/* Navigation Header */}
      <nav className="service-nav">
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="back-link">
              <div className="back-circle">
                <ArrowLeft size={18} />
              </div>
              <span>Back to Studio</span>
            </Link>
            <div className="breadcrumb">
              <span>Services</span>
              <ChevronRight size={14} opacity={0.5} />
              <span className="current-page">{title}</span>
            </div>
          </div>

          <div className="nav-socials">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <motion.a
                key={name}
                href={url}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, color: '#FF3B2E' }}
                className="nav-social-icon"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Premium Hero Section */}
        <PremiumHero 
          title={title}
          highlightWord={highlightWord}
          subtitle={subtitle}
          centralIcon={Icon}
          buckets={buckets}
          heroImage={heroImage}
          color={color}
        />

        {/* Stats Bar */}
        {stats.length > 0 && (
          <ServiceStats stats={stats} color={color} />
        )}

        {/* Content Area */}
        <div className="page-content">
          <div className="container">
            {children}
          </div>
        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .service-page {
          background-color: var(--bg-color);
          color: white;
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* Navigation */
        .service-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 0;
          z-index: 100;
          background: rgba(13, 13, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
        }

        .service-nav .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          color: white;
        }

        .back-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .back-link:hover .back-circle {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateX(-4px);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .current-page {
          color: white;
          font-weight: 600;
        }

        .nav-socials {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .nav-social-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-social-icon:hover {
          color: var(--primary-color);
        }

        .page-content {
          padding-top: 80px;
          padding-bottom: 120px;
        }

        @media (max-width: 768px) {
          .breadcrumb {
            display: none;
          }
        }
      `}} />
    </div>
  );
};

export default ServicePageLayout;
