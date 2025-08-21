import React from "react";
import { Github, Linkedin, Twitter, Mail, HeartIcon } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/suryansh764",
      icon: Github,
      hoverColor: "hover:text-purple-400"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/suryansh-kumar-singh",
      icon: Linkedin,
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      url: "https://x.com/Suryansh_6092",
      icon: Twitter,
      hoverColor: "hover:text-cyan-400"
    },
    
  ];

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Suryansh Kumar Singh</span>
              <div className="logo-dot"></div>
            </div>
            <p className="footer-tagline">
            Learning full stack development at <span style={{color:"lightgreen"}}>neog.camp</span>
            </p>
          </div>


          <div className="footer-links">
            <h4>Quick Links</h4>
          
            <nav className="footer-nav">
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#contact" className="footer-link">Contact</a>
            </nav>
          </div>


          <div className="footer-social-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <IconComponent size={20} />
                    <span className="social-tooltip">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-text">
              © {year} Suryansh. Built with{" "}
            <HeartIcon 
                size={16} 
                className="inline-block mx-1 text-red-400 animate-pulse" 
                fill="currentColor"
              />
              and lots of caffeine ☕
            </p>
            <p className="footer-subtext">
              All rights reserved • Made in India 🇮🇳
            </p>
          </div>
        </div>
      </div>


      <div className="footer-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          padding: 80px 0 40px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--glass-border);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 50px;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
          .footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 12px 0;
}

.logo-text {
  font-size: 30px;
  font-weight: 900;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
  margin: 0;
  padding: 0;
}

.footer-tagline {
  margin: 0 !important;
  padding: 0;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
}

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 12px 0;
}

        .logo-text {
  font-size: 30px;
  font-weight: 900;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
  margin: 0;
  padding: 0;
}

        .logo-dot {
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--primary);
          animation: pulse 2s infinite;
        }

     .footer-tagline {
  margin: 0 !important;
  padding: 0;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
}

        .footer-links h4,
        .footer-social-section h4 {
          color: var(--text-primary);
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 24px;
          position: relative;
          padding-left: 20px;
        }

        .footer-links h4::before,
        .footer-social-section h4::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          border-radius: 2px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 15px;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: 0;
          opacity: 0;
          transition: all 0.3s ease;
          color: var(--primary);
        }

        .footer-link:hover {
          color: var(--primary);
          padding-left: 25px;
          text-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
        }

        .footer-link:hover::before {
          opacity: 1;
        }

        .social-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .social-link {
          position: relative;
          width: 50px;
          height: 50px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          opacity: 0;
          transition: all 0.3s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          color: white;
          transform: translateY(-8px) scale(1.1);
          border-color: transparent;
          box-shadow: 
            0 0 30px rgba(0, 245, 255, 0.6),
            0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .social-tooltip {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          color: var(--text-primary);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .social-link:hover .social-tooltip {
          opacity: 1;
          bottom: -45px;
        }

        .footer-bottom {
          position: relative;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
          margin-bottom: 30px;
          position: relative;
        }

        .footer-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; width: 0; }
          50% { opacity: 1; width: 100px; }
        }

        .footer-bottom-content {
          text-align: center;
        }

        .footer-text {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        .footer-subtext {
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 300;
        }

        .footer-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.3;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          animation: float-1 15s ease-in-out infinite;
        }

        .particle-2 {
          top: 60%;
          right: 15%;
          animation: float-2 12s ease-in-out infinite;
          background: var(--secondary);
        }

        .particle-3 {
          bottom: 30%;
          left: 70%;
          animation: float-3 18s ease-in-out infinite;
          background: var(--accent);
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          33% { transform: translate(30px, -20px) scale(1.2); opacity: 0.6; }
          66% { transform: translate(-20px, -40px) scale(0.8); opacity: 0.4; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          50% { transform: translate(-40px, 20px) rotate(180deg); opacity: 0.7; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -30px) scale(1.3); opacity: 0.5; }
          75% { transform: translate(-30px, 10px) scale(0.7); opacity: 0.6; }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }

          .footer {
            padding: 60px 0 30px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .footer-brand {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

          .footer-nav {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .social-links {
            justify-content: center;
          }

          .footer-text {
            font-size: 13px;
            flex-direction: column;
            gap: 8px;
          }

          .logo-text {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            gap: 30px;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .footer-nav {
            flex-direction: column;
            gap: 15px;
          }

          .logo-text {
            font-size: 24px;
          }
        }
      `}</style>
    </footer>
  );
}