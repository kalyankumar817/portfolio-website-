import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import "./App.css";
import ParticlesBackground from './particles/ParticlesBackground';
import "bootstrap/dist/css/bootstrap.min.css";
import Userdetails from './components/Userdetails';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // to track active section

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close menu if in mobile view
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "home"; // Default section

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60; // Offset for navbar height
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Router>
            <header>
                <div className='navbar-container'>
                    <nav className='navbar'>
                        <div className='brand'>
                            Kalyan
                        </div>
                        <div className='toggle-btn'>
                            <button className='toggle-btn-openclose' onClick={toggleMenu}>
                                {isOpen ? '✖' : '☰'}
                            </button>
                        </div>
                        <div className='navbar-links'>
                            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                            <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                                <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
                                <li><a onClick={() => scrollToSection('resume')} className={activeSection === 'resume' ? 'active' : ''}>Resume</a></li>
                                <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
                                <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
                                <li><a onClick={() => scrollToSection('contacts')} className={activeSection === 'contacts' ? 'active' : ''}>Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <ParticlesBackground />
            <main>
                <Routes>
                    <Route path='/' element={<Home scrollToSection={scrollToSection} />} />
                    <Route path='/home' element={<Home scrollToSection={scrollToSection} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/getall' element={<Userdetails/>}/>
                </Routes>
            </main>
        </Router>
    );
};

export default App;
