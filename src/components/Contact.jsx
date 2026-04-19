import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
        console.log(result.text);
        setIsSending(false);
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, (error) => {
        console.log(error.text);
        setIsSending(false);
        setStatus('error');
      });
  };
  return (
    <section className="contact" id="contact">
      {/* Background Decor: Digital Pulse */}
      <div className="contact-bg-pulse" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,100 Q 250,50 500,100 T 1000,100" stroke="rgba(255,59,46,0.03)" fill="none" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M 0,200 Q 300,150 600,200 T 1200,200" stroke="rgba(255,59,46,0.02)" fill="none" strokeWidth="1">
            <animate attributeName="stroke-dasharray" from="1000,0" to="0,1000" dur="15s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Background Decor */}
      <div className="contact-bg-glow" aria-hidden="true" />
      
      <div className="container">
        <div className="contact-grid">
          {/* Left: Content & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <span className="contact-tag">Get in Touch</span>
            <h2 className="contact-title">Let's build <br /> something <span className="highlight">great.</span></h2>
            <p className="contact-desc">
              Whether you have a specific project in mind or just want to say hello, 
              feel free to reach out. I'm always open to new opportunities and creative collaborations.
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="method-label">Email me at</span>
                  <a href="mailto:amolj9238@gmail.com" className="method-value">amolj9238@gmail.com</a>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="method-label">Located in</span>
                  <span className="method-value">Latur, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form-container"
          >
            <div className="contact-card glass">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="user_name" placeholder="John Doe" required />
                  </div>
                  <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" name="user_email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="Project Inquiry" required />
                </div>
                
                <div className="input-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell me about your project or just say hi..." rows="5" required></textarea>
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
                      <span>Message sent successfully! I'll get back to you soon.</span>
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
                      <span>Something went wrong. Please try again later.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: isSending ? 1 : 1.02, boxShadow: isSending ? 'none' : 'var(--shadow-neon)' }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className={`submit-btn ${isSending ? 'loading' : ''}`}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact {
          padding: 120px 0;
          position: relative;
          background: var(--bg-color);
          overflow: hidden;
        }

        .contact-bg-glow {
          position: absolute;
          top: 50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 59, 46, 0.08) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .contact-bg-pulse {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .contact-tag {
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
          font-size: 0.8rem;
          display: block;
          margin-bottom: 20px;
        }

        .contact-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .contact-title .highlight {
          color: var(--primary-color);
        }

        .contact-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 500px;
          line-height: 1.8;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .method-item {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .method-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 59, 46, 0.1);
          border: 1px solid rgba(255, 59, 46, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
        }

        .method-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .method-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .method-value:hover {
          color: var(--primary-color);
        }

        .contact-card {
          background: var(--surface-color);
          padding: 40px;
          border-radius: 32px;
          border: 1px solid var(--glass-border) !important;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-group {
          margin-bottom: 25px;
        }

        .input-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 10px;
          margin-left: 4px;
        }

        .input-group input, 
        .input-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          padding: 16px 20px;
          border-radius: 14px;
          color: white;
          font-family: var(--font-mono);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-group input:focus, 
        .input-group textarea:focus {
          border-color: var(--primary-color);
          background: rgba(255, 59, 46, 0.05);
          box-shadow: 0 0 15px rgba(255, 59, 46, 0.1);
        }

        .submit-btn {
          width: 100%;
          background: var(--primary-color);
          border: none;
          padding: 18px;
          border-radius: 16px;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-btn.loading {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          font-weight: 500;
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

        @media (max-width: 992px) {
          .contact { padding: 80px 0; }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-title {
            text-align: center;
          }
          .contact-desc {
            text-align: center;
            margin: 0 auto 40px;
          }
          .contact-methods {
            align-items: center;
          }
        }

        @media (max-width: 600px) {
          .contact { padding: 60px 0; }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .contact-card {
            padding: 25px 20px;
            border-radius: 20px;
          }
          .contact-title { font-size: 2.2rem; }
          .method-value { font-size: 1rem; }
        }
      `}} />
    </section>
  );
};

export default Contact;
