import React from "react";

import IMG_1774 from "../assets/IMG_1774.jpg"; 
export default function About() {
  return (
     <section id="about" class="section">
        <div class="section-header">
            <span class="section-badge">About Me</span>
            <h2 class="section-title">Crafting Digital Experiences</h2>
            <p class="section-subtitle">
                I'm a passionate developer who loves creating beautiful, functional, and user-friendly digital experiences.
            </p>
        </div>
        <div class="about-grid">
            <div class="about-image">
                <div class="about-image-wrapper">
                    <img src={IMG_1774} />
                </div>
                <div class="about-decorations">
                    <i class="fas fa-code"></i>
                </div>
            </div>
            <div class="about-content">
                <h3>Holla! I'm Suryansh, a creative developer based in Bangalore, India.</h3>
                <p style={{ fontSize: "18px"}}>
                   Passionate full-stack developer crafting intuitive digital experiences with modern technologies.


                </p>
                <p style={{ fontSize: "18px"}}>
                   Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.
                </p>
                {/* <p>
                    My goal is to create digital products that not only look amazing but also provide 
                    meaningful value to users and businesses alike.
                </p> */}
            </div>
        </div>
        {/* <div class="stats-grid">
            <div class="stat-card glass-card">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-card glass-card">
                <div class="stat-number">2+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-card glass-card">
                <div class="stat-number">*+</div>
                <div class="stat-label">Happy Clients</div>
            </div>
        </div> */}
    </section>
  );
}
