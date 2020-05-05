
import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">QuirkyQoutes</a></li>
              {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {data.name}.</h1>
              <h3>I'm a <span>{data.role}</span>. Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
              <li><a href="https://www.facebook.com/kinjal.jha.71" target='_blank'><i className="fa fa-facebook" /></a></li>
                <li><a href="https://twitter.com/jha_kinjal" target='_blank'><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/kinjal-jha-88102110b/" target='_blank'><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/kinjal_jha/" target='_blank'><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header> {/* Header End */}
      </React.Fragment>
    );
  }
}



          {/* <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
      <div className="description-box">
        <h4>Task Manager</h4>
        <p>A backend project including API for create/update/delete functionalities in Express JS, data is maintained in MongoDB, Mongoose for scheme definition, and Chai, Mocha for unit testcasing</p>
        {/* <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span> 
      </div>
      <div className="link-box">
        <a href="https://github.com/kinjaljha/task_manager">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>*/}
