import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Server, Layers, Smartphone, Cpu, Flame, ArrowRight } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full-Stack Web',
      icon: Globe,
      path: '/services/full-stack-web',
      skills: ['React.js', 'Next.js', 'Node.js', 'TypeScript'],
    },
    {
      title: 'Mobile App Dev',
      icon: Smartphone,
      path: '/services/mobile-app-development',
      skills: ['Flutter', 'Dart', 'React Native', 'Mobile UI'],
    },
    {
      title: 'UI/UX Design',
      icon: Layers,
      path: '/services/ui-ux-design',
      skills: ['Figma', 'Prototyping', 'Visual Design', 'User Flow'],
    },
    {
      title: 'API Development',
      icon: Cpu,
      path: '/services/api-development',
      skills: ['RESTful', 'GraphQL', 'Microservices', 'Auth'],
    },
    {
      title: 'Firebase Integration',
      icon: Flame,
      path: '/services/firebase-integration',
      skills: ['Firestore', 'Auth', 'Functions', 'Coud Messaging'],
    }
  ];

  return (
    <section id="skills" className="skills-section">
      {/* Background Decor: Cinematic Typography & Flux Network */}
      <div className="skills-bg-pattern" aria-hidden="true">
        <div className="floating-typography">
          {[
            "const developer = { name: 'Amol', focus: 'Excellence' };",
            "function buildApp() { return <Success />; }",
            "import { Flux } from '@studio/core';",
            "git commit -m 'Release v2.0-stable'",
            "await process.optimize(userExperience);",
            "while(learning) { improve(); }",
            "yarn add @premium/design-system",
            "docker-compose up --build",
            "npm run unleash-creativity",
            "flutter build apk --release",
            "API.v1.connect({ secure: true });",
            "const colors = { primary: '#FF3B2E' };",
            "System.reboot({ status: 'optimized' });",
            "localStorage.setItem('theme', 'studio-dark');",
            "export default class Innovation extends Service {}",
            "ReactDOM.render(<Expertise />, root);",
            "<h1>Dynamic Solutions</h1>",
            ".studio-glow { filter: blur(40px); }",
            "const roadmap = ['Spec', 'Design', 'Code', 'Test'];",
            "Math.random() > 0.5 ? success() : tryAgain();"
          ].map((text, i) => (
            <motion.div
              key={i}
              className={`code-text text-${i}`}
              initial={{ opacity: 0, x: Math.random() * 100 - 50 }}
              whileInView={{ opacity: 0.03, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: i * 0.1 }}
            >
              <code>{text}</code>
            </motion.div>
          ))}
        </div>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 L100 200 L300 150 L600 300" stroke="rgba(255,59,46,0.04)" fill="none" strokeWidth="1" />
          <path d="M90% 10% L80% 40% L95% 70%" stroke="rgba(255,59,46,0.04)" fill="none" strokeWidth="1" />
          <circle cx="100" cy="200" r="3" fill="var(--primary-color)" fillOpacity="0.1">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="40%" r="2" fill="var(--primary-color)" fillOpacity="0.1">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="tagline">Tech Stack</span>
          <h2 className="title">My Expertise</h2>
        </motion.div>

        <div className="skills-grid-horizontal">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Link to={category.path} className="skill-card-v2-link">
                  <div className="skill-card-v2">
                    <div className="card-top">
                      <div className="card-icon-wrap">
                        <Icon size={20} color="#FF3B2E" strokeWidth={1.5} />
                      </div>
                      <h3>{category.title}</h3>
                    </div>

                    <ul className="skill-list">
                      {category.skills.map((skill, sIndex) => (
                        <li key={sIndex}>
                          <span className="bullet" />
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <div className="card-footer-action">
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .skills-section {
          padding: 80px 0;
          position: relative;
          min-height: unset;
          overflow: hidden;
        }

        .skills-bg-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .floating-typography {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .code-text {
          position: absolute;
          white-space: nowrap;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: white;
          user-select: none;
          opacity: 0.05;
        }

        /* Adjusted positions for mobile friendliness */
        .text-0 { top: 5%; left: 5%; }
        .text-1 { top: 12%; right: 5%; }
        .text-2 { top: 20%; left: 10%; }
        .text-3 { top: 32%; right: 10%; }
        .text-4 { top: 40%; left: 5%; }
        .text-5 { top: 55%; right: 5%; }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .tagline {
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.75rem;
          display: block;
          margin-bottom: 10px;
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 0;
        }

        .skills-grid-horizontal {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
        }

        @media (max-width: 1280px) {
          .skills-grid-horizontal {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 968px) {
          .skills-grid-horizontal {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .skill-card-v2-link {
          text-decoration: none;
          display: block;
          height: 100%;
        }

        .skill-card-v2 {
          position: relative;
          background: var(--surface-color);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .skill-card-v2:hover {
          border-color: rgba(255, 59, 46, 0.4);
          background: rgba(255, 59, 46, 0.02);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--glass-border);
        }

        .card-icon-wrap {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 59, 46, 0.08);
          border: 1px solid rgba(255, 59, 46, 0.15);
          border-radius: 10px;
        }

        .skill-card-v2 h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: var(--font-mono);
          flex-grow: 1;
        }

        .skill-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .bullet {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--primary-color);
          flex-shrink: 0;
          opacity: 0.7;
        }

        .card-footer-action {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .skill-card-v2:hover .card-footer-action {
          opacity: 1;
          transform: translateX(5px);
        }

        @media (max-width: 600px) {
          .skills-grid-horizontal {
            grid-template-columns: 1fr;
          }
          .skills-section {
            padding: 60px 0;
          }
        }
      `}} />
    </section>
  );
};

export default Skills;
