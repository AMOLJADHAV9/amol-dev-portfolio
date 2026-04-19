import React from 'react';
import { motion } from 'framer-motion';

const ServiceStats = ({ stats, color = "#FF3B2E" }) => {
  return (
    <div className="service-stats-bar glass">
      <div className="container">
        <div className="stats-flex">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="stat-item"
              >
                <div className="stat-icon-wrap" style={{ color: color }}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .service-stats-bar {
          margin-top: 40px;
          padding: 30px 0;
          border-radius: 24px;
          border-color: rgba(255, 255, 255, 0.03);
          background: rgba(20, 20, 22, 0.4);
        }

        .stats-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
          flex: 1;
          min-width: 180px;
          justify-content: center;
        }

        .stat-icon-wrap {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 2px;
          font-family: var(--font-mono);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .stats-flex {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .stat-item {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .stats-flex {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
};

export default ServiceStats;
