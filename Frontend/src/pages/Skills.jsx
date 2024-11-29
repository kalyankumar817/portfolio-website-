import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
      <h2 style={{textAlign:'center', color:'Khaki', fontSize:'50px', fontWeight:'bold',margin:'40px', textDecoration:
          'underline'
        }}>Skills</h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            {/* //html */}
            <div className="html-container">
              <h5>HTML :<span style={{ color: 'DeepPink' }}>95%</span></h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "95%" }} // Correct percentage format
                >
                  <span className="visually-hidden">95% Complete</span>
                </div>
              </div>
            </div>
            <br />
            {/* //css */}
            <div className="css-container">
              <h5>CSS :<span style={{ color: 'DeepPink' }}>90%</span></h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }} // Correct percentage format
                >
                  <span className="visually-hidden">90% Complete</span>
                </div>
              </div>
            </div>
            <br />
            {/* //js */}
            <div className="js-container">
              <h5>JAVA SCRIPT :<span style={{ color: 'DeepPink' }}>70%</span></h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }} // Correct percentage format
                >
                  <span className="visually-hidden">70% Complete</span>
                </div>
              </div>
            </div>
            <br />
            {/* //Python */}
            <div className="python-container">
              <h5>PYTHON :<span style={{ color: 'DeepPink' }}>90%</span></h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }} // Correct percentage format
                >
                  <span className="visually-hidden">90% Complete</span>
                </div>
              </div>
            </div>
            <br />
            {/* //sql */}
            <div className="sql-container">
              <h5>SQL :<span style={{ color: 'DeepPink' }}>70%</span></h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }} // Correct percentage format
                >
                  <span className="visually-hidden">70% Complete</span>
                </div>
              </div>
            </div>
            <br />
            {/* //Django */}
            <div className="django-container">
              <h5>Django :<span style={{ color: 'DeepPink' }}>70%</span></h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }} // Correct percentage format
                >
                  <span className="visually-hidden">70% Complete</span>
                </div>
              </div>
            </div>
            <br/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            {/* //bootstrap */}
            <div className="bootstrap-container">
                <h5>BOOTSTRAP :<span style={{color:'deeppink'}}>70%</span></h5>
                <div className="progress">
                  <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width:"70%"}}
                  >
                  <span className="visually-hidden">70% Complete</span>
                  </div>
                </div>
            </div>
            <br/>
            {/* {//React js} */}
            <div className="reactjs-container">
              <h5>REACT JS :<span style={{color:'deeppink'}}>60%</span></h5>
              <div className="progress">
                <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"60%"}}
                >
                <span className="visually-hidden">60% Complete</span>
                </div>
              </div>
            </div>
            <br/>
            {/* //Node.js */}
            <div className="nodejs-container">
                <h5>NODE JS :<span style={{ color: 'DeepPink' }}>50%</span></h5>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary" // Optional: Add `bg-primary` for color
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }} // Correct percentage format
                  >
                    <span className="visually-hidden">50% Complete</span>
                  </div>
                </div>
            </div>
            <br/>
            {/* //Express js */}
            <div className="expressjs-container">
              <h5>EXPRESS JS :<span style={{color:'deeppink'}}>50%</span></h5>
              <div className="progress">
                <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"50%"}}
                >
                <span className="visually-hidden">50% Complete</span>
                </div>
              </div>
            </div>
            <br/>
            {/* //mongodb */}
            <div className="mongodb-container">
              <h5>MONGO DB :<span style={{color:'deeppink'}}>50%</span></h5>
              <div className="progress">
                <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"50%"}}
                >
                <span className="visually-hidden">50% Complete</span>
                </div>
              </div>
            </div>
            <br/>
            {/* //Dotnet */}
            <div className="dotnet-container">
              <h5>C#,ASP.NET :<span style={{color:'deeppink'}}>70%</span></h5>
              <div className="progress">
                <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"70%"}}
                >
                <span className="visually-hidden">70% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
