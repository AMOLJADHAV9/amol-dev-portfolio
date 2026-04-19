import React from 'react';
import { motion } from 'framer-motion';

const UtilityStrip = () => {
  const items = [
    { label: 'Based in India', icon: '📍' },
    { label: 'Open for Freelance', icon: '🟢' },
    { label: '10+ Apps Launched', icon: '🚀' },
    { label: 'Flutter Specialist', icon: '💎' }
  ];

  return (
    <div className="utility-strip-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="glass utility-strip"
      >
        {items.map((item, index) => (
          <div key={index} className="utility-item">
            <span className="utility-icon">{item.icon}</span>
            <span className="utility-label">{item.label}</span>
            {index < items.length - 1 && <div className="utility-divider" />}
          </div>
        ))}
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .utility-strip-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 40px 0 60px;
          position: relative;
          z-index: 10;
        }

        .utility-strip {
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 12px 40px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
        }

        .utility-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .utility-icon {
          font-size: 1rem;
        }

        .utility-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .utility-divider {
          width: 1px;
          height: 15px;
          background: var(--glass-border);
          margin-left: 20px;
        }

        @media (max-width: 768px) {
          .utility-strip {
            gap: 15px;
            padding: 10px 20px;
            overflow-x: auto;
            max-width: 90%;
            border-radius: 20px;
          }
          .utility-divider {
            display: none;
          }
        }
      `}} />
    </div>
  );
};

export default UtilityStrip;
