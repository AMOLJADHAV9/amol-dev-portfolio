import React from 'react';
import { motion } from 'framer-motion';

const InteractiveTechMap = ({ centralIcon: CentralIcon, buckets, color = "#FF3B2E" }) => {
  // Buckets layout positions (normalized -1 to 1)
  // 0: Top-Left, 1: Mid-Left, 2: Bottom-Left, 3: Top-Right, 4: Mid-Right, 5: Bottom-Right
  const positions = [
    { x: -220, y: -100, align: 'right' },
    { x: -240, y: 0, align: 'right' },
    { x: -220, y: 100, align: 'right' },
    { x: 220, y: -100, align: 'left' },
    { x: 240, y: 0, align: 'left' },
    { x: 220, y: 100, align: 'left' },
  ];

  return (
    <div className="tech-map-container">
      <svg className="connection-svg" viewBox="-300 -150 600 300">
        {/* Animated Dashed Circles */}
        <motion.circle
          cx="0"
          cy="0"
          r="60"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.2 }}
        />
        <motion.circle
          cx="0"
          cy="0"
          r="85"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.1 }}
        />

        {/* Connection Lines */}
        {buckets.map((bucket, index) => {
          const pos = positions[index];
          if (!pos) return null;
          
          return (
            <motion.path
              key={`line-${index}`}
              d={`M ${pos.x * 0.3} ${pos.y * 0.3} L ${pos.x * 0.75} ${pos.y * 0.75}`}
              stroke={color}
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
            />
          );
        })}
      </svg>

      {/* Central Node */}
      <motion.div 
        className="central-node"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        style={{ boxShadow: `0 0 40px ${color}40`, border: `1px solid ${color}60` }}
      >
        <div className="inner-node" style={{ background: `radial-gradient(circle, ${color}20 0%, transparent 70%)` }}>
          <CentralIcon size={32} color={color} strokeWidth={1.5} />
        </div>
        <div className="node-glow" style={{ background: color }} />
      </motion.div>

      {/* Bucket Cards */}
      {buckets.map((bucket, index) => {
        const pos = positions[index];
        if (!pos) return null;
        const Icon = bucket.icon;

        return (
          <motion.div
            key={`bucket-${index}`}
            className={`bucket-card ${pos.align}`}
            initial={{ opacity: 0, x: pos.x > 0 ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            style={{ 
              left: `calc(50% + ${pos.x}px)`, 
              top: `calc(50% + ${pos.y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="bucket-icon-wrap" style={{ background: `${color}10`, borderColor: `${color}20` }}>
              <Icon size={18} color={color} strokeWidth={2} />
            </div>
            <div className="bucket-text">
              <h4>{bucket.label}</h4>
              <p>{bucket.items.join(', ')}</p>
            </div>
          </motion.div>
        );
      })}

      <style dangerouslySetInnerHTML={{ __html: `
        .tech-map-container {
          position: relative;
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connection-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .central-node {
          position: relative;
          width: 90px;
          height: 90px;
          background: #111;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .inner-node {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-glow {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          filter: blur(15px);
          opacity: 0.15;
          z-index: -1;
          animation: pulse 3s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.2); opacity: 0.25; }
        }

        .bucket-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(20, 20, 22, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 14px;
          border-radius: 12px;
          z-index: 1;
          width: 200px;
          transition: all 0.3s ease;
        }

        .bucket-card:hover {
          background: rgba(255, 59, 46, 0.05);
          border-color: rgba(255, 59, 46, 0.2);
          transform: translate(-50%, -50%) scale(1.05) !important;
        }

        .bucket-card.right { flex-direction: row-reverse; text-align: right; }
        
        .bucket-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bucket-text h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
          margin-bottom: 2px;
        }

        .bucket-text p {
          font-size: 0.7rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 1000px) {
          .tech-map-container {
            height: 500px;
            transform: scale(0.85);
          }
          .bucket-card { width: 180px; }
        }

        @media (max-width: 768px) {
          .tech-map-container {
            display: none; /* Hide complex map on mobile systems for better perf/readability */
          }
        }
      `}} />
    </div>
  );
};

export default InteractiveTechMap;
