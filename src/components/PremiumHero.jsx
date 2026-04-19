import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import InteractiveTechMap from './InteractiveTechMap';
import { GitHub, LinkedIn, XIcon, Instagram } from './SocialIcons';

const PremiumHero = ({ title, highlightWord, subtitle, centralIcon, buckets, heroImage, color = "#FF3B2E" }) => {
  // Split title to highlight specific word if provided
  const titleParts = highlightWord ? title.split(highlightWord) : [title, ''];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/AMOLJADHAV9', icon: GitHub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amol-jadhav-818a232a6', icon: LinkedIn },
    { name: 'X', url: 'https://x.com/Amoljadhav70340', icon: XIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/web_coder9552/', icon: Instagram },
  ];


  return (
    <section className="premium-hero">
      <div className="container">
        <div className="hero-flex">
          {/* Left Content */}
          <div className="hero-info">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="status-tag">
                <span className="dot" style={{ background: color }} />
                <span>Available for Projects</span>
              </div>
              
              <h1 className="hero-main-title">
                {titleParts[0]}
                <span className="highlight" style={{ color: color }}>{highlightWord}</span>
                {titleParts[1]}
              </h1>
              
              <p className="hero-description">{subtitle}</p>


              <div className="hero-socials">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
                <a href="mailto:amolj9238@gmail.com" className="social-icon" aria-label="Email"><Mail size={18} /></a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Image or Tech Map) */}
          <div className="hero-visual">
            {heroImage ? (
              <motion.div 
                className="image-showcase"
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="image-frame-glow" style={{ background: `radial-gradient(circle, ${color}30 0%, transparent 70%)` }} />
                <img src={heroImage} alt={title} className="premium-hero-image" />
                <motion.div 
                  className="floating-badge glass"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>Professional Design</span>
                </motion.div>
              </motion.div>
            ) : (
              <InteractiveTechMap 
                centralIcon={centralIcon}
                buckets={buckets}
                color={color}
              />
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .premium-hero {
          padding: 100px 0 60px;
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-flex {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        .status-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          margin-bottom: 25px;
          color: var(--text-muted);
        }

        .status-tag .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .hero-main-title {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 25px;
          letter-spacing: -2px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 35px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }

        .btn-primary {
          padding: 14px 28px;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .btn-primary .arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .arrow {
          transform: translateX(5px);
        }

        .btn-glass {
          padding: 14px 28px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hero-socials {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: var(--surface-color);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          border-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .image-showcase {
          position: relative;
          width: 100%;
          max-width: 550px;
          border-radius: 20px;
          overflow: visible;
          display: flex;
          justify-content: center;
        }

        .image-frame-glow {
          position: absolute;
          width: 140%;
          height: 140%;
          top: -20%;
          left: -20%;
          z-index: -1;
          filter: blur(40px);
          opacity: 0.6;
        }

        .premium-hero-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 
                      0 0 20px rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }

        .floating-badge {
          position: absolute;
          bottom: 20px;
          right: -20px;
          padding: 10px 20px;
          border-radius: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: white;
          z-index: 5;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .floating-badge.glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
        }

        @media (max-width: 1024px) {
          .hero-flex {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            order: 2;
          }
          .hero-visual {
            order: 1;
            margin-bottom: 40px;
          }
          .hero-description {
            margin: 0 auto 35px;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
        }
      `}} />
    </section>
  );
};

export default PremiumHero;
