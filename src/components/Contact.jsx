import React, { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "kontact2suryanshsks@gmail.com";
  
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Failed to copy email');
    }
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <section id="contact" className="section" data-animate>
         <div class="section-header">
            <span class="section-badge">Contact</span>
            <h2 className="section-title">
          <span className="accent">Get</span> in touch
        </h2>
            
        </div>
      <div className="container">
      
        
        <div className="contact-form">

          <div className="contact-bg-animation"></div>
          

          <div className="contact-content">
            <div className="contact-header">
              <div className="contact-icon">
                <div className="icon-pulse"></div>
                <span style={{color: "black"}}>✉️</span>
              </div>
              <h3>Let's work together</h3>
              <p>Ready to bring your ideas to life? Drop me a line and let's create something amazing!</p>
            </div>


            <div className="email-showcase">
              <div className="email-label">
                <span className="label-dot"></span>
                Email Address
              </div>
              
              <div className="email-container">
                <div className="email-text">{email}</div>
                <div className="email-actions">
                  <button 
                    className="action-btn copy-btn" 
                    onClick={handleCopyEmail}
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <span className="btn-icon">✓</span>
                        <span className="btn-text">Copied!</span>
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">📋</span>
                        <span className="btn-text">Copy</span>
                      </>
                    )}
                  </button>
                  
                  <button 
                    className="action-btn email-btn" 
                    onClick={handleEmailClick}
                    title="Open email client"
                  >
                    <span className="btn-icon">🚀</span>
                    <span className="btn-text">Email Me</span>
                  </button>
                </div>
              </div>
            </div>

          
             
         
      
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Contact section enhanced styles */
        #contact {
          position: relative;
          overflow: hidden;
        }

        #contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 40%, rgba(0, 245, 255, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(255, 0, 110, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }

        .contact-form {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Floating background animation */
        .contact-bg-animation {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(0, 245, 255, 0.05) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 0, 110, 0.05) 1px, transparent 1px);
          background-size: 120px 120px, 180px 180px;
          animation: float 25s linear infinite;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes float {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Main content container */
        .contact-content {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 32px;
          padding: 60px;
          position: relative;
          overflow: hidden;
        }

        .contact-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
          opacity: 0.8;
        }

        /* Header section */
        .contact-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          font-size: 32px;
          margin-bottom: 25px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          backdrop-filter: blur(20px);
        }

        .icon-pulse {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          opacity: 0.3;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        .contact-header h3 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 15px;
          text-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
        }

        .contact-header p {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Email showcase */
        .email-showcase {
          margin-bottom: 40px;
        }

        .email-label,
        .social-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .label-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }

        .email-container {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 25px;
          position: relative;
          overflow: hidden;
        }

        .email-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(255, 0, 110, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .email-container:hover::before {
          opacity: 1;
        }

        .email-text {
          font-size: 24px;
          font-weight: 600;
          color: var(--primary);
          text-align: center;
          margin-bottom: 25px;
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 20px rgba(0, 245, 255, 0.4);
          letter-spacing: 1px;
        }

        .email-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          min-width: 120px;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .copy-btn:hover {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.4);
        }

        .email-btn {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
        }

        .email-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(0, 245, 255, 0.6);
          background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
        }

        .btn-icon {
          font-size: 16px;
        }

        .btn-text {
          font-weight: 600;
        }

        /* Social section */
        .social-section {
          border-top: 1px solid var(--glass-border);
          padding-top: 30px;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 15px;
        }

        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          transition: left 0.5s ease;
        }

        .social-card:hover::before {
          left: 100%;
        }

        .social-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .social-icon {
          font-size: 24px;
          margin-bottom: 5px;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .contact-content {
            padding: 40px 30px;
            border-radius: 24px;
          }

          .contact-header h3 {
            font-size: 24px;
          }

          .contact-header p {
            font-size: 15px;
          }

          .email-text {
            font-size: 18px;
          }

          .email-actions {
            flex-direction: column;
            gap: 12px;
          }

          .action-btn {
            width: 100%;
          }

          .social-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .contact-content {
            padding: 30px 20px;
          }

          .email-text {
            font-size: 16px;
            word-break: break-all;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .contact-header h3 {
            font-size: 22px;
          }
        }

        /* Animation on scroll */
        @media (prefers-reduced-motion: no-preference) {
          .contact-content {
            opacity: 0;
            transform: translateY(30px);
            animation: slideIn 0.8s ease forwards;
            animation-delay: 0.2s;
          }
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}