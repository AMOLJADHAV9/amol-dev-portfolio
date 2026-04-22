import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';            
import { Smartphone, Layout, Code, Flame, Cpu, ChevronDown, Menu, X } from 'lucide-react';
import amolProfile from '../assets/amol-img3.png';

const Hero = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const skills = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

  const services = [
    { name: 'Mobile App Development', path: '/services/mobile-app-development', icon: Smartphone },
    { name: 'UI/UX Design', path: '/services/ui-ux-design', icon: Layout },
    { name: 'Full Stack Web', path: '/services/full-stack-web', icon: Code },
    { name: 'Firebase Integration', path: '/services/firebase-integration', icon: Flame },
    { name: 'API Development', path: '/services/api-development', icon: Cpu },
  ];

  // Cinematic entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const revealImageVariants = {
    hidden: { opacity: 0, scale: 0.7, filter: 'blur(25px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      } 
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="hero-studio">
      {/* Top Header Navigation */}
      <nav className={`studio-header ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          <div className="brand">Amol Jadhav</div>
          
          {/* Desktop Nav */}
          <div className="nav-links desktop-only">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            {/* Services Dropdown (simplified for desktop) */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className={`services-trigger ${isServicesOpen ? 'active' : ''}`}>
                Services <ChevronDown size={14} />
              </div>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div className="services-dropdown glass">
                    <div className="dropdown-grid">
                      {services.map((item) => (
                        <Link key={item.path} to={item.path} className="dropdown-item">
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contacts</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-only menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-nav-overlay"
            >
              <div className="mobile-links">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#journey" onClick={() => setIsMobileMenuOpen(false)}>Journey</a>
                <a href="/AMOLJADHAVRESUME.pdf" download onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Hero Body */}
      <div className="hero-body container">
        {/* Ambient Code Background Snippets */}
        <div className="ambient-code-layer" aria-hidden="true">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.03, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="code-snippet snippet-tl"
          >
            <code>const amol = &#123; role: 'Developer', location: 'India' &#125;;</code>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.03, x: 0 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="code-snippet snippet-br"
          >
            <code>function renderPortfolio() &#123; return &lt;Success /&gt;; &#125;</code>
          </motion.div>
        </div>

        <div className="split-layout">
          
          {/* Left: Branding & CTA */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="content-left"
          >
            <motion.div variants={slideLeftVariants} className="hello-row">
              <span className="h-line" />
              <div className="hello-text mono-text">Hello<span className="red-dot">.</span></div>
            </motion.div>
            
            <motion.h2 variants={slideLeftVariants} className="iam-name">
              <span className="code-bracket">&lt;</span>I'm Amol<span className="code-bracket"> /&gt;</span>
            </motion.h2>
            
            <motion.h1 variants={slideRightVariants} className="hero-headline">
              Full Stack <br /> Developer
            </motion.h1>

            <motion.div variants={fadeInVariants} className="cta-row">
              <a href="#contact" className="btn-filled">
                Got a project?
              </a>
              <a href="/AMOLJADHAVRESUME.pdf" download className="btn-outline">
                My resume
              </a>
            </motion.div>

            {/* Left Chevron Marker */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="chevron-marker left-chevron"
            >
              <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="45,10 15,40 45,70" stroke="#FF3B2E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <polyline points="30,10 0,40 30,70" stroke="#FF3B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right: Circle Profile */}
          <div className="visual-right">
            {/* Red glow background behind profile */}
            <div className="profile-bg-glow" />

            <motion.div 
              variants={revealImageVariants}
              initial="hidden"
              animate="visible"
              className="profile-circle-container"
            >
              {/* Outer dim circle */}
              <div className="circle-outer-ring" />
              {/* Bold bright red ring */}
              <div className="circle-red-ring" />
              {/* Profile image, full bleed, no dark mask */}
              <div className="circle-img-frame">
                <img src={amolProfile} alt="Amol" className="static-profile-image" />
              </div>

              {/* Right Chevron Marker */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="chevron-marker right-chevron"
              >
                <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="15,10 45,40 15,70" stroke="#FF3B2E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <polyline points="30,10 60,40 30,70" stroke="#FF3B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Skill Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="skill-strip-bottom"
      >
        <div className="strip-container">
          {skills.map((skill, index) => (
            <React.Fragment key={skill}>
              <span className="strip-item">{skill}</span>
              {index < skills.length - 1 && <span className="strip-pipe">|</span>}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-studio {
          min-height: 100vh;
          width: 100%;
          background: var(--bg-color);
          color: white;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 0 5%;
        }

        /* Header Styling */
        .studio-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 40px 0;
          z-index: 100;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 35px;
          align-items: center;
        }

        .nav-links a, .services-trigger {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-links a:hover, .services-trigger:hover, .services-trigger.active {
          color: #FF3B2E;
        }

        /* Dropdown Styling */
        .nav-item-dropdown {
          position: relative;
          padding: 10px 0;
        }

        .chevron {
          transition: transform 0.3s ease;
          opacity: 0.5;
        }

        .chevron.rotate {
          transform: rotate(180deg);
          opacity: 1;
        }

        .services-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          background: rgba(13, 13, 15, 0.95);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 15px;
          margin-top: 5px;
          z-index: 1000;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .dropdown-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 15px;
          border-radius: 10px;
          text-decoration: none;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(255, 59, 46, 0.08);
          color: white;
        }

        .item-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          transition: all 0.2s ease;
        }

        .dropdown-item:hover .item-icon {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }

        .dropdown-item span {
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Hero Body */
        .hero-body {
          flex: 1;
          display: flex;
          align-items: center; /* Desktop remains centered */
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
        }

        /* Left Side Content */
        .hello-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }

        .h-line {
          width: 50px;
          height: 1px;
          background: #FF3B2E;
        }

        .hello-text {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          text-transform: capitalize;
        }

        .mono-text {
          font-family: var(--font-mono);
          letter-spacing: -1px;
        }

        .code-bracket {
          color: var(--primary-color);
          opacity: 0.5;
          font-family: var(--font-mono);
          margin: 0 10px;
        }

        .red-dot {
          color: #FF3B2E;
        }

        .iam-name {
          font-size: 3.5rem;
          font-weight: 400;
          margin-bottom: 5px;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-headline {
          font-size: clamp(3.5rem, 8vw, 7.5rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -4px;
          margin-bottom: 50px;
          color: white;
        }

        .cta-row {
          display: flex;
          gap: 20px;
        }

        .btn-filled {
          background: #FF3B2E;
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          font-size: 1.05rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn-filled:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 59, 46, 0.4);
        }

        .btn-outline {
          padding: 16px 36px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: white;
        }

        /* Right Side Visuals */
        .visual-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-circle-container {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: filter 0.5s ease;
        }

        .profile-bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 59, 46, 0.15) 0%, transparent 70%);
          filter: blur(40px);
          z-index: -1;
          animation: glowPulse 4s infinite alternate ease-in-out;
        }

        @keyframes glowPulse {
          from { opacity: 0.5; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1.1); }
        }

        /* Thin outer dim circle */
        .circle-outer-ring {
          position: absolute;
          inset: -25px;
          border: 1px solid rgba(255, 59, 46, 0.15);
          border-radius: 50%;
          z-index: 1;
        }

        /* Bold bright red ring — the main visual */
        .circle-red-ring {
          position: absolute;
          inset: 0;
          border: 6px solid #FF3B2E;
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(255, 59, 46, 0.6), inset 0 0 30px rgba(255, 59, 46, 0.1);
          z-index: 3;
          pointer-events: none;
        }

        /* Image frame — circular clip, no dark bg */
        .circle-img-frame {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: #111;
        }

        .static-profile-image {
          width: 88%;
          height: auto;
          object-fit: contain;
          transform: translateY(25px);
          filter: brightness(1.1) contrast(1.05);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* SVG Chevron Markers */
        .chevron-marker {
          position: absolute;
          width: 60px;
          height: 80px;
          z-index: 5;
          pointer-events: none;
        }

        .left-chevron {
          left: -80px;
          top: 35%;
        }

        .right-chevron {
          right: -80px;
          bottom: 15%;
        }

        /* Skill Strip Bottom */
        .skill-strip-bottom {
          position: absolute;
          bottom: 30px;
          width: 100%;
          z-index: 10;
        }

        .strip-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .strip-pipe {
          opacity: 0.15;
          color: white;
        }

        .strip-item:hover {
          color: white;
        }

        .ambient-code-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .code-snippet {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: white;
          white-space: nowrap;
        }

        .snippet-tl {
          top: 15%;
          left: 5%;
        }

        .snippet-br {
          bottom: 25%;
          right: 5%;
        }

        @media (max-width: 1100px) {
          .profile-circle-container { width: 400px; height: 400px; }
          .hero-headline { font-size: 5rem; letter-spacing: -2px; }
        }

        @media (max-width: 968px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
          .split-layout { 
            grid-template-columns: 1fr; 
            text-align: center; 
            gap: 40px; 
            padding-top: 30px;
          }
          .hero-body { 
            padding-top: 100px; 
            align-items: flex-start; /* Pull content to top on mobile */
          }
          .hello-row { justify-content: center; }
          .cta-row { 
            display: flex;
            flex-direction: column !important;
            align-items: center;
            gap: 15px; 
            margin: 0 auto;
          }
          .btn-filled, .btn-outline { width: 100% !important; max-width: 300px; text-align: center; }
          .visual-right { display: flex; order: -1; width: 100%; justify-content: center; }
          .profile-circle-container { width: min(80vw, 300px); height: min(80vw, 300px); }
          .profile-bg-glow { width: 400px; height: 400px; }
          .hero-headline { font-size: clamp(3rem, 12vw, 5rem) !important; letter-spacing: -2px; margin-bottom: 30px; line-height: 1 !important; }
          .iam-name { font-size: 2.2rem !important; }
          .skill-strip-bottom, .chevron-marker, .snippet-tl, .snippet-br { display: none !important; }
        }

        .menu-toggle {
          cursor: pointer;
          color: white;
          z-index: 1001;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          padding: 30px;
          gap: 30px;
          text-align: center;
        }

        .mobile-links a {
          color: white;
          font-size: 2rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: -1px;
          transition: color 0.3s ease;
        }

        .mobile-links a:active {
          color: var(--primary-color);
        }

        @media (max-width: 480px) {
          .hero-headline { font-size: 2.8rem !important; }
          .iam-name { font-size: 1.6rem !important; }
          .profile-circle-container { width: 240px; height: 240px; }
        }
      `}} />
    </section>
  );
};

export default Hero;
