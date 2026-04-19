import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const HireMeForm = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      'service_f4hpxwh',
      'template_rkobe18',
      formRef.current,
      {
        publicKey: 'GH_fjeGlUVgqKo0yl',
      }
    )
      .then((result) => {
        setIsSending(false);
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => {
          setStatus(null);
          onClose();
        }, 3000);
      }, (error) => {
        setIsSending(false);
        setStatus('error');
      });
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              cursor: 'pointer'
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-40%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-40%' }}
            className="glass"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              width: '95%',
              maxWidth: '500px',
              padding: '40px',
              zIndex: 1001,
              borderRadius: '24px',
              background: 'var(--surface-color)',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 0 50px rgba(183, 28, 28, 0.2)',
              overflowY: 'auto',
              maxHeight: '90vh'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Hire Me</h2>
              <button 
                onClick={onClose}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'white', 
                  fontSize: '1.5rem', 
                  cursor: 'pointer',
                  opacity: 0.7
                }}
              >
                ✕
              </button>
            </div>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="user_name" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="email" name="user_email" placeholder="Email Address" required />
              </div>
              <div className="input-group">
                <input type="text" name="subject" placeholder="Subject / Company" required />
              </div>
              <div className="input-group">
                <textarea name="message" placeholder="Tell me about your project..." rows="4" required></textarea>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="status-message success"
                  >
                    <CheckCircle size={18} />
                    <span>Message sent! Closing soon...</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="status-message error"
                  >
                    <AlertCircle size={18} />
                    <span>Failed to send. Try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: isSending ? 1 : 1.02, boxShadow: isSending ? 'none' : 'var(--shadow-neon)' }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                type="submit"
                disabled={isSending}
                style={{
                  width: '100%',
                  background: 'var(--primary-color)',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: isSending ? 'not-allowed' : 'pointer',
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  opacity: isSending ? 0.7 : 1
                }}
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>

            <style dangerouslySetInnerHTML={{ __html: `
              .input-group {
                margin-bottom: 20px;
              }
              .input-group input, 
              .input-group textarea {
                width: 100%;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid var(--glass-border);
                padding: 14px 20px;
                border-radius: 12px;
                color: white;
                font-family: inherit;
                font-size: 1rem;
                outline: none;
                transition: border-color 0.3s, box-shadow 0.3s;
              }
              .input-group input:focus, 
              .input-group textarea:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 10px rgba(255, 59, 46, 0.2);
              }
              .input-group input::placeholder, 
              .input-group textarea::placeholder {
                color: rgba(255, 255, 255, 0.4);
              }
              .status-message {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 14px;
                border-radius: 10px;
                margin-bottom: 20px;
                font-size: 0.85rem;
              }
              .status-message.success {
                background: rgba(34, 197, 94, 0.1);
                color: #4ade80;
                border: 1px solid rgba(74, 222, 128, 0.2);
              }
              .status-message.error {
                background: rgba(239, 68, 68, 0.1);
                color: #f87171;
                border: 1px solid rgba(248, 113, 113, 0.2);
              }
              .animate-spin {
                animation: spin 1s linear infinite;
              }
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @media (max-width: 480px) {
                form {
                  padding: 20px 0;
                }
                h2 {
                  font-size: 1.5rem !important;
                }
                .input-group input, 
                .input-group textarea {
                  padding: 12px 16px;
                  font-size: 0.9rem;
                }
              }
            `}} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HireMeForm;
