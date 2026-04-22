import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, ArrowRight } from 'lucide-react';

const About = () => {
  const services = [
    { name: 'Website Development', icon: Monitor },
    { name: 'App Development', icon: Smartphone },
    { name: 'Website Hosting', icon: Cloud },
  ];

  const stats = [
    { value: '10', suffix: '+', label: 'Completed Projects' },
    { value: '100', suffix: '%', label: 'Dedicated commitment' },
    { value: '1.5', suffix: '+', label: 'Years of experience' },
  ];

  return (
    <section id="about" className="about-v3">
      {/* Background Decor: Terminal Grid */}
      <div className="about-bg-grid" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="url(#smallGrid)"/>
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="rgba(255,59,46,0.06)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Accent Coordinates */}
          <text x="50" y="100" fill="rgba(255,59,46,0.1)" fontFamily="var(--font-mono)" fontSize="10">0xAF 42.1</text>
          <text x="90%" y="80%" fill="rgba(255,59,46,0.1)" fontFamily="var(--font-mono)" fontSize="10">SYS_INT 0.0</text>
        </svg>
      </div>

      <div className="container">
        <div className="about-layout-split">

          {/* Left Column: Services & Timeline Line */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="services-vertical"
          >
            <div className="vertical-line-accent">
              <div className="dot top" />
              <div className="dot mid" />
              <div className="dot bot" />
            </div>

            <div className="service-items">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="service-row"
                  >
                    <div className="icon-box">
                      <Icon size={22} color="#FF3B2E" strokeWidth={1.5} />
                    </div>
                    <div className="service-info">
                      <span className="service-name">{service.name}</span>
                      <ArrowRight size={16} className="arrow-icon" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="narrative-content"
          >
            <span className="section-label">About me</span>
            <h2 className="title-about">Passionate about <span className="red-word">Building</span> Things</h2>
            <p className="description-p">
              I am a specialized <strong>Full Stack Developer</strong> with a background in
              high-performance web and mobile architecture. My journey is defined by a passion for
              merging pixel-perfect UI with robust, scalable code. I believe in creating products
              that don't just solve problems, but provide an immersive user experience.
            </p>

            <div className="about-cta">
              <a href="/AMOLJADHAVRESUME.pdf" download className="btn-resume-about">
                Download CV <ArrowRight size={16} />
              </a>
            </div>

            <div className="stats-row">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="stat-unit"
                >
                  <span className="stat-val">
                    {stat.value}<span className="accent-plus">{stat.suffix}</span>
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-v3 {
          padding: 80px 0;
          position: relative;
          color: white;
          min-height: unset;
          overflow: hidden;
        }

        .about-bg-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.5;
        }

        .about-layout-split {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Column Styling */
        .services-vertical {
          display: flex;
          gap: 30px;
          position: relative;
        }

        .vertical-line-accent {
          width: 2px;
          background: rgba(255, 255, 255, 0.06);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px 0;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 50%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 10px var(--primary-color);
        }
        .dot.top { top: 12%; }
        .dot.mid { top: 50%; }
        .dot.bot { bottom: 12%; }

        .service-items {
          display: flex;
          flex-direction: column;
          gap: 32px;
          flex: 1;
        }

        .service-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-color);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .service-row:hover .icon-box {
          border-color: rgba(255, 59, 46, 0.4);
          box-shadow: 0 0 15px rgba(255, 59, 46, 0.15);
        }

        .service-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
        }

        .service-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .service-row:hover .service-name {
          color: white;
        }

        .arrow-icon {
          color: var(--primary-color);
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          transform: translateX(-5px);
        }

        .service-row:hover .arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }

        /* Right Column Styling */
        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--primary-color);
          display: block;
          margin-bottom: 12px;
        }

        .title-about {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
          text-align: left;
        }

        .red-word {
          color: var(--primary-color);
        }

        .description-p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 560px;
        }

        .description-p strong {
          color: white;
          font-weight: 700;
        }

        .about-cta {
          margin-bottom: 50px;
        }

        .btn-resume-about {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 59, 46, 0.1);
          border: 1px solid rgba(255, 59, 46, 0.3);
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .btn-resume-about:hover {
          background: var(--primary-color);
          box-shadow: 0 10px 20px rgba(255, 59, 46, 0.2);
          transform: translateY(-2px);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat-unit {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 15px;
          background: var(--surface-color);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          transition: border-color 0.3s;
        }

        .stat-unit:hover {
          border-color: rgba(255, 59, 46, 0.3);
        }

        .stat-val {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1;
        }

        .accent-plus {
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: capitalize;
          line-height: 1.3;
        }

        @media (max-width: 968px) {
          .about-layout-split {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .title-about { text-align: center; }
          .description-p { text-align: center; margin-inline: auto; }
          .section-label { text-align: center; }
          .about-cta { text-align: center; }
          .services-vertical { justify-content: center; }
          .stats-row { gap: 15px; }
        }

        @media (max-width: 480px) {
          .stats-row {
            grid-template-columns: 1fr;
          }
          .stat-unit {
            text-align: center;
          }
        }
      `}} />
    </section>
  );
};

export default About;
