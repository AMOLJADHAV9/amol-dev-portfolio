import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Palette, Layers, MousePointer2, Zap, PenTool, Search, Layout, Move, Users, CheckCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/ui-ux-temp.png';

const UiUxDesign = () => {
  const buckets = [
    { label: 'Research', items: ['User Interviews', 'Personas'], icon: Users },
    { label: 'Wireframing', items: ['Stuctural Layouts', 'Lo-Fi'], icon: Layout },
    { label: 'UI Design', items: ['Visual Aesthetics', 'Branding'], icon: Palette },
    { label: 'Prototyping', items: ['Interactive Flows', 'Hi-Fi'], icon: Move },
    { label: 'Testing', items: ['Usability', 'A/B Testing'], icon: Search },
    { label: 'Tools', items: ['Figma', 'Adobe XD', 'Sketch'], icon: PenTool },
  ];

  const stats = [
    { label: 'Designs Created', value: '120+', icon: CheckCircle },
    { label: 'User Satisfaction', value: '99%', icon: Zap },
    { label: 'Tools Mastered', value: '10+', icon: Globe },
  ];

  const principles = [
    { title: 'User-Centric', desc: 'Putting the user at the heart of every decision through research and empathy.' },
    { title: 'Visual Hierarchy', desc: 'Ensuring clarity and ease of navigation through structured design.' },
    { title: 'Micro-Interactions', desc: 'Adding delightful details that make the interface feel alive and responsive.' },
    { title: 'Accessibility', desc: 'Designing inclusive experiences that work for everyone, regardless of ability.' }
  ];

  return (
    <ServicePageLayout 
      title="UI/UX Design"
      highlightWord="Design"
      subtitle="Designing intuitive, high-fidelity interfaces that bridge the gap between human and machine."
      icon={Palette}
      color="#FF3B2E"
      buckets={buckets}
      stats={stats}
      heroImage={heroImg}
    >
      <div className="service-content-grid">
        <section className="detail-section">
          <div className="section-header-centered">
            <span className="accent-label">Design Philosophy</span>
            <h2>Invisible Design, Visible Impact</h2>
            <p className="lead-text">
              Good design is invisible. It guides users naturally without friction, turning complex functionality into a seamless flow. I focus on minimal, high-impact aesthetics that prioritize both form and function.
            </p>
          </div>
          
          <div className="principles-grid">
            {principles.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="principle-item glass"
              >
                <div className="principle-dot-wrap">
                  <div className="dot" />
                </div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* New Specialized Section: Design Systems */}
        <section className="design-systems">
          <div className="split-info-layout">
            <div className="info-visual">
              <div className="design-tokens-grid">
                <div className="token-block red" />
                <div className="token-block blue" />
                <div className="token-block dark" />
                <div className="token-card glass">Aa</div>
                <div className="token-card glass">Icon</div>
                <div className="token-card glass">BTN</div>
              </div>
            </div>
            
            <div className="info-text">
              <span className="accent-label">Systematic Approach</span>
              <h3>Design System Architecture</h3>
              <p>I don't just design screens; I build scalable design systems. I create modular component libraries that ensure visual consistency across all platforms while speeding up the development process.</p>
              
              <ul className="capability-list">
                <li><Palette size={16} /> Token-Based Theming</li>
                <li><Layout size={16} /> Atomic Design Patterns</li>
                <li><Users size={16} /> Shared Team Libraries</li>
                <li><CheckCircle size={16} /> WCAG Accessibility Compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* New Roadmap Section: Design Thinking */}
        <section className="project-roadmap">
          <h3 className="section-title">Design Thinking Process</h3>
          <div className="roadmap-grid">
            {[
              { step: '01', title: 'Empathize', desc: 'Deep research into user pain points and stakeholders expectations.' },
              { step: '02', title: 'Ideate', desc: 'Wireframing lo-fi layouts to explore structural hierarchy and flows.' },
              { step: '03', title: 'Prototype', desc: 'Creating high-fidelity interactive prototypes in Figma for testing.' },
              { step: '04', title: 'Validate', desc: 'Usability testing and iterating based on real-world user feedback.' }
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

        <section className="design-tools">
          <h3>Tools of the Trade</h3>
          <div className="tools-grid">
            <div className="tool-card glass"><span>Figma</span></div>
            <div className="tool-card glass"><span>Adobe XD</span></div>
            <div className="tool-card glass"><span>Photoshop</span></div>
            <div className="tool-card glass"><span>After Effects</span></div>
            <div className="tool-card glass"><span>Spline 3D</span></div>
            <div className="tool-card glass"><span>Framer</span></div>
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

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .principle-item {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .principle-dot-wrap {
          margin-top: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-color);
          box-shadow: 0 0 10px var(--primary-color);
        }

        .principle-item h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .principle-item p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Design Systems Section */
        .split-info-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .design-tokens-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .token-block { aspect-ratio: 1; border-radius: 12px; }
        .token-block.red { background: var(--primary-color); }
        .token-block.blue { background: #2E5BFF; }
        .token-block.dark { background: #1A1A1E; border: 1px solid rgba(255,255,255,0.1); }
        
        .token-card {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
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

        /* Roadmap Section */
        .project-roadmap {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 80px;
        }

        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .roadmap-step {
          position: relative;
        }

        .step-num {
          font-size: 3rem;
          font-weight: 800;
          color: rgba(255, 59, 46, 0.15);
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

        .design-tools h3 {
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1rem;
          margin-bottom: 30px;
          color: var(--primary-color);
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 15px;
        }

        .tool-card {
          padding: 20px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          background: rgba(255, 59, 46, 0.1);
          border-color: var(--primary-color);
          color: white;
        }

        @media (max-width: 1024px) {
          .split-info-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .design-systems .info-visual { order: 2; }
          .design-systems .info-text { order: 1; text-align: center; }
          .roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tools-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .roadmap-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </ServicePageLayout>
  );
};

export default UiUxDesign;
