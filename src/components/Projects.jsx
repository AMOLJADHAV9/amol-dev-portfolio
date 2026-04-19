import React from 'react';
import { motion } from 'framer-motion';
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
      link: '#'
    },
    {
      title: 'ElectroMart',
      category: 'E-Commerce Platform',
      description: 'Full-stack platform for robotics and electronic components, featuring advanced filtering and secure payment integration.',
      image: electroMartImg,
      tags: ['React', 'MERN', 'Redux'],
      link: '#'
    },
    {
      title: 'Smart Career Advisor AI',
      category: 'Machine Learning',
      description: 'ML-based resume matching system that provides personalized career roadmaps and skill gap analysis.',
      image: careerAdvisorImg,
      tags: ['Python', 'Machine Learning', 'React'],
      link: '#'
    },
    {
      title: 'Fresh Fold (DryClean)',
      category: 'Service Management',
      description: 'Comprehensive dry-cleaning web platform featuring service booking, real-time order tracking, and an integrated admin dashboard.',
      image: dryCleanImg,
      tags: ['React', 'Node.js', 'Payments'],
      link: '#'
    },
    {
      title: 'Book My Appointment',
      category: 'Healthcare App',
      description: 'Firebase-powered doctor appointment system with live consulting chats and secure call streaming capabilities.',
      image: bookDoctorImg,
      tags: ['Flutter', 'Firebase', 'WebRTC'],
      link: '#'
    },
    {
      title: 'MedInvo Management',
      category: 'Billing & Inventory',
      description: 'Smart medical inventory management system with automated billing and stock lifecycle tracking for pharmacies.',
      image: medInvoImg,
      tags: ['MERN', 'Dashboard', 'Analytics'],
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      {/* Background Decor: Blueprint Grid */}
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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
          >
            <div className="card-image-wrapper">
              <div 
                className="card-image" 
                style={{ 
                  backgroundImage: `url(${project.image})`
                }} 
              >
                <div className="card-image-gradient"></div>
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
                <motion.div 
                  className="view-link"
                  whileHover={{ x: 5 }}
                >
                  View Studio →
                </motion.div>
              </div>
            </div>

            {/* Subtle Inner Glow */}
            <div className="inner-glow" />
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects {
          padding: 80px 0;
          position: relative;
          background: #0D0D0F;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
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
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: -1px;
        }

        .section-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .projects {
            padding: 60px 0;
          }
          .card-content h3 {
            font-size: 1.25rem;
          }
        }

        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 59, 46, 0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 
                      0 0 40px rgba(255, 59, 46, 0.1);
        }

        .card-image-wrapper {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #151518;
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: top center;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .card-image {
          transform: scale(1.08);
        }

        .card-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(13, 13, 15, 0.6));
        }

        .card-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 6px 14px;
          background: rgba(13, 13, 15, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: white;
          z-index: 2;
        }

        .card-content {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .project-card:hover h3 {
          color: var(--primary-color);
        }

        .card-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
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
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tag-pill {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-right: 12px;
        }

        .tag-pill:not(:last-child)::after {
          content: '•';
          margin-left: 8px;
          opacity: 0.4;
        }

        .view-link {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--primary-color);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .inner-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, rgba(255, 59, 46, 0.03), transparent);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }

        .project-card:hover .inner-glow {
          opacity: 1;
        }
      `}} />
    </section>
  );
};

export default Projects;
