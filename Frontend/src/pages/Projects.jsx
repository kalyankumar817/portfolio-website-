import React from 'react'
import "../styles/Projects.css";
import hospialimage from '../images/hospitalmanagement.png';
import ecommerceimage from '../images/Ecommerce.png';
import flashionflairimage from '../images/Flashionflair.png';

const Projects = () => {
  return (
    <div className='project-container'>
      <h2 style={{
        textAlign: 'center', color: 'Khaki', fontSize: '50px', fontWeight: 'bold', margin: '40px', textDecoration:
          'underline'
      }}>Projects</h2>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <div className='projects'>
            <a href='https://github.com/kalyankumar817/Hospital-Mangement-Django-' target='_blank' rel='noopener noreferrer'>
              <img src={hospialimage} alt='hospitalimage' />
              <div className='overlay'>
                <p style={{textDecoration:'underline'}}>View on GitHub</p>
              </div>
            </a>
            <br />
            <br />
            <h3>Hospital Management System</h3>
            <p style={{ color: 'springgreen' }}>A comprehensive system designed to streamline hospital operations.</p>
            <ul>
              <li><span style={{ color: 'tomato' }}>**Patient Registration**:</span> Manage patient information and records efficiently.</li>
              <li><span style={{ color: 'tomato' }}>**Doctors List**:</span> View and manage a comprehensive list of doctors.</li>
              <li><span style={{ color: 'tomato' }}>**Appointment Scheduling**:</span> Book, update, and track patient appointments seamlessly.</li>
            </ul>
            <p><strong><span style={{ color: 'tomato' }}>Technologies Used:</span></strong> Python, Django, HTML, CSS, JavaScript, MYSQL</p>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <div className='projects'>
          <a href='https://github.com/kalyankumar817/E-commerce' target='_blank' rel='noopener noreferrer'>
              <img src={ecommerceimage} alt='ecommerceimage' />
              <div className='overlay'>
                <p style={{textDecoration:'underline'}}>View on GitHub</p>
              </div>
            </a>
            <br />
            <br />
            <h3>E-Commerce Website</h3>
            <p style={{ color: 'springgreen' }}>A robust platform built to deliver seamless online shopping experiences.</p>
            <ul>
              <li><span style={{ color: 'tomato' }}>**Home**:</span> Developed a dynamic homepage to display all products with category-wise organization.</li>
              <li><span style={{ color: 'tomato' }}>**Cart**:</span> Enabled users to add products to the cart by clicking on the product image, with options for quantity management.</li>
              <li><span style={{ color: 'tomato' }}>**Filter And Search**:</span> Implemented an advanced search and filter functionality using tags, keywords, and categories for easier product discovery.</li>
            </ul>
            <p><strong><span style={{ color: 'tomato' }}>Technologies Used:</span></strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB.</p>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <div className='projects'>
          <a href='https://github.com/kalyankumar817/FlashionAuth' target='_blank' rel='noopener noreferrer'>
              <img src={flashionflairimage} alt='flashionflairimage' />
              <div className='overlay'>
                <p style={{textDecoration:'underline'}}>View on GitHub</p>
              </div>
            </a>
            <br />
            <br />
            <h3>Flashion Flair</h3>
            <p style={{ color: 'springgreen' }}>A feature-rich platform designed to offer a seamless shopping experience for menswear, womenswear, and kidswear.</p>
            <ul>
              <li><span style={{ color: 'tomato' }}>**Home**:</span> Created a dynamic homepage showcasing collections for men, women, and kids, with easy navigation and seasonal highlights.</li>
              <li><span style={{ color: 'tomato' }}>**Product Categories**:</span>Organized product listings into menswear, womenswear, and kidswear for streamlined browsing.</li>
              <li><span style={{ color: 'tomato' }}>**Filter And Search**:</span>Implemented robust search and filter options allowing users to find products by size, color, price range, and category.</li>
            </ul>
            <p><strong><span style={{ color: 'tomato' }}>Technologies Used:</span></strong> HTML, CSS, JavaScript, ASP.NET MVC, C#, SQL Server.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
