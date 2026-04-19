import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Trophy } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      title: 'B.Tech in CSE | MPGI SOE Nanded',
      subtitle: 'Batch of 2022-2026',
      description: 'Gaining deep roots in Computer Science and Engineering at a premier institution.',
      icon: GraduationCap,
    },
    {
      title: 'Software Developer Intern | Blustack Fintech',
      subtitle: 'Oct 2026 - Dec 2026',
      description: 'Worked on enterprise-level Flutter apps and stabilized complex navigation systems for fintech solutions.',
      icon: Code2,
    },
    {
      title: 'Innovation8 Hackathon Finalist',
      subtitle: 'Recognized for Creative Problem Solving',
      description: 'Developed a real-time POS solution for street vendors using Flutter and Firebase.',
      icon: Trophy,
    },
    {
      title: 'Hackfusion Hackathon',
      subtitle: 'Sponsored by Google Developer and GitHub',
      description: 'Focused on high-performance app and web development in a fast-paced environment.',
      icon: Trophy,
    },
    {
      title: 'App Developer',
      subtitle: 'Latur Digital Marketing | 2026',
      description: 'Serving as a Flutter Developer, bringing cross-platform expertise to local digital transformation projects.',
      icon: Code2,
    }
  ];

  return (
    <section className="journey" id="journey">
      {/* Background Decor: Geometric Network Left (Isometric/Organic) */}
      <div className="journey-bg-left" aria-hidden="true">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric Grid Top Left */}
          <path d="M100 0 L200 60 L100 120 L0 60 Z" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M200 60 L300 0" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.1" />
          <path d="M100 120 L200 180 L300 120 L200 60" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M0 60 L100 120" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.1" />
          <path d="M0 180 L100 240 L200 180" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.1" />
          
          {/* Connection Lines (Organic Branching) */}
          <path d="M100 350 L180 420 L150 500" stroke="var(--primary-color)" strokeWidth="0.8" strokeOpacity="0.12" />
          <path d="M180 420 L280 400" stroke="var(--primary-color)" strokeWidth="0.8" strokeOpacity="0.1" />
          <path d="M150 500 L80 550" stroke="var(--primary-color)" strokeWidth="0.8" strokeOpacity="0.08" />
          
          {/* Node Circles */}
          <circle cx="100" cy="120" r="4" fill="var(--primary-color)" fillOpacity="0.25" />
          <circle cx="200" cy="60" r="6" fill="var(--primary-color)" fillOpacity="0.2" />
          <circle cx="200" cy="180" r="3" fill="var(--primary-color)" fillOpacity="0.3" />
          <circle cx="100" cy="240" r="5" fill="var(--primary-color)" fillOpacity="0.15" />
          <circle cx="180" cy="420" r="8" fill="var(--primary-color)" fillOpacity="0.18" />
          <circle cx="150" cy="500" r="5" fill="var(--primary-color)" fillOpacity="0.12" />
          <circle cx="280" cy="400" r="3" fill="var(--primary-color)" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Background Decor: Geometric Network Right (Hexagonal Grid) */}
      <div className="journey-bg-right" aria-hidden="true">
        <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Large Vertical Hex Grid Column */}
          <path d="M300 100 L400 160 L400 280 L300 340 L200 280 L200 160 Z" stroke="var(--primary-color)" strokeWidth="1.2" strokeOpacity="0.12" />
          <path d="M300 340 L400 400 L400 520 L300 580 L200 520 L200 400 Z" stroke="var(--primary-color)" strokeWidth="1.2" strokeOpacity="0.08" />
          <path d="M300 100 L300 580" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.05" />
          <path d="M200 160 L300 220 L400 160" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.1" />
          <path d="M200 400 L300 460 L400 400" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.1" />
          
          {/* Branching Neural Lines */}
          <path d="M200 280 L100 320 L50 450" stroke="var(--primary-color)" strokeWidth="1" strokeOpacity="0.1" />
          <path d="M100 320 L120 200" stroke="var(--primary-color)" strokeWidth="0.8" strokeOpacity="0.06" />
          
          {/* Node Circles */}
          <circle cx="300" cy="100" r="5" fill="var(--primary-color)" fillOpacity="0.15" />
          <circle cx="300" cy="340" r="7" fill="var(--primary-color)" fillOpacity="0.25" />
          <circle cx="200" cy="280" r="4" fill="var(--primary-color)" fillOpacity="0.2" />
          <circle cx="100" cy="320" r="5" fill="var(--primary-color)" fillOpacity="0.12" />
          <circle cx="50" cy="450" r="3" fill="var(--primary-color)" fillOpacity="0.1" />
          <circle cx="400" cy="280" r="6" fill="var(--primary-color)" fillOpacity="0.15" />
        </svg>
      </div>

      <div className="journey-bg-glow" aria-hidden="true" />
      {/* Edge shadows */}
      <div className="journey-edge-top" aria-hidden="true" />
      <div className="journey-edge-bottom" aria-hidden="true" />

      <motion.div
        className="journey-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="journey-tagline">Career Path</span>
        <h2 className="journey-title">My Journey</h2>
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {milestones.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-dot glass">
                 <div className="dot-inner"></div>
              </div>
              <motion.div
                whileHover={{ y: -5, borderColor: 'rgba(255,59,46,0.35)' }}
                className="timeline-content glass-card glass"
              >
                <div className="icon-container">
                  <Icon size={24} color="#FF3B2E" strokeWidth={1.5} />
                </div>
                <span className="subtitle">{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .journey {
          padding: 80px 0;
          min-height: unset;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 59, 46, 0.1);
          border-bottom: 1px solid rgba(255, 59, 46, 0.1);
        }

        /* Top edge gradient fade */
        .journey-edge-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, var(--bg-color), transparent);
          z-index: 1;
        }

        .journey-edge-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, var(--bg-color), transparent);
          z-index: 1;
        }

        .journey-bg-left {
          position: absolute;
          top: 0;
          left: -100px;
          width: 300px;
          height: 100%;
          opacity: 0.4;
        }

        .journey-bg-right {
          position: absolute;
          top: 100px;
          right: -100px;
          width: 300px;
          height: 100%;
          opacity: 0.3;
        }

        .journey-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .journey-tagline {
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.75rem;
          display: block;
          margin-bottom: 10px;
        }

        .journey-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 0;
          text-align: center;
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 30px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-color);
          box-shadow: 0 0 10px rgba(255, 59, 46, 0.3);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
          position: relative;
          margin-bottom: 60px;
          width: 100%;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 5px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-color);
          border: 2px solid var(--primary-color);
        }

        .dot-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-color);
        }

        .timeline-content {
          width: 100%;
          padding: 24px;
          position: relative;
          background: var(--surface-color);
          border: 1px solid var(--glass-border) !important;
          border-radius: 20px;
        }

        .timeline-item.left .timeline-content { margin-right: 40px; }
        .timeline-item.right .timeline-content { margin-left: 40px; }

        .icon-container {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 59, 46, 0.08);
          border: 1px solid rgba(255, 59, 46, 0.15);
          border-radius: 10px;
          margin-bottom: 12px;
        }

        .subtitle {
          color: var(--primary-color);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .timeline-content h3 {
          font-size: 1.1rem;
          margin: 8px 0;
          color: white;
        }

        .timeline-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-line { left: 30px; transform: none; }
          .timeline-item { padding-left: 60px !important; padding-right: 0 !important; justify-content: flex-start !important; margin-bottom: 40px; }
          .timeline-item.right { padding-left: 60px !important; }
          .timeline-dot { left: 30px; transform: translateX(-50%); }
          .timeline-content { margin: 0 !important; }
          .journey { padding: 60px 0; }
        }
      `}} />
    </section>
  );
};

export default Journey;
