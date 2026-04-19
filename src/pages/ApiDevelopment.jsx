import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Cpu, Link2, ShieldAlert, Activity, FileJson, Server, Shield, Database, Lock, Terminal, CheckCircle, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/api-developments.png';

const ApiDevelopment = () => {
  const buckets = [
    { label: 'RESTful', items: ['Architecture', 'Best Practices'], icon: Server },
    { label: 'GraphQL', items: ['Queries', 'Mutations'], icon: Cpu },
    { label: 'Security', items: ['JWT', 'OAuth2', 'HTTPS'], icon: Shield },
    { label: 'Database', items: ['SQL', 'NoSQL', 'ORM'], icon: Database },
    { label: 'Auth', items: ['Login', 'Permissions'], icon: Lock },
    { label: 'Docs', items: ['Swagger', 'Postman'], icon: FileJson },
  ];

  const stats = [
    { label: 'API Uptime', value: '99.9%', icon: Activity },
    { label: 'Response Time', value: '< 200ms', icon: Zap },
    { label: 'Requests/sec', value: '10k+', icon: Globe },
  ];

  const features = [
    { title: 'RESTful Architecture', desc: 'Secure, stateless APIs following industry standard REST principles.' },
    { title: 'GraphQL Integration', desc: 'Flexible, typed APIs that allow clients to request exactly what they need.' },
    { title: 'API Documentation', desc: 'Comprehensive, interactive documentation using Swagger/OpenAPI.' },
    { title: 'Rate Limiting', desc: 'Protecting your resources with intelligent traffic management and security.' }
  ];

  return (
    <ServicePageLayout 
      title="API Development"
      highlightWord="Development"
      subtitle="Building the backbone of modern applications with robust, secure, and well-documented APIs."
      icon={Cpu}
      color="#FF3B2E"
      buckets={buckets}
      stats={stats}
      heroImage={heroImg}
    >
      <div className="service-content-grid">
        <section className="detail-section">
          <div className="section-header-centered">
            <span className="accent-label">The Core Engine</span>
            <h2>Architecting Digital Bridges</h2>
            <p className="lead-text">
              APIs are the silent foundation of every modern digital experience. I build secure, high-performance, and well-documented APIs that enable seamless communication between services, mobile apps, and third-party ecosystems.
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
                className="api-card glass"
              >
                <div className="api-icon">
                  <Activity size={20} color="var(--primary-color)" />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* New Specialized Section: API DX */}
        <section className="api-dx">
          <div className="split-info-layout">
            <div className="info-text">
              <span className="accent-label">Developer Experience</span>
              <h3>API Economy & Security</h3>
              <p>A great API is both powerful and easy to use. I prioritize <strong>Developer Experience (DX)</strong> by providing comprehensive documentation, SDK-compatible structures, and robust security patterns.</p>
              
              <ul className="capability-list">
                <li><FileJson size={16} /> OpenAPI / Swagger Specs</li>
                <li><Lock size={16} /> OAuth2 & JWT Security</li>
                <li><Activity size={16} /> Rate Limiting & Throttling</li>
                <li><Zap size={16} /> Redis-Powered Caching</li>
              </ul>
            </div>
            
            <div className="info-visual glass">
              <div className="api-response-visual">
                <div className="response-header">GET /v1/user/profile</div>
                <pre className="code-display">
                  <code>{`{
  "status": "success",
  "data": {
    "id": "usr_9421",
    "name": "Amol Jadhav",
    "role": "Developer"
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* New Roadmap Section: API Process */}
        <section className="project-roadmap">
          <h3 className="section-title">API Design Lifecycle</h3>
          <div className="roadmap-grid">
            {[
              { step: '01', title: 'Spec', desc: 'Defining the contract using OpenAPI 3.0 to align frontend and backend teams.' },
              { step: '02', title: 'Mock', desc: 'Creating mock servers to allow parallel development and rapid prototyping.' },
              { step: '03', title: 'Orchestrate', desc: 'Building the logic, and integrating database layers with high efficiency.' },
              { step: '04', title: 'Monitor', desc: 'Implementing logging, performance metrics, and uptime monitoring.' }
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

        <section className="tech-stack-section">
          <h3>Technical Protocol Mastery</h3>
          <div className="tech-pills">
            <span>RESTful API</span>
            <span>GraphQL</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Go (Golang)</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Swagger</span>
            <span>Postman</span>
            <span>JWT</span>
            <span>Webhooks</span>
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

        .api-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: flex-start;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .api-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 59, 46, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .api-card h4 {
          margin-bottom: 8px;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .api-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* API DX Section */
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

        .api-response-visual {
          padding: 30px;
          background: #0D0D0F;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }

        .response-header {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--primary-color);
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .code-display {
          color: #E2E2E2;
          font-size: 0.85rem;
          line-height: 1.5;
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

export default ApiDevelopment;
