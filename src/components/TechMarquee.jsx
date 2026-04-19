import React from 'react';

const TechMarquee = () => {
  const techs = [
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Go', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' }
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {[...techs, ...techs].map((tech, index) => (
          <div key={index} className="tech-item glass">
            <img src={tech.icon} alt={tech.name} style={{ width: '24px', height: '24px' }} />
            {tech.name}
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.01);
          padding: 40px 0;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
          position: relative;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-color), transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-color), transparent);
        }

        .marquee-content {
          display: flex;
          gap: 40px;
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--text-secondary);
          transition: all 0.3s;
          border-radius: 16px;
          white-space: nowrap;
        }

        .tech-item img {
          transition: transform 0.3s;
        }

        .tech-item:hover img {
          transform: scale(1.2);
        }

        .tech-item:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
          box-shadow: var(--shadow-neon);
          background: rgba(255, 59, 46, 0.05);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechMarquee;
