import React, { useState } from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div className='total-block'>
      <h2 style={{textAlign:'center', color:'Khaki', fontSize:'50px', fontWeight:'bold', textDecoration:
          'underline'
        }}>Resume</h2>
      <div className='heading-tabs'>
        <p
          className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
          onClick={() => opentab('education')}
        >
          Education
        </p>
        <p
          className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
          onClick={() => opentab('experience')}
        >
          Experience
        </p>
      </div>

      <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
        <ul>
          <li>
            <span>Siddartha Institute of Science & Technology — Puttur, AP</span>
            <br />
            Bachelor of Technology in Computer Science with a CGPA of 8.6 —<span style={{color:'khaki'}}>(Aug 2019 – Apr 2023)</span>
          </li>
          <li>
            <span>Sri Krishna Chaitanya Junior College — Nellore, AP</span>
            <br />
            MPC with a CGPA of 9.2 — <span style={{color:'khaki'}}>(Jun 2017 – Apr 2019)</span>
          </li>
          <li>
            <span>Sri Netaji Em High School — Nellore, AP</span>
            <br />
            Scored with a CGPA of 8.8 — <span style={{color:'khaki'}}>(Jun 2016 – Apr 2017)</span>
          </li>
        </ul>
      </div>

      <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
        <ul>
          <li>
            <span>Innomatics Reasearch Labs(Internship) — (Hyderabad)</span>
            <br />
            MERN Stack Developer — <span style={{color:'khaki'}}>(Sep 2024 – Nov 2024)</span>
          </li>
          <li>
            <span>Naryana Tech(Internship Trainee) — (Hyderabad)</span>
            <br />
            Python Full Stack — <span style={{color:'khaki'}}>(Jul 2023 – Dec 2023)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
