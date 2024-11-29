import React from 'react'
import '../styles/About.css'
import kalyanimage from '../images/kalyan.jpg'

const About = () => {
  return (
    <div className='about-block' >
      <div className='image-block'>
      <img src={kalyanimage} alt='kalyan image' />
      </div>
      <div className='about-text-block'>
        <h2 style={{textAlign:'center', color:'Khaki', fontSize:'50px', fontWeight:'bold', textDecoration:
          'underline'
        }}>About Me</h2>
        <br/>
        <h1 style={{color:'DarkGoldenRod'}}>Hi, I'm Kalyan Kumar</h1>
        <br/>
        <p> I’m a dedicated Web Developer with a passion for creating user-centric front-end designs and a growing expertise in back-end development. With a strong foundation in both areas, I aim to become a well-rounded Full Stack Developer, skilled in delivering seamless and high-quality web experiences.

          My journey in web development has been driven by a commitment to continual learning and adaptability, allowing me to stay current with the latest tools and frameworks. I thrive on tackling complex challenges, building responsive websites, and writing clean, efficient code that bridges the gap between functionality and design.

          As I continue to expand my knowledge and refine my skills in both front-end and back-end development, I’m excited to bring a full-stack approach to my work and contribute meaningfully to innovative projects and collaborative teams.
        </p>
      </div>
    </div>
  )
}

export default About
