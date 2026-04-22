import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404 - Page Not Found | Amol Jadhav</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="not-found-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="error-icon-wrapper"
        >
          <AlertTriangle size={80} className="error-icon" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="error-code"
        >
          404
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="error-message"
        >
          Lost in Space?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="error-description"
        >
          The page you're looking for has been moved, deleted, or never existed in this dimension.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="error-actions"
        >
          <Link to="/" className="btn-filled back-home-btn">
            <Home size={18} />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline back-btn">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="decor-glow" />
      <div className="decor-grid" />

      <style dangerouslySetInnerHTML={{ __html: `
        .not-found-page {
          min-height: 100vh;
          width: 100%;
          background: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        .not-found-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 600px;
        }

        .error-icon-wrapper {
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
        }

        .error-icon {
          color: var(--primary-color);
          filter: drop-shadow(0 0 15px rgba(255, 59, 46, 0.4));
        }

        .error-code {
          font-size: clamp(6rem, 15vw, 10rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 10px;
          background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -5px;
        }

        .error-message {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 600;
          margin-bottom: 20px;
          color: #fff;
          text-align: center;
        }

        .error-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .error-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .back-home-btn, .back-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .back-btn {
          background: transparent;
          cursor: pointer;
        }

        .decor-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 59, 46, 0.1) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 1;
          pointer-events: none;
        }

        .decor-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .error-actions {
            flex-direction: column;
            width: 100%;
          }
          .back-home-btn, .back-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}} />
    </div>
  );
};

export default NotFound;
