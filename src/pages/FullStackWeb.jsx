import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Globe, Server, Database, Shield, Layout, Code, Cpu, Layers, HardDrive, Smartphone, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import heroImg from '../assets/full-stack-dev-temp.png';

const FullStackWeb = () => {
  const buckets = [
    { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind'], icon: Layout },
    { label: 'Backend', items: ['Node.js', 'Express', 'Go'], icon: Server },
    { label: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis'], icon: Database },
    { label: 'DevOps', items: ['Docker', 'AWS', 'CI/CD'], icon: Zap },
    { label: 'API', items: ['REST', 'GraphQL', 'JWT'], icon: Cpu },
    { label: 'Tools', items: ['Git', 'VS Code', 'Postman'], icon: Code },
  ];

  const stats = [
    { label: 'Web Apps', value: '12+', icon: CheckCircle },
    { label: 'Stack Mastery', value: 'MERN', icon: Zap },
    { label: 'Code Quality', value: 'Clean', icon: Globe },
  ];

  const stacks = [
    { name: 'MERN Stack', desc: 'MongoDB, Express, React, and Node.js for modern web apps.' },
    { name: 'Next.js', desc: 'Full-stack React framework for SEO-friendly, blazing fast sites.' },
    { name: 'Jamstack', desc: 'Secure, scalable architectures using static Gen and APIs.' },
    { name: 'REST & GraphQL', desc: 'Powerful, efficient data fetching and state management.' }
  ];

  return (
    <>
      <Helmet>
        <title>Full Stack Web Development | Amol Jadhav</title>
        <meta name="description" content="End-to-end full stack web development using MERN stack, Next.js, and modern DevOps practices. Scalable, secure, and high-performance web applications." />
      </Helmet>
      <ServicePageLayout
        title="Full Stack Development"
        highlightWord="Development"
        subtitle="I build scalable, high-performance web applications from intuitive frontends to robust backends."
        icon={Code}
        buckets={buckets}
        stats={stats}
        heroImage={heroImg}
        color="#FF3B2E"
      >
        <div className="service-content-grid">
          <section className="detail-section">
            <div className="section-header-centered">
              <span className="accent-label">The Solutions</span>
              <h2>End-to-End Excellence</h2>
              <p className="lead-text">
                From database architecture to pixel-perfect frontend implementation, I deliver complete web solutions. I focus on building robust backends paired with intuitive, high-performance frontends.
              </p>
            </div>
            
            <div className="stacks-grid">
              {stacks.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="stack-card glass"
                >
                  <div className="stack-icon-bg">
                    <Zap size={20} color="var(--primary-color)" />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* New Specialized Section: Scalability */}
          <section className="scalability-section">
            <div className="split-info-layout">
              <div className="info-text">
                <span className="accent-label">Robust Engineering</span>
                <h3>Performance & Scalability</h3>
                <p>Modern web apps must handle growth without friction. I implement advanced caching, database optimization, and server-side rendering (SSR) to ensure your platform remains fast even under heavy load.</p>
                
                <ul className="capability-list">
                  <li><HardDrive size={16} /> Redis Caching Layers</li>
                  <li><Layers size={16} /> Microservices Migration</li>
                  <li><Globe size={16} /> SEO & Core Web Vitals Mastery</li>
                  <li><Shield size={16} /> Enterprise-Grade Security</li>
                </ul>
              </div>
              
              <div className="info-visual glass">
                <div className="visual-architecture-map">
                  <div className="node master">Client</div>
                  <div className="node secondary">API Gateway</div>
                  <div className="node tertiary">Redis</div>
                  <div className="node tertiary">DB Cluster</div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Lifecycle Section */}
          <section className="project-roadmap">
            <div className="section-header-left">
              <span className="accent-label">The Blueprint</span>
              <h3 className="section-title">Development Lifecycle (SDLC)</h3>
            </div>
            <div className="roadmap-grid">
              {[
                { step: '01', title: 'Analysis', desc: 'Requirement mapping, data modeling, and architectural spec definition.' },
                { step: '02', title: 'Design', desc: 'System architecture design, API contract definition, and UI mapping.' },
                { step: '03', title: 'Coding', desc: 'Agile development cycles, clean code practices, and modular implementation.' },
                { step: '04', title: 'Integration', desc: 'Merging backend services with frontend interfaces and third-party APIs.' }
              ].map((item, id) => (
                <div key={id} className="roadmap-step">
                  <span className="step-num mono-text">{item.step}</span>
                  <div className="step-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testing Lifecycle Section */}
          <section className="testing-roadmap">
            <div className="section-header-left">
              <span className="accent-label">Quality Assurance</span>
              <h3 className="section-title">Testing Lifecycle (STLC)</h3>
            </div>
            <div className="roadmap-grid testing">
              {[
                { step: '01', title: 'Unit Tests', desc: 'Validating individual components and business logic for zero-error states.' },
                { step: '02', title: 'Security Audit', desc: 'Rigorous penetration testing, JWT validation, and data encryption audits.' },
                { step: '03', title: 'UI Validation', desc: 'Cross-browser compatibility checks and responsive design fine-tuning.' },
                { step: '04', title: 'UAT & Launch', desc: 'User acceptance testing followed by automated production deployment.' }
              ].map((item, id) => (
                <div key={id} className="roadmap-step">
                  <span className="step-num mono-text" style={{ color: 'rgba(46, 91, 255, 0.5)' }}>{item.step}</span>
                  <div className="step-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="architecture">
            <h3>Ecosystem Expertise</h3>
            <div className="tech-pills">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Postgres</span>
              <span>Redis</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
            </div>
          </section>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .service-content-grid {
            display: flex;
            flex-direction: column;
            gap: 120px;
          }

          .section-header-centered {
            text-align: center;
            margin-bottom: 60px;
          }

          .accent-label {
            font-family: var(--font-mono);
            color: var(--primary-color);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 0.8rem;
            margin-bottom: 12px;
            display: block;
          }

          .lead-text {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 800px;
            line-height: 1.8;
            margin: 0 auto;
          }

          .stacks-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .stack-card {
            padding: 24px;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .stack-icon-bg {
            width: 44px;
            height: 44px;
            background: rgba(255, 59, 46, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
          }

          .stack-card h3 {
            color: white;
            margin-bottom: 12px;
            font-size: 1.15rem;
            font-weight: 700;
          }

          .stack-card p {
            color: var(--text-secondary);
            line-height: 1.6;
          }

          /* Scalability Section */
          .split-info-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }

          .capability-list {
            list-style: none;
            padding: 0;
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .capability-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: var(--text-muted);
          }

          .capability-list li svg {
            color: var(--primary-color);
          }

          .visual-architecture-map {
            display: flex;
            flex-direction: row;
            gap: 15px;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            flex-wrap: wrap;
          }

          .node {
            padding: 12px 24px;
            border-radius: 8px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            font-family: var(--font-mono);
            font-size: 0.8rem;
            width: 150px;
            text-align: center;
          }

          .node.master { border-color: var(--primary-color); color: var(--primary-color); }

          /* Roadmap Section */
          .project-roadmap, .testing-roadmap {
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 80px;
          }

          .section-header-left {
            margin-bottom: 50px;
          }

          .roadmap-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-top: 20px;
          }

          .roadmap-step {
            position: relative;
          }

          .step-num {
            font-size: 3rem;
            font-weight: 800;
            color: rgba(255, 59, 46, 0.45);
            line-height: 1;
            display: block;
            margin-bottom: -15px;
          }

          .step-content h4 {
            font-size: 1.15rem;
            margin-bottom: 12px;
            color: white;
          }

          .step-content p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          .architecture h3 {
            font-family: var(--font-mono);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 1rem;
            margin-bottom: 25px;
            color: var(--primary-color);
          }

          .tech-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .tech-pills span {
            padding: 8px 18px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--glass-border);
            border-radius: 100px;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: var(--text-secondary);
          }

          @media (max-width: 1024px) {
            .split-info-layout {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .roadmap-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .stacks-grid {
              grid-template-columns: 1fr;
            }
            .roadmap-grid {
              grid-template-columns: 1fr;
            }
          }
        `}} />
      </ServicePageLayout>
    </>
  );
};

export default FullStackWeb;
