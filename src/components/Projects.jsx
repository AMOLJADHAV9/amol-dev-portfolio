import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import medInvoImg from '../assets/inventory app and billing imag.png';
import bookDoctorImg from '../assets/book my doctor.png';
import restaurantBillingImg from '../assets/ChatGPT Image Apr 18, 2026, 12_58_45 PM.png';
import electroMartImg from '../assets/elctronic app.png';
import careerAdvisorImg from '../assets/smart carrier advizor.png';
import dryCleanImg from '../assets/dryclean.png';

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Billing POS App',
      category: 'Restaurant Management',
      description: 'Comprehensive restaurant management and billing system with real-time stock tracking and multi-terminal support.',
      image: restaurantBillingImg,
      tags: ['Flutter', 'Firebase', 'Node.js'],
      link: '/services/mobile-app-development',
      color: '#FF3B2E'
    },
    {
      title: 'ElectroMart',
      category: 'E-Commerce Platform',
      description: 'Full-stack platform for robotics and electronic components, featuring advanced filtering and secure payment integration.',
      image: electroMartImg,
      tags: ['React', 'MERN', 'Redux'],
      link: '/services/full-stack-web',
      color: '#00D1FF'
    },
    {
      title: 'Smart Career Advisor AI',
      category: 'Machine Learning',
      description: 'ML-based resume matching system that provides personalized career roadmaps and skill gap analysis.',
      image: careerAdvisorImg,
      tags: ['Python', 'Machine Learning', 'React'],
      link: '/services/api-development',
      color: '#FFD600'
    },
    {
      title: 'Fresh Fold (DryClean)',
      category: 'Service Management',
      description: 'Comprehensive dry-cleaning web platform featuring service booking, real-time order tracking, and an integrated admin dashboard.',
      image: dryCleanImg,
      tags: ['React', 'Node.js', 'Payments'],
      link: '/services/full-stack-web',
      color: '#00FF94'
    },
    {
      title: 'Book My Appointment',
      category: 'Healthcare App',
      description: 'Firebase-powered doctor appointment system with live consulting chats and secure call streaming capabilities.',
      image: bookDoctorImg,
      tags: ['Flutter', 'Firebase', 'WebRTC'],
      link: '/services/firebase-integration',
      color: '#FF00C7'
    },
    {
      title: 'MedInvo Management',
      category: 'Billing & Inventory',
      description: 'Smart medical inventory management system with automated billing and stock lifecycle tracking for pharmacies.',
      image: medInvoImg,
      tags: ['MERN', 'Dashboard', 'Analytics'],
      link: '/services/api-development',
      color: '#7000FF'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-bg-blueprint" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="rgba(255,59,46,0.12)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-subtitle">Case Studies</span>
        <h2>High-Impact Projects</h2>
        <p className="section-desc">A curated selection of industrial-grade applications built with modern stacks.</p>
      </motion.div>

      <div className="projects-grid container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            style={{ '--project-color': project.color }}
          >
            <div className="card-image-wrapper">
              <div 
                className="card-image" 
                style={{ 
                  backgroundImage: `url(${project.image})`
                }} 
              >
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-badge">{project.category}</div>
            </div>
            
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="card-footer">
                <div className="card-tags">
                  {project.tags.slice(0, 3).map((tag, tIndex) => (
                    <span key={tIndex} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <Link to={project.link} className="view-link-wrapper">
                  <motion.span 
                    className="view-link"
                    whileHover={{ x: 5 }}
                  >
                    View Studio →
                  </motion.span>
                </Link>
              </div>
            </div>

            <div className="inner-glow" />
            <div className="card-border-accent" />
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects {
          padding: 120px 0;
          position: relative;
          background: #0D0D0F;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 0 5%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-inline: auto;
          padding: 0 20px;
        }

        .section-subtitle {
          color: var(--primary-color);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.75rem;
          margin-bottom: 12px;
          display: block;
        }

        .section-header h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: -1.5px;
          color: white;
        }

        .section-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .projects {
            padding: 80px 0;
          }
        }

        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--project-color);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 
                      0 0 30px rgba(var(--project-color-rgb), 0.1);
          transform: translateY(-12px);
        }

        .card-image-wrapper {
          position: relative;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: #000;
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0.85) contrast(1.1);
        }

        .project-card:hover .card-image {
          transform: scale(1.1) rotate(1deg);
          filter: brightness(1);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, 
            rgba(13, 13, 15, 0) 0%, 
            rgba(13, 13, 15, 0.2) 50%,
            rgba(13, 13, 15, 0.8) 100%
          );
          z-index: 1;
        }

        .card-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          padding: 6px 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: white;
          z-index: 2;
        }

        .card-content {
          padding: 35px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: linear-gradient(to bottom, rgba(255,255,255,0.01), transparent);
        }

        .card-content h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: -0.5px;
          transition: color 0.3s ease;
          color: white;
        }

        .project-card:hover h3 {
          color: var(--project-color);
        }

        .card-content p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .tag-pill {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-right: 15px;
          opacity: 0.6;
        }

        .view-link-wrapper {
          text-decoration: none;
        }

        .view-link {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--project-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .inner-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.03), transparent 60%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.6s ease;
        }

        .card-border-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--project-color);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .inner-glow { opacity: 1; }
        .project-card:hover .card-border-accent { width: 100%; }

        .projects-bg-blueprint {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.6;
        }
      `}} />
    </section>
  );
};

export default Projects;
