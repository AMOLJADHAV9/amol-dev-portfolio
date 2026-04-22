import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import { Flame, Database, ShieldCheck, Zap, Bell, Shield, Lock, Cloud, Terminal, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import heroImg from '../assets/firebase-integration.png';

const FirebaseIntegration = () => {
  const buckets = [
    { label: 'Realtime DB', items: ['Firestore', 'Realtime DB'], icon: Database },
    { label: 'Auth', items: ['Social Login', 'JWT'], icon: ShieldCheck },
    { label: 'Functions', items: ['Cloud Functions', 'Node.js'], icon: Terminal },
    { label: 'Storage', items: ['Cloud Storage', 'Buckets'], icon: Cloud },
    { label: 'Hosting', items: ['Global CDN', 'SSL'], icon: Globe },
    { label: 'Messaging', items: ['FCM', 'Notifications'], icon: Bell },
  ];

  const stats = [
    { label: 'Sync Speed', value: '< 100ms', icon: Zap },
    { label: 'Scalability', value: 'Unlimited', icon: Globe },
    { label: 'Security Score', value: 'A+', icon: Shield },
  ];

  const services = [
    { title: 'Firestore', desc: 'NoSQL real-time databases for fast, synchronized data storage.' },
    { title: 'Authentication', desc: 'Secure login systems with Google, Email, and social providers.' },
    { title: 'Cloud Functions', desc: 'Serverless backend logic that scales automatically with your app.' },
    { title: 'Cloud Messaging', desc: 'Reliable cross-platform push notifications and in-app messaging.' }
  ];

  return (
    <>
      <Helmet>
        <title>Firebase Integration | Amol Jadhav</title>
        <meta name="description" content="Expert Firebase integration services for real-time databases, authentication, serverless functions, and cloud storage. Building scalable cloud-native apps." />
      </Helmet>
      <ServicePageLayout 
        title="Firebase Integration"
        highlightWord="Integration"
        subtitle="Supercharge your applications with Google's robust cloud platform components."
        icon={Flame}
        color="#FF3B2E"
        buckets={buckets}
        stats={stats}
        heroImage={heroImg}
      >
        <div className="service-content-grid">
          <section className="detail-section">
            <div className="section-header-centered">
              <span className="accent-label">Cloud Infrastructure</span>
              <h2>Serverless Powerhouse</h2>
              <p className="lead-text">
                Eliminate the complexity of server management. By leveraging Firebase, I build scalable, secure, and real-time applications that allow you to focus on your core business logic while I handle the infrastructure.
              </p>
            </div>
            
            <div className="firebase-grid">
              {services.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="firebase-card glass"
                >
                  <div className="card-icon-bg">
                    <Zap size={20} color="var(--primary-color)" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* New Specialized Section: Cloud Ecosystem */}
          <section className="cloud-ecosystem">
            <div className="split-info-layout">
              <div className="info-text">
                <span className="accent-label">Real-time Architecture</span>
                <h3>Cloud Ecosystem Mastery</h3>
                <p>Firebase is more than just a database; it is a comprehensive suite of tools. I specialize in orchestrating these services to create a unified, high-performance backend infrastructure.</p>
                
                <ul className="capability-list">
                  <li><Terminal size={16} /> Edge Cloud Functions</li>
                  <li><Database size={16} /> Firestore Data Modeling</li>
                  <li><Shield size={16} /> Enterprise Security Rules</li>
                  <li><Zap size={16} /> Analytics & Performance</li>
                </ul>
              </div>
              
              <div className="info-visual glass">
                <div className="firebase-stack-visual">
                  <div className="stack-layer">Cloud Functions</div>
                  <div className="stack-layer">Auth & Cloud Storage</div>
                  <div className="stack-layer master">Cloud Firestore</div>
                </div>
              </div>
            </div>
          </section>

          {/* New Roadmap Section: Firebase Process */}
          <section className="project-roadmap">
            <h3 className="section-title">Integration Roadmap</h3>
            <div className="roadmap-grid">
              {[
                { step: '01', title: 'Consult', desc: 'Analyzing your app architecture to identify the best Firebase touchpoints.' },
                { step: '02', title: 'Architect', desc: 'Designing optimized Security Rules and NoSQL data structures for scale.' },
                { step: '03', title: 'Migrate', desc: 'Securely migrating existing data and implementing real-time listeners.' },
                { step: '04', title: 'Govern', desc: 'Setting up monitoring, crashlytics, and continuous integration flows.' }
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

          <section className="security">
            <div className="security-banner glass">
              <div className="banner-icon-bg">
                <ShieldCheck size={40} color="var(--primary-color)" />
              </div>
              <div>
                <h3>Enterprise-Grade Governance</h3>
                <p>I implement granular Security Rules, custom JWT claims, and secure Cloud Functions to ensure your data remains protected and private at all times. My approach includes multi-environment setups (Dev/Staging/Prod) for safe modernization.</p>
              </div>
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

          .firebase-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .firebase-card {
            padding: 24px;
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
            margin-bottom: 25px;
          }

          .firebase-card h3 {
            font-size: 1.15rem;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .firebase-card p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          /* Cloud Ecosystem Section */
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

          .firebase-stack-visual {
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding: 40px 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .stack-layer {
            padding: 15px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px;
            text-align: center;
            font-family: var(--font-mono);
            font-size: 0.8rem;
          }

          .stack-layer.master {
            background: rgba(255, 59, 46, 0.05);
            border-color: var(--primary-color);
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

          .security-banner {
            display: flex;
            align-items: center;
            gap: 35px;
            padding: 50px;
            background: rgba(255, 59, 46, 0.03);
            border-color: rgba(255, 59, 46, 0.1);
          }

          .banner-icon-bg {
            width: 80px;
            height: 80px;
            background: rgba(255, 59, 46, 0.1);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .security-banner h3 {
            margin-bottom: 15px;
            font-size: 1.5rem;
            color: white;
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
            .firebase-grid {
              grid-template-columns: 1fr;
            }
            .roadmap-grid {
              grid-template-columns: 1fr;
            }
            .security-banner {
              flex-direction: column;
              text-align: center;
              padding: 40px 25px;
            }
          }
        `}} />
      </ServicePageLayout>
    </>
  );
};

export default FirebaseIntegration;
