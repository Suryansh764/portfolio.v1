import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Suryansh</div>
        

        <ul className="nav-links desktop-nav">
          <li>
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className={activeSection === 'home' ? 'active' : ''}
              onSetActive={() => handleSetActive('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className={activeSection === 'about' ? 'active' : ''}
              onSetActive={() => handleSetActive('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className={activeSection === 'skills' ? 'active' : ''}
              onSetActive={() => handleSetActive('skills')}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className={activeSection === 'projects' ? 'active' : ''}
              onSetActive={() => handleSetActive('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className={activeSection === 'contact' ? 'active' : ''}
              onSetActive={() => handleSetActive('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>


        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>


        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`} style={{padding: "0px  0px   0px 20px"}}>
          <div className="mobile-nav-container" style={{background: "linear-gradient(45deg, var(--primary), var(--secondary))"}} >
            <ul className="mobile-nav-links" >
            <li>
              <Link 
                style={{ color: "white" }}
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                onClick={closeMenu}
                onSetActive={() => handleSetActive('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
               style={{ color: "white" }}
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                onClick={closeMenu}
                onSetActive={() => handleSetActive('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
               style={{ color: "white" }}
                to="skills" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                onClick={closeMenu}
                onSetActive={() => handleSetActive('skills')}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
               style={{ color: "white" }}
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                onClick={closeMenu}
                onSetActive={() => handleSetActive('projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
               style={{ color: "white" }}
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                onClick={closeMenu}
                onSetActive={() => handleSetActive('contact')}
              >
                Contact
            </Link>
            </li>
          </ul>
          </div>
          
        </div>


        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}