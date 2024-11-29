import React from 'react';
import TypingEffect from 'react-typing-effect';
import "./Home.css";
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';

const Home = ({ scrollToSection }) => {

  return (
    <>
      <section id='home'>
        <div className='animated-heading'>
          <h1 className='slide-in'>
            <span style={{ color: 'red', fontSize: '50px',fontWeight:'500'}}>Hey! ,</span> Welcome To My Portfolio
          </h1>
        </div>
        <div className='home-text-container'>
          <h1>
            <span style={{ color: 'yellow' }}>
              <TypingEffect
                text="Hello, I'm Kalyan Kumar"
                speed={100} // typing speed
                eraseSpeed={50} // erase speed
                eraseDelay={2000} // delay before erasing
                typingDelay={500} // delay before starting typing
              />
            </span>
            <br />
            <span style={{ color: 'blue' }}>Software Developer</span>
            <br />
            || Python Developer || Web Developer || MERN Developer
          </h1>
          <br />
          <div className='buttons-container'>
            <a href="https://drive.google.com/file/d/1grGqy-eoYVY9DwsuOaSyEq-OodXSCZdy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='resume-link-btn'>Download Resume</button>
            </a>
            <button onClick={() => scrollToSection('contacts')} className='hire-btn'>Hire Me</button>
          </div>
        </div>
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='resume'>
        <Resume/>
      </section>
      <section id='skills'>
        <Skills/>
      <section id='projects'>
        <Projects />
      </section>
      </section>
      <section id='contacts'>
        <Contacts />
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Home;
