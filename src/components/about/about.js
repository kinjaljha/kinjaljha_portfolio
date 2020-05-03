
import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Skilled in Node JS, React JS, Python, Backend Development 
              with Databases (MySQL, MongoDB). Experience 
              in app development with MERN(Mongo DB, Express JS, React JS/ Redux and Node JS) stack technology . 
              Strong engineering professional with Bachelor of Technology (B.Tech.) focused 
              in Computer Science and Engineering from Dharm Sinh Desai University, Gujarat. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Kinjal Jha</span><br />
                  {/* <span>1 <br />
                    Zanzar<br />
                    Singapore 140055
                  </span><br /> */}
                  <span>+91-7226009231</span><br />
                  <span>kinjaljha3@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1QjzwZeGzSs67fFp54dunZC7EgDkknxU0/view" className="button" target='_blank'><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
    
      </React.Fragment>
    );
  }
}
