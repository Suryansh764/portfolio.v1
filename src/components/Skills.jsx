import React from "react";
import { FaReact, FaServer, FaTools } from "react-icons/fa";


const SKILLS = [
  "HTML5", "CSS3", "Sass", "Tailwind", "JavaScript", "TypeScript",
  "React", "Vite", "Redux", "Framer Motion", "Node.js", "Express",
  "Accessibility (a11y)", "Testing Library", "Jest", "Git/GitHub",
];

export default function Skills() {
  return (
    <section id="skills" class="section">
        <div class="section-header">
            <span class="section-badge">Skills</span>
            <h2 class="section-title">Technical Arsenal</h2>
            <p class="section-subtitle">
                A comprehensive toolkit for building cutting-edge digital experiences
            </p>
        </div>
        <div class="skills-grid">
            <div class="skill-card glass-card">
                <h3>
                    <div class="skill-icon">
                        <i class="fab fa-react"></i>
                    </div>
                    Frontend Development
                </h3>
                <div class="skills-list">
                    <span class="skill-item">React</span>
                    <span class="skill-item">Next.js</span>
                    <span class="skill-item">TypeScript</span>
                    <span class="skill-item">Bootstrap</span>



                    <span class="skill-item">Tailwind CSS</span>
                </div>
            </div>
            <div class="skill-card glass-card">
                <h3>
                    <div class="skill-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    Backend Development
                </h3>
                <div class="skills-list">
                    <span class="skill-item">Node.js</span>
                    <span class="skill-item">Python</span>
                    <span class="skill-item">Express.js</span>

                    <span class="skill-item">PostgreSQL</span>
                    <span class="skill-item">MongoDB</span>


                </div>
            </div>
            <div class="skill-card glass-card">
                <h3>
                    <div class="skill-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    Tools & Cloud
                </h3>
                <div class="skills-list">
                    <span class="skill-item">AWS</span>
                    <span class="skill-item">Docker</span>
                    <span class="skill-item">Kubernetes</span>
                    <span class="skill-item">Vercel</span>
                    <span class="skill-item">Firebase</span>
                </div>
                </div>

                
                </div>
                </section>
  );
}
