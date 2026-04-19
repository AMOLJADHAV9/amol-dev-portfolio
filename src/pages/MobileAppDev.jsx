import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Smartphone, CheckCircle, Code, Cpu, Layout, Zap, Globe, Shield, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/mobile-app-dev-temp.png';

const MobileAppDev = () => {
  const buckets = [
    { label: 'iOS App', items: ['Swift', 'SwiftUI'], icon: Smartphone },
    { label: 'Android App', items: ['Kotlin', 'Jetpack Compose'], icon: Cpu },
    { label: 'Cross-Platform', items: ['Flutter', 'React Native'], icon: Smartphone },
    { label: 'Backend', items: ['Firebase', 'Node.js'], icon: Zap },
    { label: 'UI/UX', items: ['Material Design', 'Cupertino'], icon: Layout },
    { label: 'Storage', items: ['SQLite', 'Hive', 'CoreData'], icon: Database },
  ];

  const stats = [
    { label: 'Apps Launched', value: '25+', icon: CheckCircle },
    { label: 'User Rating', value: '4.8/5', icon: Zap },
    { label: 'Platform Support', value: 'Both', icon: Globe },
  ];

  const features = [
    { title: 'Native Performance', desc: 'High-performance apps for iOS and Android using Flutter and React Native.' },
    { title: 'Offline First', desc: 'Seamless user experience even without an internet connection using local DBs.' },
    { title: 'Push Notifications', desc: 'Keep users engaged with real-time updates and interactive alerts.' },
    { title: 'Biometric Security', desc: 'Secure user data with FaceID, Fingerprint, and encrypted storage.' }
  ];

  return (
    <ServicePageLayout 
      title="Mobile App Development"
      highlightWord="Development"
      subtitle="Crafting high-performance native and cross-platform mobile experiences that users love."
      icon={Smartphone}
      buckets={buckets}
      stats={stats}
      heroImage={heroImg}
      color="#FF3B2E"
    >
      <div className="service-content-grid">
        <section className="detail-section">
          <div className="section-header-centered">
            <span className="accent-label">The Experience</span>
            <h2>Premium Native Performance</h2>
            <p className="lead-text">
              In a mobile-first world, your application needs to be more than just a tool; it needs to be an extension of the user's workflow. I build mobile applications that are fluid, responsive, and platform-optimized.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="feature-card glass"
              >
                <div className="card-icon-bg">
                  <CheckCircle size={20} color="var(--primary-color)" />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* New Specialized Section: Architecture */}
        <section className="architecture-deep-dive">
          <div className="split-info-layout">
            <div className="info-text">
              <span className="accent-label">Technical Mastery</span>
              <h3>Cross-Platform Efficiency</h3>
              <p>I specialize in <strong>Flutter</strong> and <strong>React Native</strong> to deliver native-feel performance with a single codebase. This significantly reduces time-to-market while maintaining cinematic UI smoothness.</p>
              
              <ul className="capability-list">
                <li><Zap size={16} /> 60FPS Fluid Animations</li>
                <li><Globe size={16} /> Global State Management</li>
                <li><Database size={16} /> Offline Persistence Logic</li>
                <li><Shield size={16} /> Biometric Security Integration</li>
              </ul>
            </div>
            
            <div className="info-visual glass">
              <div className="visual-code-window">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <pre className="code-display">
                  <code>{`class AppPerformance {
  static optimize() {
    // Zero-jank architecture
    enableHardwareAcceleration();
    initializeSmartCaching();
    prewarmGlobalState();
  }
}`}</code>
                </pre>
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
              { step: '01', title: 'Prototyping', desc: 'Crafting high-fidelity interactive prototypes to validate user flows.' },
              { step: '02', title: 'Core Engine', desc: 'Building the fundamental app logic and local data persistence layers.' },
              { step: '03', title: 'Services Sync', desc: 'Integrating cloud functions, push notifications, and external APIs.' },
              { step: '04', title: 'App Build', desc: 'Compiling final binaries for iOS and Android with optimized assets.' }
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
              { step: '01', title: 'Emulation', desc: 'Comprehensive testing on various screen ratios and OS versions via simulators.' },
              { step: '02', title: 'Device Lab', desc: 'Real-world validation on physical hardware for touch response and battery.' },
              { step: '03', title: 'Beta Distro', desc: 'Internal testing via TestFlight and Firebase App Distribution.' },
              { step: '04', title: 'Store Audit', desc: 'Final prep for App Store & Play Store guidelines and submission.' }
            ].map((item, id) => (
              <div key={id} className="roadmap-step">
                <span className="step-num mono-text" style={{ color: 'rgba(46, 91, 255, 0.2)' }}>{item.step}</span>
                <div className="step-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-stack-section">
          <h3>Ecosystem Mastery</h3>
          <div className="tech-pills">
            <span>Flutter</span>
            <span>Dart</span>
            <span>React Native</span>
            <span>Swift</span>
            <span>Kotlin</span>
            <span>Firebase</span>
            <span>SQLite</span>
            <span>Redux</span>
            <span>Riverpod</span>
            <span>REST APIs</span>
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .feature-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: flex-start;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-icon-bg {
          width: 44px;
          height: 44px;
          background: rgba(255, 59, 46, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-card h4 {
          margin-bottom: 8px;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Architecture Section */
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

        .info-visual {
          padding: 30px;
          border-color: rgba(255, 255, 255, 0.05);
        }

        .visual-code-window {
          background: #0D0D0F;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          position: relative;
        }

        .window-dots {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
        }

        .window-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.red { background: #FF5F56; }
        .dot.yellow { background: #FFBD2E; }
        .dot.green { background: #27C93F; }

        .code-display {
          color: #E2E2E2;
          font-size: 0.9rem;
          line-height: 1.5;
        }

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

        .tech-stack-section h3 {
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
          .features-grid {
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

export default MobileAppDev;
