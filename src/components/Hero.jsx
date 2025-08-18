import React from "react";

export default function Hero() {
  return (
     <section id="home" className="hero">
        <div className="hero-content">
            <div className="hero-badge">
                <span className="status-dot"></span>
                Available for freelance
            </div>
            <h1 className="hero-title">Suryansh Kumar Singh</h1>
            <p className="hero-subtitle">Creative Developer & Problem Solver</p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary" style={{ borderRadius: "100px", padding: "16px 16px" }}>
                    <i className="fas fa-rocket me-1"></i>
                    View Portfolio
                </a>
                <a 
                    href="https://drive.google.com/file/d/1zP0EfBHcqLt_RwwLvdDo9aL5oS04a3QN/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary" 
                    style={{ borderRadius: "100px", padding: "16px 16px" }}
                    download="Suryansh_Kumar_Singh_Resume.pdf"
                >
                    <i className="fas fa-file-download me-1"></i>
                    Resume
                </a>
            </div>
        </div>
        <div className="hero-scroll">
            <span>Scroll Down</span>
            <div className="scroll-line"></div>
        </div>
    </section>
  );
}